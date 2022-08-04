// import logo from '../logo.svg';
import '../App.css';
import '../css/styles.css';

import Header from '../components/Header'
import ContentAuth from '../components/ContentAuth'
import Footer from '../components/Footer'

function Auth() {
  return (
    <div className="App">
        <Header/>
        <ContentAuth/>
        <Footer/>
    </div>
  );
}

export default Auth;
