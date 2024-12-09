import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
function CommentList(){
    const apiKey = "bb1afd72-69af-4298-bc35-5df91725a3f2";
    const baseURL = "https://unit-3-project-c5faaab51857.herokuapp.com/photos";
    const param = useParams();

const [comments, setComments] = useState([]);

async function getComments() {
    try {
        const response = await axios.get(`${baseURL}/${param.photoId}/comments?api_key=${apiKey}`);
        console.log(response.data);
        setComments(response.data);
    }catch (error){
        console.log("error getting comments", error);
    }
}
useEffect(()=>{
    getComments();
}, [])
    return(
        <section className="comments">
            <ul className="comments__list">

            </ul>
        </section>
    )

}
export default CommentList;