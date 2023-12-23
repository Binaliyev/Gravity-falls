import react from "react"
import reactDOM from "react-dom/client"
import { App } from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Store } from "./Store/store"
import { Provider } from "react-redux"
let root = reactDOM.createRoot(document.querySelector("#root"))
root.render(
  <>
  <Provider store={Store}>
    <App/> 
  </Provider>
  </>
)