const fs = require("fs");
const path = require("path");

const projectRoot = process.cwd(); // Get the root directory dynamically

function getComponentImports(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  // Regex to capture all import paths
  const importRegex = /from\s+['"]([^'"]+)['"]/g;
  const matches = [...content.matchAll(importRegex)];

  return matches
    .map(match => match[1])
    .filter(
      imp =>
        imp.startsWith("./") || imp.startsWith("../") || imp.startsWith("@/")
    ); // Keep only project-related imports
}

function analyzeImports(directory) {
  const componentTree = {};

  function walk(dir) {
    const dirFiles = fs.readdirSync(dir);
    dirFiles.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (
        file.endsWith(".tsx") ||
        file.endsWith(".ts") ||
        file.endsWith(".jsx") ||
        file.endsWith(".js")
      ) {
        const relativePath = path.relative(projectRoot, fullPath);
        const imports = getComponentImports(fullPath);

        componentTree[relativePath] = imports;
      }
    });
  }

  walk(directory);
  return componentTree;
}

// ✅ Start from the `components` directory
const componentPath = path.join(__dirname, "components");
const dependencies = analyzeImports(componentPath);

function printTree(node, level = 0) {
  if (!node || node.length === 0) return;
  node.forEach(child => {
    console.log(`${"  ".repeat(level)}→ ${child}`);
    if (dependencies[child]) {
      printTree(dependencies[child], level + 1);
    }
  });
}

console.log("\n📌 **Component Dependency Tree**\n");
Object.keys(dependencies).forEach(component => {
  console.log(`📁 ${component}`);
  printTree(dependencies[component], 1);
  console.log("\n");
});

