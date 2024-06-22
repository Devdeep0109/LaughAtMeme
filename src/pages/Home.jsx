import React from "react";
import MemeCard from "../components/MemeCard";
import { getAllMemes } from "../api/meme";
import { useEffect ,useState } from "react";

const HomePage = () => {

    const [data , setData] = useState([]); 

    useEffect ( () => {
        getAllMemes().then( (memes) => setData(memes.data.memes));
    },[])
    return(
        <div className="row">
            {data.map( (e) => (
                <MemeCard img ={e.url} title ={e.name} />
            )) }
        </div>
    )
}
export default HomePage;