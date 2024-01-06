module.exports = {
  // other webpack configuration settings

  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify')
    }
  }
};