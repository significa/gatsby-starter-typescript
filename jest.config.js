module.exports = {
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "/lib/"],
  testRegex: "(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/public/js/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
}
