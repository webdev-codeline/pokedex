import { FC } from 'react';
import { Text } from 'react-native';
import { usePokemonSearchByNameQuery } from '../hooks';
import { wrapIn } from '../utils/input.helper';

export const Demo: FC = () => {
  const { data, loading } = usePokemonSearchByNameQuery({ variables: { name: wrapIn('%')('zard') } });

  if (loading) return <Text>Loading</Text>;

  console.log(data?.pokemons);

  return <Text>Fetched</Text>;
};
