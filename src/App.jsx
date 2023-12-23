import { Provider } from "react-redux"
import { Header } from "./Site"
import { router } from "./Router"
import { RouterProvider } from "react-router"
export const App = () => {
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}