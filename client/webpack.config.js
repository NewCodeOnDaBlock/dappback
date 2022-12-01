module.exports = {
  resolve: {
    fallback:{
      "stream": require.resolve("stream", require.resolve("stream-browserify")),
      "assert": require.resolve("http", require.resolve("stream-http")),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "url": require.resolve("url/")
    }
  }
}