#!/bin/bash

# Script to create tarballs for playwright, playwright-chromium, and playwright-core packages
# Tarballs will be created at the root level of the repository (without version in filename)

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PACKAGES=("playwright" "playwright-chromium" "playwright-core")

echo "Creating tarballs for packages: ${PACKAGES[*]}"
echo ""

for package in "${PACKAGES[@]}"; do
    package_dir="$SCRIPT_DIR/packages/$package"
    
    if [ ! -d "$package_dir" ]; then
        echo "Error: Package directory not found: $package_dir"
        exit 1
    fi
    
    echo "Packing $package..."
    
    # Run npm pack in the package directory and capture the tarball name
    tarball_name=$(cd "$package_dir" && npm pack --pack-destination "$SCRIPT_DIR" 2>/dev/null | tail -1)
    
    if [ -z "$tarball_name" ]; then
        echo "Error: Failed to pack $package"
        exit 1
    fi
    
    # Rename to remove version from filename
    final_name="${package}.tgz"
    mv "$SCRIPT_DIR/$tarball_name" "$SCRIPT_DIR/$final_name"
    
    echo "  Created: $final_name"
done

echo ""
echo "All tarballs created successfully at: $SCRIPT_DIR"
echo ""
ls -la "$SCRIPT_DIR"/*.tgz 2>/dev/null || echo "No tarballs found (this shouldn't happen)"

