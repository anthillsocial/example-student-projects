#!/bin/bash

# Resize all JPG and PNG images to max width 1500px (maintain aspect ratio)

for img in *.jpg *.jpeg *.png; do
    # Skip if no matching files
    [ -e "$img" ] || continue

    echo "Resizing: $img"
    mogrify -resize 1500x "$img"
done

echo "Done."
