import styles from './styles.module.scss';
import Link from 'next/link'
const Why=()=>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <h2>Why should you
                    have a cat?
                </h2>
                <p>Having a cat around you can actually trigger the release of calmiing chemicals in your body which lower your stress and anxiety leves</p>
                <Link href="/">
                    <a>
                        READ MORE {">"}
                    </a>
                </Link>
            </div>
            <div className={styles.right}>
                <div>
                    <img className={styles.img2} src="/images/image2.png" alt="cat"/>
                    <img className={styles.img1} src="/images/image1.png" alt="cat"/>
                </div>
                <div>
                    <img className={styles.img3} src="/images/image3.png" alt="cat"/>
                </div>
            </div>
        </div>
    )
}
export default Why;
