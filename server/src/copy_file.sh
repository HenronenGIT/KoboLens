#!/bin/bash

# Script to copy a file to the data directory.
# Usage: Set KOBO_FILE_PATH

# Read the path from constants.py
KOBO_FILE_PATH=$(python3 -c "import constants; print(constants.KOBO_FILE_PATH)")

# Check if the path was read successfully
if [ -z "$KOBO_FILE_PATH" ]; then
    echo "Error: Could not read KOBO_FILE_PATH from constants.py"
    exit 1
fi

# Check if the source file exists
if [ ! -f "$KOBO_FILE_PATH" ]; then
    echo "Error: Source file not found at $KOBO_FILE_PATH"
    exit 1
fi

# Create data directory if it doesn't exist
mkdir -p data

# Get the filename from the path
FILENAME=$(basename "$KOBO_FILE_PATH")

# Copy the file to the data directory
cp "$KOBO_FILE_PATH" "data/$FILENAME"

# Check if the copy was successful
if [ $? -eq 0 ]; then
    echo "Successfully copied $FILENAME to data directory"
else
    echo "Error: Failed to copy file"
    exit 1
fi

