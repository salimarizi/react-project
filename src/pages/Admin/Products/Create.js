// import logo from '../logo.svg';
import '../../../App.css';
import '../../../css/styles.css';

import Header from '../../../components/Header'
import FormProduct from '../../../components/Admin/FormProduct'
import Footer from '../../../components/Footer'

function Index() {
  return (
    <div className="App">
        <Header/>
        <FormProduct/>
        <Footer/>
    </div>
  );
}

export default Index;
