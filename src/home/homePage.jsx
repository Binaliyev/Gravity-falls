import { Outlet } from "react-router-dom"
import { Footr, Header } from "../Site"

export const Home = () => {
    return(
      <>
      <Header/>
      <Outlet/>
      <Footr/>
      </>
    )
  }