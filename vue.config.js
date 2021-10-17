module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": "/src",
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
}
