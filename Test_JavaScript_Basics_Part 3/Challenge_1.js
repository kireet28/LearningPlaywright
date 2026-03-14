function printSummaryReport(steps) {
  const passed = steps.filter(s => s.status === "passed");
  const failed = steps.filter(s => s.status === "failed");
  const skipped = steps.filter(s => s.status === "skipped");
  const totalDuration = steps.reduce((sum, s) => sum + s.durationMs, 0);

  console.log(`Total Steps   : ${steps.length}`);
  console.log(`Passed        : ${passed.length}`);
  console.log(`Failed        : ${failed.length}`);
  console.log(`Skipped       : ${skipped.length}`);
  console.log(`Total Duration: ${totalDuration}ms`);
  console.log(`Failed Steps  : ${failed.length ? failed.map(s => s.name).join(", ") : "None"}`);
}

const steps = [
  { name: "Login", status: "passed", durationMs: 320 },
  { name: "Search Item", status: "passed", durationMs: 150 },
  { name: "Add to Cart", status: "failed", durationMs: 80 },
  { name: "Apply Coupon", status: "skipped", durationMs: 0 },
  { name: "Checkout", status: "failed", durationMs: 210 },
];

printSummaryReport(steps);
