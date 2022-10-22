import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './';


const FavoritePokemons: FC<Props> = ({ favoritesPokemos }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritesPokemos.map((id) => (
        <FavoriteCardPokemon id={id} key={id} />
      ))}
    </Grid.Container>
  );
};

interface Props {
  favoritesPokemos: number[];
}

export default FavoritePokemons;
