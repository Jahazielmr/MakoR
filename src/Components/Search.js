import React, { Component } from 'react';
import './Search.css'

class Search extends Component {

    searchRef = React.createRef();


    getuserInput = (e) => {

        e.preventDefault();
        const textData = this.searchRef.current.value;
        console.log(this.searchRef.current.value);
        console.log(textData.length);
        this.props.searchData(textData);
        
    }

    render() {
        return (

            <form onSubmit={this.getuserInput} >

                <div className="container w-50">
                    <div className="row">
                        <div className="form-group col-12 ">
                            <input id="searchBar" ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Music, Movies, Martial Arts..." />
                        </div>

                        <div className="form-group col-12 ">
                            <input id="buttonBar" type="submit" value="Search" className="btn btn-lg btn-danger btn-block" />
                        </div>

                    </div>
                </div>


            </form>
        )
    }


}

export default Search;
