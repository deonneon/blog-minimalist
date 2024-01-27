#!/bin/bash

# Create or clear the 'parse' file
> parse.txt

# Loop through all .ts and .tsx files in current and child directories, excluding node_modules, .netlify folder, reportWebVitals.js, and setupTests.js
find ./src -type d \( -name 'node_modules' -o -name '.netlify' -o -name '.next' -o -name '__tests__' \) -prune -o -type f \( -name "*.js" -o -name "*.css" -o -name "*.tsx" -o -name "*.ts -o -name "*.yaml" " \) ! -name 'reportWebVitals.js' ! -name 'setupTests.js' ! -name 'App.test.js' -print0 | while IFS= read -r -d '' file; do
    # Print the title (filename)
    echo "File: $file" >> parse.txt

    # Print the content of the file
    cat "$file" >> parse.txt

    # Print a separator
    echo -e "\n" >> parse.txt
done

echo "Concatenation complete. Output in 'parse.txt'."
