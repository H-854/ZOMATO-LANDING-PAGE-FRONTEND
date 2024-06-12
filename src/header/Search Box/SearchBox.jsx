import "./SearchBox.css"

export default function SearchBox(){
    return (
        <div class="input-group w-50 offset-3 mt-3">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{border: "1px solid white",color: "white",width: "10rem"}}>Location</button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Detect Current Location</a></li>
            </ul>
            <input type="text" class="form-control" aria-label="Text input with dropdown button" style={{height: "3rem"}} placeholder="Search for restaurant,cuisine or a dish"/>
        </div>
        
    )
}