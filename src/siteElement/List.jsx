export const ListeElement = ({children}) => {
    return(
        <li className="hero-list shadow mx-auto my-5 text-center" style={{width: "290px", height:"300px", listStyle:"none"}}>
            {children}
        </li>
    )
}