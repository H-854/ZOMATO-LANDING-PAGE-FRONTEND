import "./Navbar.css"

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{border: "2px solid white"}}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <p style={{color: "white"}} className="collapse navbar-collapse offset-2 mt-2">Get the app</p>
                <div className="ms-auto w-50 contain">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-5 ">
                            <p style={{color: "white"}} >Investor Relation</p>
                            <p style={{color: "white"}} >Add Restaurant</p>
                            <p style={{color: "white"}} >Login</p>
                            <p style={{color: "white"}} >Sign up</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}