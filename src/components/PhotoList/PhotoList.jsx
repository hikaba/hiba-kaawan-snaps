import './PhotoList.scss';
import photosData from "../../data/photos.json";
import PhotoItem from "../PhotoItem/PhotoItem";
import { useState } from 'react';

function PhotoList(props){
    const [photos, setPhotos] = useState(photosData);
    let filteredPhotos = [];

    if(props.selectedTag != ""){
        filteredPhotos = photos.filter((photo) => {
            return photo.tags.includes(props.selectedTag);
        });
    }else {
        filteredPhotos = photos;
    }
    
    return(
        <section className="photo-list">
            <ul className="photo-list__list">
                {filteredPhotos.map((photo) => {
                    return <PhotoItem width={props.filterStatus} key={photo.id} photo={photo}/>;
                })}
            </ul>
        </section>
    )
}
export default PhotoList;