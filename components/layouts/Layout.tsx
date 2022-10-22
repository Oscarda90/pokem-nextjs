import Head from 'next/head';
import { FC, ReactNode } from 'react';
import Navbar from '../ui/Navbar';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokémon App'}</title>
        <meta name="author" content="Oscar Avelar Claros" />
        <meta name="description" content="Informacion sobre el pokémon XXXXX" />
        <meta name="keywords" content="XXXX, pokemon, pokedex" />
      </Head>

      <Navbar />

      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
};

export default Layout;
