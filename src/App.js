import React, { Component } from 'react';
import Search from './Components/Search';
import ImageCollection from './Components/ImageCollection'
import './App.css';

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

    }).catch()
  }


  state = {
    textData1: '',
    images: [],
    ip1:'',
    page: ''
  }


  automatedScroll = () =>{

    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');

  }

  previousPage= () =>{

     //read current page state

     let page = this.state.page;

     //if page value =1 return null

     if(page==1) return null;

     //currentpage + 1
 
     page -=1; 
 
 
     //set state with new values
 
     this.setState({
       page
     }, () => {
       this.APIconsult();
       this.automatedScroll();
     });
 
 
     console.log(page);

  }

  
  nextPage= () =>{

    //read current page state

    let page = this.state.page;

    //currentpage + 1

    page +=1; 


    //add to state in order to get 3,4,5,6 value after complete the add process
    //without this part, the function will be adding +1 to page state and page state will be 1 ever.
    // That is why is necessary to change the state.

    this.setState({
      page
    }, () => {
      this.APIconsult();
      this.automatedScroll();
    });


    console.log(page);
    
  }

  APIconsult = () => {

    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=17658002-78004488455a0b123ed9c9f52&q=${this.state.textData1}&per_page=20&page=${page}`;

    console.log(url);

    /*Usando fetch para interpretar los archivos jason generados*/
    fetch(url)
      .then(returnR => returnR.json())
      .then(returnR => this.setState({ images: returnR.hits }))
  }

  searchData = (textData) => {

    this.setState({
      textData1: textData,
      page: 1
    }, () => {
      /* Hacer la busqueda de imagenes con el state actual*/
      this.APIconsult();
    })

  }


  render() {
    return (
      <div  className="container">

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
          nextPage= {this.nextPage}
          previousPage = {this.previousPage}
          pageNumber= {this.state.page}

        />

      </div>

    );
  }
}

export default App;

