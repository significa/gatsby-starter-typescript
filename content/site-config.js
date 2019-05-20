const path = require("path")

module.exports = {
  title: `{{= appName }}`,
  shortName: `{{= appName }}`,
  description: `{{= appName }} description`,
  author: `@{{= appName }}`,
  keywords: [
    "design",
    "development",
    "strategy",
    "agency",
    "interface",
    "digital",
    "product",
  ],
  siteUrl: "https://{{= appName }}.co",
  themeColor: "#000",
  backgroundColor: "#fff",
  pathPrefix: null,
  logo: path.resolve(__dirname, "../src/assets/images/icon.png"),
}
