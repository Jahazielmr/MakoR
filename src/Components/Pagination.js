import React, { Component } from 'react';
import './Pagination.css';


const Pagination = props => {

    return (

        <div className="container">

            <div className="row justify-content-center  py-3">
                <p1 id="pageNumber" >Page {props.pageNumber}</p1>
            </div>

            <div className="row justify-content-center  py-3">

                <button onClick={props.previousPage} id="paginationB" type="button" className="btn btn-info mr-1"> &larr; Prev</button>
                <button onClick={props.nextPage} type="button" id="paginationB" className="btn btn-info"> Next &rarr; </button>

            </div>
        </div>

    )

}

export default Pagination;