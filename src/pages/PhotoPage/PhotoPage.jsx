import "./PhotoPage.scss";
import HeaderOther from "../../components/HeaderOther/HeaderOther";
import Footer from "../../components/Footer/footer";
import PhotoDetails from "../../components/PhotoDetails/PhotoDetails";
import CommentForm from "../../components/CommentForm/CommentForm";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function PhotoPage() {
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const apiKey = "bb1afd72-69af-4298-bc35-5df91725a3f2";
    const baseURL = "https://unit-3-project-c5faaab51857.herokuapp.com/";

    useEffect(() => {
        async function getPhotoDetails(){
            setLoading(true);
            try{
                const response = await axios.get(`${baseURL}photos/${params.photoId}?api_key=${apiKey}`);
                setPhoto(response.data);
            } catch (error) {
                console.log("Error getting photo", error);
            }
            finally {
                setLoading(false);
            }
        }
        getPhotoDetails();
    }, []);

    return(
        <div>
            <HeaderOther />
            {loading ? <p>Loading...</p> : <PhotoDetails photo={photo}/>}
            <CommentForm />
            <Footer />
        </div>
    );
}
export default PhotoPage;