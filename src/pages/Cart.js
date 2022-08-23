// import logo from '../logo.svg';
import '../App.css';
import '../css/styles.css';

import Header from '../components/Header'
import ContentCart from '../components/ContentCart'
import Footer from '../components/Footer'

function Cart() {
  return (
    <div className="App">
        <Header/>
        <ContentCart/>
        <Footer/>
    </div>
  );
}

export default Cart;
