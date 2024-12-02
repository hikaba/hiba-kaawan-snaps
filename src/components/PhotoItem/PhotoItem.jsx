import "./PhotoItem.scss";

function PhotoItem(props) {
    console.log(props.photo.likes)
    return(
        <li className="photo-item">
            <img src={props.photo.photo} alt="" className="photo-item__image" />
            <p className="photo-item__details">{props.photo.photographer}</p>
        </li>
    );
}

export default PhotoItem;