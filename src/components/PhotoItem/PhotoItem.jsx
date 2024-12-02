import "./PhotoItem.scss";

function PhotoItem(props) {
    return(
        <li className="photo-item">
            <div className="photo-item__image-container">
                <img src={props.photo.photo} alt={props.photo.photoDescription} className="photo-item__image" />
                <div className="photo-item__photographer">{props.photo.photographer}</div>
            </div>
            <div className="photo-item__container">
                <ul className="photo-item__tags">
                    {props.photo.tags.map((tag, index) => {
                        return (
                            <li key={index} className="photo-item__tag-item">
                                {tag}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </li>
    );
}

export default PhotoItem;