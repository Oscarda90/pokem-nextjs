import { useState, useEffect } from 'react';


import Layout from '../../components/layouts/Layout';
import { FavoritePokemons } from '../../components/pokemon';

import NoFavorites from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {
  const [favoritesPokemos, setFavoritesPokemos] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemos(localFavorites.pokemos());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritesPokemos.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons  favoritesPokemos={favoritesPokemos} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
