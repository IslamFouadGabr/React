import Landing from "./Landing";
import Navbar from "./Navbar";
import LandingItems from "./LandingItems";
 function Header(){
    return(
        <div className="main">
            <div className="container">
                <div className="header">
                    <Landing/>
                    <Navbar/>
                    <LandingItems/>
                </div>
            </div>
        </div>
    )
}
export default Header;