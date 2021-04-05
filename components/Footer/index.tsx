import styles from './styles.module.scss'
const Footer = () =>{
    return (
        <footer className={styles.footer}>
            <img src="/images/CatwikiLogo.svg" alt="logo"/>
            <p>created by Samet Yıldırım - devChallange.io</p>
        </footer>
    )
}
export default Footer;