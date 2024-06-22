import React, { useState ,createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";


const EditPage = () => {

    // making a reference...
    const memeRef = createRef();

    const [count,setCount] = useState(0);
    const [params] = useSearchParams();
    console.log(params.get("url"));

    const AddText =() =>{
        
        setCount(count +1);
    }

    return (
       <div>
        <div 
         style={{width:"700px" , border:"2px solid black"}}
         ref ={memeRef} 
         className="meme mt-5 ml-5">
           <img src ={params.get("url")} width="250px" alt="..." />
           {Array(count).fill(0).map( e => (<Text />))}
        </div>
        <button onClick={AddText}>Add text</button>
        <button variant ="success"  onClick={e => exportComponentAsJPEG(memeRef)}>Save</button>
       </div>
    )}
export default EditPage;