module.exports = {
  extends: ["estidlore/react", "estidlore/jest"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  root: true,
};
