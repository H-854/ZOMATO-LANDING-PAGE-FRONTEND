import "./Main.css"
import Template from "./card/Template"
import Services from "./Services/Services"

export default function Main(){
    return (
        <div className="Main m-5">
            <Template/>
            <Services/>
        </div>
    )
}