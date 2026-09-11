"""Crop the whitespace around product-category images for the product center.

The source images are kept intact. Cropped copies are written to the public asset
folder used by the Next.js product-center page.
"""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE = PROJECT_ROOT / "docs" / "hdmicrowave-resource" / "产品中心" / "产品图片" / "product" / "categories"
DEFAULT_OUTPUT = PROJECT_ROOT / "public" / "product-center" / "categories"
SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def crop_image(source: Path, destination: Path, pixels: int) -> None:
  with Image.open(source) as image:
    width, height = image.size
    if width <= pixels * 2 or height <= pixels * 2:
      raise ValueError(f"image is too small to crop {pixels}px on each edge: {source}")

    cropped = image.crop((pixels, pixels, width - pixels, height - pixels))
    save_options: dict[str, int | bool] = {"optimize": True}
    if source.suffix.lower() in {".jpg", ".jpeg", ".webp"}:
      save_options["quality"] = 95
    cropped.save(destination, **save_options)


def main() -> None:
  parser = argparse.ArgumentParser(description="Crop product-category images on all four edges.")
  parser.add_argument("--source", type=Path, default=DEFAULT_SOURCE, help="Directory containing original images.")
  parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT, help="Directory for cropped images.")
  parser.add_argument("--pixels", type=int, default=10, help="Pixels to crop from each edge (default: 10).")
  args = parser.parse_args()

  if args.pixels < 0:
    raise SystemExit("--pixels must be zero or greater")
  if not args.source.is_dir():
    raise SystemExit(f"source directory does not exist: {args.source}")

  args.output.mkdir(parents=True, exist_ok=True)
  images = sorted(path for path in args.source.iterdir() if path.is_file() and path.suffix.lower() in SUPPORTED_EXTENSIONS)
  if not images:
    raise SystemExit(f"no supported images found in: {args.source}")

  for image in images:
    crop_image(image, args.output / image.name, args.pixels)

  print(f"Cropped {len(images)} images by {args.pixels}px on each edge into: {args.output}")


if __name__ == "__main__":
  main()
