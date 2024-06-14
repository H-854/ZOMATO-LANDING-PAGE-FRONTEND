import "./Install.css"
import mobile from "./mobile.avif"
import gplay from "./gplay.webp"
import appstore from "./appstore.webp"
import { useState } from "react"

export default function Install(){
    let [check,setCheck] = useState(true);
    function onCheck(event){
        if(event.target.id==="email"){
            setCheck(true)
        }
        if(event.target.id==="phone"){
            setCheck(false)
        }
    }
    function onSubmit(event){
        event.preventDefault()
    }
    return (
        <div className="containerOuter p-3">
            <div className="mt-5 pt-3">
                <img src={mobile} alt="mobile" className="img-fluid"/>
            </div>
            <div className="installation">
                <span>
                    <h1>Get the Zomato app</h1>
                    <p>We will send you a link, open it on your phone to download the app</p>
                </span>
                <form onSubmit={onSubmit}>
                    <div>
                        <span>
                            <input type="radio" name="option" id="email" onClick={onCheck}/>
                            <label htmlFor="email" className="ms-2">Email</label>
                        </span>
                        <span className="ms-5">
                            <input type="radio" name="option" id="phone" onClick={onCheck}/>
                            <label htmlFor="phone" className="ms-2">Phone</label>
                        </span>
                    </div>
                    <div>
                        <div class="input-group mb-3">
                            <input type={check ? "text" : "number"} className="form-control mt-2" placeholder={check ? "Email" : "Number"} aria-label="Recipient's username" aria-describedby="button-addon2" style={{height: "3rem",width: "18.25rem",borderRadius: "0.75rem"}}/>
                            <button className="btn btn-danger ms-3 mt-2" type="button" id="button-addon2" style={{height: "3rem",borderRadius: "0.75rem"}}>Share App Link</button>
                        </div>
                    </div>
                    <div>
                        <p>Download app from</p>
                        <img src={gplay} alt="gplay" style={{width: "137px"}}/>
                        <img src={appstore} alt="appstore" style={{width: "137px"}} className="ms-3"/>
                    </div>
                </form>
            </div>
        </div>
    )
}