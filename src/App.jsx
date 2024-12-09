import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import PhotoPage from './pages/PhotoPage/PhotoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<HomePage />}/>
        <Route path='photos/:photoId' element = {<PhotoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
