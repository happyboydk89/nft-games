import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: FC = () => {
  const router = useRouter();
  const isActive = (r: String) => {
    if (r === router.pathname) {
      return ' active';
    } else {
      return '';
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <a>SLOT</a>
        </Link>
      </div>
      <div className="flex">
        <nav className="gnav">
          <ul className="flex">
            <li className={isActive('/')}>
              <Link href="/">
                <a>ALL</a>
              </Link>
            </li>
            <li className={isActive('/newgame')}>
              <Link href="/newgame">
                <a>NEW</a>
              </Link>
            </li>
            <li className={isActive('/topgame')}>
              <Link href="/topgame">
                <a>TOP</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="search-box">
          <form action="/" method="post">
            <input type="text" placeholder="Search" />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
