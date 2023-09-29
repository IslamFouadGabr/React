import arrival from "../images/arrival.png";
import FullAction from "./LandingMethods";


export default function LandingItems(){

    return(
        <div  className="logo">
                <img
                    src={arrival}
                    alt="logo"
            />
            <p>Discover now latest collection</p>
            <span> <p> SHOP NOW </p> </span>
            <span className="min-icon" id="arrow" onClick={FullAction}><i className="fa-solid fa-greater-than"></i></span>
            <span className="max-icon" id="arrow-obe" onClick={FullAction}><i className="fa-solid fa-less-than"></i></span>

        </div>
    )
}