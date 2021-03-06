import Head from 'next/head';
import { FC, useState } from 'react';
import Image from 'next/image';
import Layout from 'src/components/Layout';
import { getTopGames } from './../lib/game';

interface IGame {
  games?: any;
}

const TopGame: FC<IGame> = ({ games }) => {
  const [db, setDb] = useState(games);

  const searchGame = (name: string) => {
    if (name) {
      games = games.filter((game: any) => game.name.match(name));
    }
    setDb(games);
  };
  return (
    <>
      <Head>
        <title>NFT Top Rating Games</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout searchGame={searchGame}>
        <ul className="games">
          {db.map((game: any) => (
            <li key={game.id}>
              <Image src={game.background_image} alt={game.name} width={452} height={452} />
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const games = await getTopGames();
  return {
    props: {
      games,
    },
  };
};

export default TopGame;
