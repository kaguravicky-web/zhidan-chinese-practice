const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "outputs", "index.html");
const legacyPath = path.join(root, "outputs", "jidam-minion-chinese-practice.html");

const html = fs.readFileSync(indexPath, "utf8");
const legacy = fs.readFileSync(legacyPath, "utf8");
const scriptMatch = html.match(/<script>([\s\S]*)<\/script>/);

if (!scriptMatch) {
  throw new Error("No inline <script> block found in outputs/index.html");
}

new Function(scriptMatch[1]);

const version = (html.match(/v2026-[0-9-]+/) || [])[0] || "unknown";
const requiredCourseIds = [
  "hcl-week24-lesson-11",
  "hcl-week27-lesson-13",
  "hcl-week28-lesson-14"
];
const missingCourses = requiredCourseIds.filter(id => !html.includes(id));

const result = {
  js: "ok",
  version,
  syncedLegacyEntry: legacy === html,
  missingCourses,
  hasRedundantCourseTabs: html.includes("course-tabs")
};

console.log(JSON.stringify(result, null, 2));

if (!result.syncedLegacyEntry || missingCourses.length || result.hasRedundantCourseTabs) {
  process.exitCode = 1;
}
