import './App.scss';
import Footer from './components/Footer/footer';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import PhotoList from './components/PhotoList/PhotoList';
import TagList from './components/TagList/TagList';
import photos from './data/photos.json';
import { useState } from "react";
function App() {
  const [filterStatus, setFilterStatus] = useState(true);
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
        <div className="container">
          {filterStatus ? (
            <TagList handleTagClick={handleTagClick} selectedTag={selectedTag} />
          ) : null}
          <Intro />
          <PhotoList selectedTag={selectedTag}/>
        </div>
  
      </main>
      <Footer/>
    </>
  )
}

export default App
