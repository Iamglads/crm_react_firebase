import React, { Component } from 'react';

class Form extends Component {

    render() { 
        return ( 
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input  id="first_name" type="text" className="validate" />
                            <label for="first_name">Prénom</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate"/>
                            <label for="last_name">Nom</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="email" type="email" className="validate"/>
                        <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="email" type="email" className="validate"/>
                        <label for="email">Compagnie</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="notes" type="email" className="validate"/>
                        <label for="notes">Notes</label>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="waves-effect waves-ligth btn darken-4">Ajouter</button>
                    </div>
                </form>
            </div>

         );
    }
}
 
export default Form;