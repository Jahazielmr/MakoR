import React, { Component } from 'react';
import Search from './Components/Search';
import ImageCollection from './Components/ImageCollection'
import './App.css';
import fire from "./Fire/Fire";



class App extends Component {

  componentWillMount(){
    /*Get IP using fetch*/
    fetch('https://api.ipify.org?format=json?callback=?',{

      method: 'GET',
      headers: {},

    })
    .then(res => {
      return res.text()
    }).then(ip => {

      this.setState({
        ip1: ip
      })

      console.log('ip', ip);
    }).catch()
  }


  state = {
    textData1: '',
    images: [],
    ip1:''
  }

  APIconsult = () => {
    const url = `https://pixabay.com/api/?key=17658002-78004488455a0b123ed9c9f52&q=${this.state.textData1}&per_page=50`;
    console.log(url);

    /*Usando fetch para interpretar los archivos jason generados*/
    fetch(url)
      .then(returnR => returnR.json())
      .then(returnR => this.setState({ images: returnR.hits }))
  }

  searchData = (textData) => {

    this.setState({
      textData1: textData,
    }, () => {
      /* Hacer la busqueda de imagenes con el state actual*/
      this.APIconsult();
    })

  }



  render() {
    return (
      <div className="container">

        <div id="jumb" className="jumbotron">
          <h1 className="lead text-center" id="MainTittle"> Mako Emerald </h1>
        </div>

        <Search
          searchData={this.searchData}
          ip= {this.state.ip1}
        />

        <ImageCollection
          images={this.state.images}
          input={this.state.textData1}
        />

        {console.log("hal" + this.state.images.length)}

      </div>

    );
  }
}

export default App;

