// import logo from '../logo.svg';
import '../../App.css';
import '../../css/styles.css';

import Header from '../../components/Header'
import ContentCategory from '../../components/Admin/ContentCategory'
import Footer from '../../components/Footer'

function Category() {
  return (
    <div className="App">
        <Header/>
        <ContentCategory/>
        <Footer/>
    </div>
  );
}

export default Category;
