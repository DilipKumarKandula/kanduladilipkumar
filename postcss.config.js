// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // ⬅ the new plugin
    // autoprefixer: {},         // v4 handles prefixing internally – remove if you like
  },
};
