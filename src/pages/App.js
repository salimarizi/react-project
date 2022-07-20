// import logo from '../logo.svg';
import '../App.css';
import '../css/styles.css';

import Header from '../components/Header'
import Banner from '../components/Banner'
import ContentHome from '../components/ContentHome'
import Footer from '../components/Footer'

function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <ContentHome/>
        <Footer/>
    </div>
  );
}

export default App;
