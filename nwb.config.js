module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'react-re-super-tabs',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    compat: {
        enzyme: true
    }
  }
}
