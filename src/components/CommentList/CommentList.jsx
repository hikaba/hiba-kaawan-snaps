import './CommentList.scss';
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
        setComments(response.data);
    }catch (error){
        console.log("error getting comments", error);
    }
}
useEffect(()=>{
    getComments();
}, [])
comments.forEach((comment) =>{
    const date = new Date(comment.timestamp);const day = String(date.getDate()).padStart(2,'0');
    const month = String(date.getMonth()+1).padStart(2, '0');
    const year = String(date.getFullYear())
    const fullDate = `${month}/${day}/${year}`;
    comment.timestamp = fullDate;

})
console.log(comments);

    return(
        <section className="comment">
            <ul className="comment__list">
            {comments.map((comment) => {
            return (
              <li key={comment.id} className="comment__item">
                <div className="comment__container">
                    <p className="comment__info comment__info--color">{comment.name}</p>
                    <p className="comment__info comment__info--color">{comment.timestamp}</p>
                </div>
                <p className="comment__info">{comment.comment}</p>
              </li>
              
            );
          })}

            </ul>
        </section>
    )

}
export default CommentList;