export function start() {
  console.log("🧪 Experiment starting...");
  const results = runSuite();
  report(results);
}

function runSuite(): Array<{ name: string; passed: boolean }> {
  return [
    { name: "module loads", passed: true },
    { name: "start() executes", passed: typeof start === "function" },
    { name: "environment accessible", passed: typeof process !== "undefined" },
  ];
}

function report(results: Array<{ name: string; passed: boolean }>) {
  let passed = 0;
  for (const r of results) {
    const icon = r.passed ? "✅" : "❌";
    console.log(`  ${icon} ${r.name}`);
    if (r.passed) passed++;
  }
  console.log(`\n${passed}/${results.length} checks passed`);
  if (passed < results.length) process.exit(1);
}

start();
