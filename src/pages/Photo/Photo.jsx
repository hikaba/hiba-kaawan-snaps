import { useParams } from "react-router-dom";
import photosData from "../../data/photos.json"
function Photo() {
    const {id} = useParams();
    const photo = photosData.find( p => p.id === id);
    console.log(photo);
    if (!photo) {
        return <div>Photo not Found</div>;
    }
    return(
        <div>
            <img src={photo.photo} alt={photo.photoDescription} className="photo__image"/>
            <h2>{photo.photographer}</h2>
            <p>{photo.photoDescription}</p>
            <ul>
                {photo.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    );
}
export default Photo;