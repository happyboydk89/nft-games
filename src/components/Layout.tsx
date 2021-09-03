import { FC } from 'react';
import Header from './header';
const Layout: FC = ({children}) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
    </>
  );
}

export default Layout;