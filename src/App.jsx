import './App.scss';
import Footer from './components/Footer/footer';
import photos from './data/photos.json'
function App() {
  const user = {
    name:"bob",
    age: 75,
    height: "tall"
  };
  return (
    <>
      <h1>Hello React</h1>
      <header className='header'>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">Home</li>
            <li className="header__item">About</li>
            <li className="header__item">Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1 className="hero__title">React JSX</h1>
        </section>

        <section className="user">
          <p className="user__name">
            {user.name}
          </p>
          <p className="user__name">
            {user.age}
          </p>
        </section>
        <p></p>
      </main>
      <Footer/>
    </>
  )
}

export default App
