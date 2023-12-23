import { Link } from "react-router-dom"
import { Icons } from "../siteElement"
export const Footr = () => {
    return(
        <footer className="bg-dark" style={{height:"300px"}}>
            <div className="container">
                <div className="footer-inner text-center my-5 py-5">
                 <Link><img width={"350px"} height={"150px"} 
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Gravity_Falls_logo.svg"
                  alt="gravity-falls-FooterLOGO" />
                 </Link>
                 <ul className="d-flex align-items-center justify-content-between mx-auto my-3" style={{width:"600px"}}>
                 <Icons>
                        <img width={"25px"}height={"25px"} src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="telegram-LOGO" />
                        <Link className="mx-1 text-light text-decoration-none" to={"/telegram"}>Telegram</Link>
                 </Icons>
                 <Icons>
                        <img width={"25px"}height={"25px"} src="https://upload.wikimedia.org/wikipedia/commons/9/96/Instagram.svg" alt="instagram-LOGO" />
                        <Link className="mx-1 text-light text-decoration-none" to={"/instagram"}>Instagram</Link>
                 </Icons>
                 <Icons>
                        <img width={"25px"}height={"25px"} src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" alt="facebook-LOGO" />
                        <Link className="mx-1 text-light text-decoration-none" to={"/facebook"}>Facebook</Link>
                 </Icons>
                 </ul>
                </div>
            </div>
        </footer>
    )
}