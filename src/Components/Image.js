import React, { Component } from 'react';
import './Image.css';

const Image = (props) =>{

    const {largeImageURL, likes, previewURL, tags, views} = props.image;

    return(
        

        <div className="  col-xs-8 col-sm-6 col-md-4 col-lg-3 mb-4" >
            
            <div className= "card" id="cardbox">
            
                 <img src={largeImageURL} alt={tags} className="card-img-top"/>
                 <div className="card-body">
                  {/*}  <p className="card-text"> {likes} Me gusta </p>*/}
                    <p className="card-text"> {views} Vistas </p>
                    <a href={largeImageURL} target="_blank" id="viewButton" className="btn btn-primary btn-block"> Ver Imagen </a>


                 </div>
            
            </div>


        </div>

    )

}

export default Image;