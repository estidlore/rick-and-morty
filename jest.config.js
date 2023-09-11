module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["src/index.ts", "src/.*types.*"],
  coverageThreshold: {
    global: 50,
  },
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(jpg|png|webp|svg|ttf|mp4|mp3)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.css$": "identity-obj-proxy",
  },
  modulePaths: ["src"],
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest"],
  },
};
