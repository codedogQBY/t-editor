#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function createPackage(packageName) {
    const packagePath = path.join(__dirname, '..', 'packages', packageName);

    // Create package directory
    fs.mkdirSync(packagePath, { recursive: true });

    // Create package.json
    const packageJson = {
        name: `@rich-text-editor/${packageName}`,
        version: '0.0.1',
        main: 'dist/index.js',
        types: 'dist/index.d.ts',
        scripts: {
            prepare: 'pnpm run build',
            build: 'tsc'
        },
        dependencies: {},
        devDependencies: {
            typescript: '^5.6.3'
        }
    };

    fs.writeFileSync(
        path.join(packagePath, 'package.json'),
        JSON.stringify(packageJson, null, 2)
    );

    // Create tsconfig.json
    const tsConfig = {
        extends: '../../tsconfig.json',
        compilerOptions: {
            outDir: './dist',
            rootDir: './src'
        },
        include: ['src']
    };

    fs.writeFileSync(
        path.join(packagePath, 'tsconfig.json'),
        JSON.stringify(tsConfig, null, 2)
    );

    // Create src directory and index.ts
    fs.mkdirSync(path.join(packagePath, 'src'));
    fs.writeFileSync(path.join(packagePath, 'src', 'index.ts'), '// Your code here');

    console.log(`Package ${packageName} created successfully!`);
}

// Get package names from command line arguments
const packageNames = process.argv.slice(2);

if (packageNames.length === 0) {
    console.log('Please provide at least one package name.');
    console.log('Usage: create-package <package1> <package2> ...');
    process.exit(1);
}

// Create each package
packageNames.forEach(packageName => {
    createPackage(packageName);
});

console.log('All packages created successfully!');
