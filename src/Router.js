import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "./home";
import { Axios } from "./Api";
import { UsersG } from "./HeaderStructure/Users";
import { Info } from "./HeaderStructure/Info";
import { Episode } from "./HeaderStructure/Episode";
import { EpisodeCharacters } from "./HeaderStructure/EpisodeCharacters";
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/*" element={<Home/>}>
            <Route index element={<Axios/>}/>
            <Route path="characters" element={<Axios/>}/>
            <Route path="info" element={<Info/>}/>
            <Route path="episode" element={<Episode/>}/>
            <Route path="user/:id" element={<UsersG/>}/>
            <Route path="episoden-ame/:episode" element={<EpisodeCharacters/>}/>
        </Route>
    )
)