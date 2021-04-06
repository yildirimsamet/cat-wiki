import styles from './styles.module.scss'
import {BiSearch} from 'react-icons/bi'
import {useState,useEffect} from 'react'
import Link from 'next/link'
const MainTop=()=>{
    const [cats,setCats]=useState<any[]>([])
    const [searchInput,setSearchInput]=useState<string>("");

    const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchInput(e.target.value)
    }
    useEffect(()=>{
        fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchInput}`,{
            method:"GET",
            headers:{
                "x-api-key":process.env.API_KEY
            }
        })
        .then(res=>res.json())
        .then(res=>{
            setCats(res);
        })
    },[searchInput])
    return(
        <div className={styles.wrapper}>
               <div className={styles.content}>
               <img  className={styles.logo} src="/images/CatwikiLogo.svg" alt="logo"/>
                <p className={styles.title}>Get to know more about your<br/>cat breed </p>
                <div className={styles.inputWrapper}>
                    <input value={searchInput} onChange={handleInput} placeholder="Enter your breed" type="text"/>
                    <BiSearch fontSize="24"/>
                    
                </div>
               {cats.length<1?null: <div className={styles.searchResults}>
                       <div className={styles.searchResultsInner}>
                      {cats.map(cat=>{
                          return(
                              <Link key={cat.id} href={`/${cat.id}`}>
                                  <a className={styles.searchText}>{cat.name}</a>
                              </Link>
                          )
                      })}
                       </div>
                </div>}
               </div>
        </div>
    )
}
export default MainTop;