import React from 'react';
import ReactDOM from 'react-dom';
import PlayerDetails2 from './PlayerDetails2';

import 'bootstrap/dist/css/bootstrap.css';


//Criar componente React
class App extends React.Component{

     jogadores= [
        {nome:"CR7"}, 
        {nome:"Messi"}, 
        {nome:"Neymar"}, 
        {nome:"Pelé"}
    ]



    constructor(props){
        super(props);

       

        this.state = {
            indice: 0
        }
    
    
    }

incrementarIndice = (event) =>{

if(this.state.indice <= this.jogadores.length-2)
        this.setState({
        indice: this.state.indice+1
        
    })
}
decrementarIndice = (event) =>{

    if(this.state.indice !=0)
    this.setState({
        indice: this.state.indice-1
    })
}



      render(){
          return(
          <div className="container">
              <h1>Jogadores</h1>
              <PlayerDetails2 
                    
                    jogadores={this.jogadores[this.state.indice]}
                  >
                  
                  </PlayerDetails2>  

                                              
                  <button type="button" class="btn btn-dark" onClick= {this.decrementarIndice}>
                      Anterior
                  </button>
                  <button type="button" class="btn btn-primary" onClick={this.incrementarIndice}>
                      Próximo
                  </button>
                  
                 
          </div>
      )
        
      };
    }


//Mostrar componente React na tela
ReactDOM.render(<App/>, document.querySelector("#root"))