import React, { Component } from 'react';
import './Search.css';
import Fire from "../Fire/Fire";


class Search extends Component {

    searchRef = React.createRef();


    getuserInput = (e) => {

        e.preventDefault();
        const textData = this.searchRef.current.value;
        console.log(this.searchRef.current.value);
        console.log(textData.length);
        this.props.searchData(textData);
        const ip1 = this.props.ip;

        var databaseService = Fire.database();
        var ref = databaseService.ref('Users');

        Fire.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var today = new Date();
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

                ref.push({
                    ID: user.uid,
                    Time: today.toLocaleTimeString(),
                    Date: date,
                    IP: ip1,
                    Busqueda: textData
                })  .then(function() {
                    console.log('dato almacenado correctamente');
                })
                .catch(function(error) {
                    console.log('detectado un error', error);
                });
                // ...
            } else {
                // User is signed out.
                // ...
            }
            // ...
        });



        /* Fire.auth().signInAnonymously().catch(function (error) {
              //write on DataBase.
  
              Fire.auth().onAuthStateChanged(function (user) {
                  
                  if (user) {
                      // User is signed in.
                     /* var isAnonymous = user.isAnonymous;
                      var uid = user.uid;
                      var db = Fire.database();
                      var ref = db.ref.child('Users');
  
                      Fire.database().ref(`/users/${uid}`).set(user.child('Users').child('ID'));
                      // Fire.database().ref.child('Users').child('ID').set(Fire.user.uid);
                      //ref.child('ID').push('wdad21');*/




        /*  } else {
              // User is signed out.
              // ...
          }

      });


  });*/


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
