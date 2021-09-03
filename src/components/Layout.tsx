import { FC } from 'react';
import Header from './header';

interface IPros {
  searchGame: (name: string) => void;
}

const Layout: FC<IPros> = ({ children, searchGame }) => {
  return (
    <>
      <Header searchGame={searchGame} />
      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
