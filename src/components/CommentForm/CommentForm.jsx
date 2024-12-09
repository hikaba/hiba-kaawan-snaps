import './CommentForm.scss';
function CommentForm(){
    async function handleSubmit(event){
        event.preventDefault();
        const newComment = {
            name: event.target.name.value,
            comment: event.target.comment.value
        };
        
        console.log(newComment);
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