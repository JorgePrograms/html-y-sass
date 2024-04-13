
import './App.scss';
import Declaracion from './componentes/Declaracion';
import logo from './images/logo.svg'
import logo2 from './images/illustration-mockups.svg';

function App() {
  return (
    <div className="App">
<div className='container'>
      <img className='hola' src={logo} alt='algo' />
      <div className='container-main'>
        <div class="contenedor-imagen">
          <img className='imagen2' src={logo2} alt='algo2' />
          </div>
               <div className='container-main__description'>
                 <div>
                     <h1 className='h1-reduced'>Build The Community </h1>
                    <h1 className='h1-reduced'>Your Fans Will Love</h1>
                  </div>
                    
    
                     <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                     Create connections with your users as you engage in genuine discussion. </p>

                      <button className='boton'>Register</button>
                </div>
       
 

      </div>

      </div>   {/*Cierre de container*/}
    </div>   //Cierre de App
  );
}

export default App;
