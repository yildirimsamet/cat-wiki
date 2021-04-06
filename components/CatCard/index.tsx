import styles from './styles.module.scss'
import Link from 'next/link'

interface IProps{
    name:string
    image:string
    id:string
}
const CatCard:React.FC<IProps>=({name,image,id})=>{
    return(
            <Link href={"/"+id}>
                <div className={styles.wrapper}>
                    <img className={styles.img} src={image} alt={name}/>
                    <p className={styles.name}>{name}</p>
                </div>
            </Link>
    )
}
export default CatCard;