import MainBottom from './MainBottom';
import MainTop from './MainTop';
import styles from './styles.module.scss';
const Main = ()=>{
    return(
        <div className={styles.wrapper}>
            <MainTop/>
            <MainBottom/>
        </div>
    )
}
export default Main;