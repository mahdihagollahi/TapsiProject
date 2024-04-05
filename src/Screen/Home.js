import Header from '../Componet/Header'
import Service from '../Componet/Service'
import Tell from '../Componet/Tell';
import Business from '../Componet/Business';
import Code from '../Componet/Code';
import City from '../Componet/City';
import Good from '../Componet/Good';
import Blog from '../Componet/Blog';
import Iran from '../Componet/Iran';
import Footer from '../Componet/Footer';

function App() {
    return (
      <>
        <div className='overflow-x-hidden'>
        <Header/>
      <Service/>
      <Tell/>
      <Business/>
      <Code/>
      <City/>
    <Good/>
    <Blog/>
    <Iran/>
    <Footer/>
        </div>
     
      
    </>
    );
  }
  
  export default App;