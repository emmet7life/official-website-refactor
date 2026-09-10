param(
  [string]$Source = "docs\hdmicrowave-resource\产品中心\第九版手册目录24.12.17.docx",
  [string]$Output = "src\components\productcenter\product-catalog.generated.json"
)

$ErrorActionPreference = "Stop"
$workspaceRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot "..")).Path
$sourcePath = (Resolve-Path -LiteralPath (Join-Path $workspaceRoot $Source)).Path
$outputPath = Join-Path $workspaceRoot $Output

Add-Type -AssemblyName System.IO.Compression.FileSystem
$archive = [System.IO.Compression.ZipFile]::OpenRead($sourcePath)
try {
  $entry = $archive.GetEntry("word/document.xml")
  if (-not $entry) { throw "word/document.xml was not found in $sourcePath" }
  $reader = [System.IO.StreamReader]::new($entry.Open())
  try { [xml]$document = $reader.ReadToEnd() } finally { $reader.Dispose() }
} finally {
  $archive.Dispose()
}

$namespace = [System.Xml.XmlNamespaceManager]::new($document.NameTable)
$namespace.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
$chapterNumbers = @{ "一" = "1"; "二" = "2"; "三" = "3"; "四" = "4"; "五" = "5"; "六" = "6" }
$records = [System.Collections.Generic.List[object]]::new()

foreach ($paragraph in $document.SelectNodes("//w:body/w:p", $namespace)) {
  $parts = [System.Collections.Generic.List[string]]::new()
  foreach ($node in $paragraph.SelectNodes(".//w:t | .//w:tab", $namespace)) {
    $parts.Add($(if ($node.LocalName -eq "tab") { "`t" } else { $node.InnerText }))
  }
  $line = ($parts -join "").Trim()
  if (-not $line) { continue }
  $entryText = ($line -replace "\t+\s*\d+\s*$", "").Trim()
  $code = $null
  $name = $null
  if ($entryText -match "^第([一二三四五六])章\s*(.+)$") {
    $code = $chapterNumbers[$Matches[1]]
    $name = $Matches[2].Trim()
  } elseif ($entryText -match "^(\d+(?:\.\d+)+)\s*(.+)$") {
    $code = $Matches[1]
    $name = $Matches[2].Trim()
  }
  if (-not $code -or -not $name) { continue }
  $segments = $code.Split(".")
  $parentId = if ($segments.Count -gt 1) { "catalog-" + (($segments[0..($segments.Count - 2)]) -join "-") } else { $null }
  $records.Add([pscustomobject]@{
    id = "catalog-" + ($segments -join "-")
    code = $code
    name = ($name -replace "\s+", " ")
    level = $segments.Count
    parentId = $parentId
    children = [System.Collections.Generic.List[object]]::new()
    kind = "category"
  })
}

$byId = @{}
foreach ($record in $records) { $byId[$record.id] = $record }
$roots = [System.Collections.Generic.List[object]]::new()
foreach ($record in $records) {
  if ($record.parentId -and $byId.ContainsKey($record.parentId)) { $byId[$record.parentId].children.Add($record) }
  else { $roots.Add($record) }
}

function Set-NodeKind([object]$node) {
  foreach ($child in $node.children) { Set-NodeKind $child }
  if ($node.children.Count -gt 0) { $node.kind = "category"; return }
  $chapter = $node.code.Split(".")[0]
  if ($chapter -eq "5") { $node.kind = "rich-text" }
  elseif ($chapter -eq "6") { $node.kind = "reference" }
  else { $node.kind = "product-list" }
}
foreach ($root in $roots) { Set-NodeKind $root }

$outputDirectory = Split-Path -Parent $outputPath
New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null
$roots | ConvertTo-Json -Depth 20 | Set-Content -LiteralPath $outputPath -Encoding utf8
Write-Output "Generated $($records.Count) catalog nodes from $Source"
