module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}"],
  coverageDirectory: "coverage",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(jpg|png|webp|svg|ttf|mp4|mp3)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.css$": "identity-obj-proxy",
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
};
