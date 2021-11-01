//import logo from './logo.svg';
import './App.css';
import Banner from './components/banner/banner';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HomePage from './pages/home/home.page';


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
