const path = require("path")

module.exports = {
  title: `{{= appName }}`,
  shortName: `{{= appName }}`,
  description: `{{= appDescription }}`,
  author: `@{{= appAuthor }}`,
  keywords: [
    "design",
    "development",
    "strategy",
    "agency",
    "interface",
    "digital",
    "product",
  ],
  siteUrl: "{{= appUrl }}",
  themeColor: "#000",
  backgroundColor: "#fff",
  pathPrefix: null,
  logo: path.resolve(__dirname, "../src/assets/images/icon.png"),
}
