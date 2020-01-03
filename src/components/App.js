import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Switch,Route} from 'react-router-dom';


//Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';
import Autos from './Global/Autos';
import Acesso from './Global/Acesso';


class App extends Component{
  render(){
    return(
      <div className="App">
          <Header />
          <Content />
          <Switch>
              <Route path="/autos" component ={Autos}/>
              <Route path="/acesso" component ={Acesso}/>
            </Switch>
          <Footer />
          
        <div className="btn-whatsapp">
        <a href="http://api.whatsapp.com/send?phone=+551140209731" target="_blank">
        <img src="./imagenes/whatsapp.svg" alt=""></img></a>
        </div>
        
     
        </div>
       
       
    );
  }

}


export default App;
