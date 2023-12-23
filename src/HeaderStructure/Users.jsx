import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const UsersG = () => {
    const {id} = useParams()
    const [api, setApi] = useState([])
    useEffect(() => {
        axios.get(`https://rest-ful-api-beryl.vercel.app/characters/${id}`).then(response => {
            if (response.status === 200) {
                setApi([response.data])
            }
        })
    }, [id])
    return(
        <main>
            <section className="hero" style={{marginTop:"9rem", minHeight:"50vh"}}>
                <div className="container">
                    <div className="hero-inner">
                        <ul className="my-5">
                            {api?.map((item) => {
                                return(
                                    <li className=" d-flex align-items-center mx-auto border bg-dark text-light" key={item.id} style={{listStyle:"none", width:"70%", height:"30rem"}}>
                                        <div className="img-box">
                                           <img style={{borderRadius:"1rem"}} className="mx-5" width={"240px"} height={"240px"} src={item.image}  alt="" />
                                        </div>
                                        <div className="information-box mx-5">
                                           <h2><span className="text-primary">Name:</span> {item.name}</h2>
                                           <span className="fs-4"><span className="text-primary">Episode:</span> {item.episode}</span>
                                           <p className="fs-5"><span className="text-primary">Quote:</span> {item.quote}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}