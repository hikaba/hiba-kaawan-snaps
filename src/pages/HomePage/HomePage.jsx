import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/Header';
import Intro from '../../components/Intro/Intro';
import PhotoList from '../../components/PhotoList/PhotoList';
import TagList from '../../components/TagList/TagList';
import { useState } from "react";
function HomePage() {
  const [filterStatus, setFilterStatus] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");
  
  function handleStatusClick(){
    setFilterStatus(!filterStatus)
  }
  function handleTagClick(clickedTag){
  setSelectedTag(currentTag => currentTag === clickedTag ? "" : clickedTag);
  }

  return (
    <>
    <Header setStatus={handleStatusClick} filterStatus={filterStatus}/>
      <main> 
        <div className="tag-wrapper">
          {filterStatus ? (
            <TagList handleTagClick={handleTagClick} selectedTag={selectedTag} />
          ) : null}
          <div className="container">
            <Intro />
            <PhotoList filterStatus={filterStatus} selectedTag={selectedTag}/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )

}
export default HomePage;