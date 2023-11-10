module.exports = {
  env: {
    customKey: 'TEST Next.JS',
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
        has: [{ type: 'query', key: 'test', value: 'rewrite' }],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/aboutme',
        destination: '/',
        permanent: true,
      },
    ]
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
}
