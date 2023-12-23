import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Episode = () => {
    const [ arr, setArr] = useState([])
    useEffect(()=>{
        try {
            axios.get(`https://rest-ful-api-beryl.vercel.app/characters`).then(response => {
                if (response.status === 200) {
                    setArr(response.data)
                }
            })
        } catch (error) {
            console.log(error);
        }
    },[])
    return(
        <>
        <main>
            <section className="hero" style={{minHeight:"90vh"}}>
                <div className="hero-inner">
                    <div  className="episode-box bo mx-auto d-flex flex-wrap align-items-center justify-content-between" style={{width:"90rem", height:"100rem", marginTop:"10rem"}}>
                        {arr.map((item)=> {
                            return(
                                <div className="d-flex" key={item.episode}>
                                    <p className="text-primary" key={item.episode}>{item.id}.</p>
                                    <Link to={`/episoden-ame/${item.episode}`} key={item.episode} style={{width:"15rem", textDecoration:"none", color:"black"}}>{item.episode}</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}
