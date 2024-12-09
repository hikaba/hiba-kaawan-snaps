import "./PhotoItem.scss";
import { Link } from "react-router-dom";

function PhotoItem(props) {
    return(
        <li className={`photo-item ${props.width ? 'photo-item--width': ''}`}>
            <Link to={`/photos/${props.photo.id}`} className="photo-item__link" >
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
            </Link>
        </li>
    );
}

export default PhotoItem;