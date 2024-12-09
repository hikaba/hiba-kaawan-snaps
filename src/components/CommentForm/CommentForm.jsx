import './CommentForm.scss';
import axios from 'axios';
import { useParams } from "react-router-dom";
function CommentForm(){
    const apiKey = "bb1afd72-69af-4298-bc35-5df91725a3f2";
    const baseURL = "https://unit-3-project-c5faaab51857.herokuapp.com/photos";
    const param = useParams();

    async function handleSubmit(event){
        event.preventDefault();
        const newComment = {
            name: event.target.name.value,
            comment: event.target.comment.value
        };
        try{
            const response = await axios.post(`${baseURL}/${param.photoId}/comments?api_key=${apiKey}`, newComment)
            console.log(response.data);
        }catch (error) {
            console.log("Error posting new comment", error);
        }
        
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className="photos-form">
                <label htmlFor="" className="photos-form__label">
                    Name
                </label>
                <input type="text" name="name" id="name" className="photos-form__input" />
                <label htmlFor="" className="photos-form__label">
                    Comment
                </label>
                <textarea type="text" name="comment" id="comment" className="photos-form__input photos-form__input--size" />
                <button className="photos-form__button">Submit</button>
            </form>
        </div>
    );

}
export default CommentForm;