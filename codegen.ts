module.exports = {
  schema: 'https://beta.pokeapi.co/graphql/v1beta',
  documents: ['./src/graphql/*.graphql'],
  overwrite: true,
  generates: {
    './src/hooks/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        apolloReactHooksImportFrom: '@apollo/client',
      },
    },
  },
};
