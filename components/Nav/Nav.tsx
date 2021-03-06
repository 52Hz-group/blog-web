import Link from 'next/link'
import {
  HomeOutlined,
  ApiOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styles from './nav.module.scss';

interface Props {
  avatar: string,
  user: string,
}

const NavigatorList = () => (
  <div className={styles.navgatorList}>
    <Link href='/'>
      <a className={styles.navItem}>
        <HomeOutlined />
        <span>博客</span>
      </a>
    </Link>
    {/* <Link  href='/laboratory'> */}
    <Link  href='/'>
      <a className={styles.navItem}>
        <ApiOutlined />
        <span>实验室</span>
      </a>
    </Link>
    <Link  href={'/archive'}>
      <a className={styles.navItem}>
        <ProfileOutlined />
        <span>归档</span>
      </a>
    </Link>
    <Link href={'/me'}>
      <a className={styles.navItem}>
        <UserOutlined />
        <span>关于我</span>
      </a>
    </Link>
  </div>
);

const Nav = ({ avatar, user }: Props) => (
  <header className={styles.header}>
    <div className={styles.nav}>
      <Link href='/'>
        <a className={styles.logo}>
          <img className={styles.avatar} src={avatar} alt='logo' />
          <span className={styles.userName}>{`${user}`}</span>
        </a>
      </Link>
      <NavigatorList />
    </div>
  </header>
);
export default Nav;
  