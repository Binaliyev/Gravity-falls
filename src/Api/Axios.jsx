import axios from "axios"
import { useEffect, useState } from "react"
import { Liste, ListeElement } from "../siteElement"
import { Link } from "react-router-dom"
import { Button, Input } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { RenderCharacters } from "../Store/characterSlice"
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
// const urlGf = 'https://gravity-falls-api.vercel.app/api/characters'
export const Axios = () => {
    let characters = useSelector((state) => state.character.characters)
    // console.log(characters);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(RenderCharacters())
    }, [dispatch])
    const CharacterSearch = (event) => {
        dispatch(RenderCharacters(`name=${event.target.value}`))
    }
    let darkMode = window.localStorage.getItem("darkMode")
    console.log(darkMode);
    return (
        <main>
            <section className="hero" style={{marginTop:"9rem"}}>
                <div className="container">
                    <div className="hero-inner text-center">
                        <div className="search-box">
                        <TravelExploreIcon className="fs-3"/>
                        <Input type="search" placeholder="Search" style={{width:"30%"}} onChange={CharacterSearch}/>
                        <Button className="mx-2"  variant="outlined" onClick={() => {
                            window.location.reload()
                        }}>Reload</Button>
                        </div>
                        <ul className="hero-ul my-5 d-flex flex-wrap align-items-center justify-content-between" style={{}}>
                            {characters.map((item) => {
                                return (
                                    <ListeElement  key={item.id}>
                                        <Link to={`/user/${item.id}`} className="text-decoration-none text-dark">
                                           <img className="my-2" width={"240px"} height={"240px"} src={item.image} alt="gravity-falls-IMG" style={{ borderRadius: "0.5rem"}} />
                                           <h3>{item.name}</h3>
                                        </Link>
                                    </ListeElement>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}