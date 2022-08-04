// import logo from '../logo.svg';
import '../../../App.css';
import '../../../css/styles.css';

import Header from '../../../components/Header'
import ContentProduct from '../../../components/Admin/ContentProduct'
import Footer from '../../../components/Footer'

function Index() {
  return (
    <div className="App">
        <Header/>
        <ContentProduct/>
        <Footer/>
    </div>
  );
}

export default Index;
