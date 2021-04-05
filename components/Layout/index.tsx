import Footer from '../Footer';
import Nav from '../Nav/Nav';
import styles from './styles.module.scss';
const Layout = ({children})=>{
    return(
        <div className={styles.container}>
            <Nav/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
export default Layout;