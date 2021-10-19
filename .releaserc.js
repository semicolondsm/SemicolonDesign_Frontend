module.exports = {
  branches: [
    {
      name: "main",
    },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "⚡️", release: "minor" },
          { type: "🐛", release: "patch" },
          { type: "⚙️", release: "patch" },
          { type: "♻️", release: "patch" },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        },
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: ["package.json"],
      },
    ],
    "@semantic-release/github",
  ],
};
