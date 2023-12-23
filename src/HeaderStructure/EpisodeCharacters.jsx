import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export const EpisodeCharacters = () => {
    const {episode} = useParams()
    const [ charactersData, setCharactersData] = useState([])
    useEffect(()=>{
        try {
            axios.get(`https://rest-ful-api-beryl.vercel.app/characters?episode=${episode}`).then(response => {
                if (response.status === 200) {
                    setCharactersData(response.data)
                    console.log(response.data);
                }
            })
        } catch (error) {
            console.log(error);
        }
    },[])
    return(
        <main>
            <section className="hero" style={{minHeight:"50vh"}}>
                <div className="container">
                    <div className="hero-inner" style={{marginTop:"15rem"}}>
                    <ul className="my-5">
                            {charactersData?.map((item) => {
                                return(
                                    <Link to={`/user/${item.id}`}  className="text-decoration-none">
                                    <li className=" d-flex align-items-center my-3 mx-auto border shadow text-dark" key={item.id} style={{listStyle:"none", width:"70rem", height:"18rem", borderRadius:"20px"}}>
                                        <div className="img-box">
                                           <img style={{borderRadius:"1rem"}} className="mx-5" width={"240px"} height={"240px"} src={item.image}  alt="" />
                                        </div>
                                        <div className="information-box mx-5">
                                           <h2><span className="text-primary">Name:</span> {item.name}</h2>
                                           <span className="fs-4"><span className="text-primary">Episode:</span> {item.episode}</span>
                                           <p className="fs-5"><span className="text-primary">Quote:</span> {item.quote}</p>
                                        </div>
                                    </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}