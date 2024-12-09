import './PhotoList.scss';
import PhotoItem from "../PhotoItem/PhotoItem";
import { useState, useEffect } from 'react';
import axios from 'axios';

function PhotoList(props){
    const apiKey = "bb1afd72-69af-4298-bc35-5df91725a3f2";
    const baseURL = "https://unit-3-project-c5faaab51857.herokuapp.com/";
    const [photos, setPhotos] = useState([]);
    let filteredPhotos = [];

    async function getPhotos() {
        try {
            const response = await axios.get(`${baseURL}photos/?api_key=${apiKey}`);
            setPhotos(response.data);
        }catch (error) {
            console.log("error getting photos", error);
        }
    }
useEffect(() => {
    getPhotos();
}, []);

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