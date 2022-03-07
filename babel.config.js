module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // 絶対パス
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            src: './src',
          },
        },
      ],
    ],
  };
};
