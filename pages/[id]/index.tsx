import {GetServerSideProps} from 'next'
import styles from './styles.module.scss';


const SpesificCat=({data})=>{
    const catInfo=data[0].breeds[0];
    const blockCreator=(num:number)=>{
     let myBlocks:any[]=[]

     for(let i=0;i<5;i++){
         if(i<num){
            myBlocks.push(<span className={styles.block}></span>)
         }else{
             myBlocks.push(<span className={styles.block_fade}></span>)
         }
     }
        return myBlocks;
    }
    
    return(
       <>
        <div className={styles.top}>
          <img className={styles.img} src={data[0].url} alt={data[0].url}/>
          <div className={styles.info}>
              <h3>{catInfo.name}</h3>
              <p className={styles.desc}>{catInfo.description}</p>
              <p><span>Temperament: </span>{catInfo.temperament}</p>
              <p><span>Origin: </span>{catInfo.origin}</p>
              <p><span>Life Span: </span>{catInfo.life_span}</p>
              <p><span>Adaptability: </span>{blockCreator(catInfo.adaptability).map(item=>item)}</p>
              <p><span>Affection level: </span>{blockCreator(catInfo.affection_level).map(item=>item)}</p>
              <p><span>Child Friendly: </span>{blockCreator(catInfo.child_friendly).map(item=>item)}</p>
              <p><span>Grooming: </span>{blockCreator(catInfo.grooming).map(item=>item)}</p>
              <p><span>Intelligence: </span>{blockCreator(catInfo.intelligence).map(item=>item)}</p>
              <p><span>Health issues: </span>{blockCreator(catInfo.health_issues).map(item=>item)}</p>
              <p><span>Social needs: </span>{blockCreator(catInfo.social_needs).map(item=>item)}</p>
              <p><span>Stranger friendly: </span>{blockCreator(catInfo.stranger_friendly).map(item=>item)}</p>
          </div>
          </div>
          <div className={styles.bot}></div>
       </>
    )
}

export default SpesificCat;

export const getServerSideProps:GetServerSideProps=async({query})=>{

const res = await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${query.id}&limit=9&page=1`,{
    
    method:"GET",
    headers:{
        "x-api-key":process.env.API_KEY
    }
})
const data = await res.json()

return{
    props:{data}
}
}