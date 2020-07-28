import React, {Component} from 'react';
import './Search.css'
 
 class Search extends Component {
    
    searchRef = React.createRef();

    getuserInput = (e) => {

        e.preventDefault();
        const textData = this.searchRef.current.value; 
        console.log(this.searchRef.current.value);            
        this.props.searchData(textData);
    }
    
    render() {
        return (     
            
            <form onSubmit={this.getuserInput} >
                
                
                <div className="row align-items-start justify-content-center justify-content-md-start">
                    <div className="form-group col-md-6 offset-3"> 
                        <input id="searchBar" ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Music, Movies, Martial Arts..."/>
                        {/*{this.props.userInput}*/}
                    </div> 

                    <div className="form-group col-md-6 offset-3"> 
                        <input id="buttonBar" type="submit" value="Search" className="btn btn-lg btn-danger btn-block"/>
                    </div>

                </div>

              

            </form>
        )
    }

    
}

export default Search;
