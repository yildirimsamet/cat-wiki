import styles from './styles.module.scss'
import {BiSearch} from 'react-icons/bi'
const MainTop=()=>{
    return(
        <div className={styles.wrapper}>
               <div className={styles.content}>
               <img  className={styles.logo} src="/images/CatWikiLogo.svg" alt="logo"/>
                <p className={styles.title}>Get to know more about your<br/>cat breed </p>
                <div className={styles.inputWrapper}>
                    <input placeholder="Enter your breed" type="text"/>
                    <BiSearch fontSize="24"/>
                </div>
               </div>
        </div>
    )
}
export default MainTop;