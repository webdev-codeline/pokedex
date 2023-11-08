module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            // This needs to be mirrored in tsconfig.json

            '@': './src',
            '@assets': './src/assets',
            '@components': './src/components',
            '@constants': './src/constants',
            '@features': './src/features',
            '@graphql': './src/graphql',
            '@hooks': './src/hooks',
            '@lib': './src/lib',
            '@navigation': './src/navigation',
            '@redux': './src/redux',
            '@schemas': './src/schemas',
            '@screens': './src/screens',
            '@stories': './src/stories',
            '@types': './src/types',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
