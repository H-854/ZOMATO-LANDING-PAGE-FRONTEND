import "./header.css"
import Navbar from "./Navbar/Navbar"
import img1 from "./ZOMATO.avif"
import SearchBox from "./Search Box/SearchBox"

export default function Header(){
    return (
        <div className="background-image">
            <Navbar/>
            <div className="imgDiv mt-5">
                <img src={img1} alt="picture" className="img"/>
                <h1 className="mt-4 display-6">Discover the best food & drinks in Una (HP)</h1>
            </div>
            <SearchBox/>
        </div>
    )
}