import styles from './styles.module.scss';
import {useEffect,useState} from 'react';
import CatCard from '../../CatCard';

const MainBottom=()=>{
    const [fiveCats,setFiveCats]=useState([])
    useEffect(()=>{
        fetch("https://api.thecatapi.com/v1/breeds?page=1&limit=4",{
            method:"GET",
            headers:{
                "x-api-key":process.env.API_KEY
            }
            
        }).then(res=>res.json()).then(res=>{
            console.log(res)
            setFiveCats(res)
        })
    },[])
    return ( 
        <div className={styles.wrapper}>
           <p className={styles.title}>Most Searched Breeds</p>
           <h2 className={styles.titleBig}>66+ Breeds For you<br/>to discover <span>SEE MORE{" >"}</span></h2>
           <div className={styles.cardWrapper}>
                {fiveCats.map((cat)=>{
                    return(
                        <CatCard key={cat.id} id={cat.id} image={cat.image.url} name={cat.name} />
                    )
                })}
           </div>
        </div>
    )
}
export default MainBottom;