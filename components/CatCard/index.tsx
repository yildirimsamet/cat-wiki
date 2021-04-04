import styles from './styles.module.scss'

interface IProps{
    name:string
    image:string
}
const CatCard:React.FC<IProps>=({name,image})=>{
    return(
            <div className={styles.wrapper}>
                <img className={styles.img} src={image} alt={name}/>
                <p className={styles.name}>{name}</p>
            </div>
    )
}
export default CatCard;