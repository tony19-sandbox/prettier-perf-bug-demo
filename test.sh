#!/bin/sh -e

# Output the performance (in time) of index.js (calls prettier.format())
echo "running..."
time (node ./index.js)
