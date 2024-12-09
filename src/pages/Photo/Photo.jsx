import "./Photo.scss";
import HeaderOther from "../../components/HeaderOther/HeaderOther";
import { useParams } from "react-router-dom";
import photosData from "../../data/photos.json";
import PhotoDetails from "../../components/PhotoDetails/PhotoDetails";
function Photo() {
    const {id} = useParams();
    const photo = photosData.find( p => p.photoId === id);
    const timestamp = photo.timestamp;
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2,'0');
    const month = String(date.getMonth()+1).padStart(2, '0');
    const year = String(date.getFullYear())
    const fullDate = `${month}/${day}/${year}`;
    
    if (!photo) {
        return <div>Photo not Found</div>;
    }
    return(
        <div>
            <HeaderOther />
            <PhotoDetails photo ={photo}/>
        </div>
    );
}
export default Photo;