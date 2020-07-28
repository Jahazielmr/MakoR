import React, { Component } from 'react';
import Search from './Components/Search';
import './App.css';

class App extends Component {


  state = {
    textData1 : ''
  }

  APIconsult = () => {
    const url = `https://pixabay.com/api/?key=17658002-78004488455a0b123ed9c9f52&q=${this.state.textData1}`;    
    console.log(url);   

    /*Usamos fetch para interpretar los archivos jason generados*/
    fetch(url)
    .then(returnR => returnR.json())
    .then(resultado => console.log(resultado))
  }

  searchData = (textData) => {
    
    this.setState({
      textData1: textData
    }, () => {
      /* Hacer la busqueda de imagenes con el state actual*/
      this.APIconsult();
    })


 
  }


  render() {
    return (
      <div className="app Container">

        <div id="jumb" className="jumbotron">

          <h1 className="lead text-center" id="MainTittle"> Mako Emerald </h1>

        </div>

        <Search

          searchData={this.searchData}

        />

        {this.state.textData1}

      </div>

    );
  }
}




export default App;

