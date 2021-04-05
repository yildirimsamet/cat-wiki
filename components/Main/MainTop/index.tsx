import styles from './styles.module.scss'
import {BiSearch} from 'react-icons/bi'
import {useState,useEffect} from 'react'
const MainTop=()=>{
    const [cats,setCats]=useState<any[]>([])
    const [searchInput,setSearchInput]=useState<string>("");

    const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchInput(e.target.value)
    }
    useEffect(()=>{
        fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchInput}`)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            setCats(res);
        })
    },[searchInput])
    return(
        <div className={styles.wrapper}>
               <div className={styles.content}>
               <img  className={styles.logo} src="/images/CatWikiLogo.svg" alt="logo"/>
                <p className={styles.title}>Get to know more about your<br/>cat breed </p>
                <div className={styles.inputWrapper}>
                    <input value={searchInput} onChange={handleInput} placeholder="Enter your breed" type="text"/>
                    <BiSearch fontSize="24"/>
                    
                </div>
               {cats.length<1?null: <div className={styles.searchResults}>
                       <div className={styles.searchResultsInner}>
                      {cats.map(cat=>{
                          return(
                              <p key={cat.id} className={styles.searchText}>{cat.name}</p>
                          )
                      })}
                       </div>
                </div>}
               </div>
        </div>
    )
}
export default MainTop;