import React, { Component } from 'react';

const Pagination = props => {

    return (

        <div className="row justify-content-center py-3">

            <button type="button" className="btn btn-info mr-1"> &larr; Prev</button>
            <button type="button" className="btn btn-info"> Next &rarr; </button>

        </div>

    )

}

export default Pagination;