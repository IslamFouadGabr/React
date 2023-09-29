import slide from "../images/slide.jpg";
import sliden from "../images/sliden.jpg"
export default function Landing(){
    return(
        <div className="image">
            <img
                id="hide"
                src={slide}
                alt="landing"
            />
            <img
                className="sec-landing"
                id="imgid"
                src={sliden}
                alt="landing"
            />
        </div>


    )
}
