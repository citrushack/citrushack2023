/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  env: {
    // comment out for release
    PASSWORD_PROTECT: process.env.ENVIRONMENT === 'Production' || process.env.ENVIRONMENT === 'Development',
  }
}
