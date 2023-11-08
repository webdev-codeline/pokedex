// react
import React, { FC } from 'react';
import { Text } from 'react-native';

// hooks
import { usePokemonDecendentFindByIdQuery } from '../hooks';

export const Demo: FC = () => {
  // const { data, loading } = usePokemonSearchByNameQuery({ variables: { name: wrapIn('%')('zard') } });
  // const { data, loading } = usePokemonSearchByIdsQuery({ variables: { ids: [1, 2, 3] } });
  // const { data, loading } = usePokemonFindByIdQuery({ variables: { id: 80 } });
  const { data, loading } = usePokemonDecendentFindByIdQuery({ variables: { id: 85 } });

  if (loading) return <Text>Loading</Text>;

  // console.log(data?.pokemons);
  console.log(data?.pokemon);

  return <Text>Fetched </Text>;
};
