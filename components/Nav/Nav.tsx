import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image'
const Nav = ()=>{
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a className={styles.logo}>
                <Image width={127} height={42} src="/images/CatWikiLogo.svg" alt="cat"/>
                </a>
            </Link>
        </nav>
    )
}
export default Nav;