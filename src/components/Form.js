import React, { Component } from 'react';
import firebase from '../firebase';

class Form extends Component {
    updateData() {
        this.props.updateData()
    }

    addContacts = (event) => {
        event.preventDefault();
        
        let newContact = {
            prenom: event.target.prenom.value,
            nom: event.target.nom.value,
            email: event.target.email.value,
            compagnie: event.target.compagnie.value,
            notes: event.target.notes.value,
        }

        const db = firebase.firestore();
        const settings = { timestampsInSnapshots: true};
        db.settings(settings)

        db.collection('contacts').add(newContact)

        // reset formaulaire 
        document.getElementById('addContact').reset();
        this.updateData()
    }

    render() { 
        return ( 
            <div className="row">
                <form className="col s12" id="addContact" onSubmit={ this.addContacts.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input  id="prenom" type="text" className="validate" />
                            <label for="prenom">Prénom</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nom" type="text" className="validate"/>
                            <label for="nom">Nom</label>
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
                        <input id="compagnie" type="text" className="validate"/>
                        <label for="compagnie">Compagnie</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="notes" type="test" className="validate"/>
                        <label for="notes">Notes</label>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button type="submit" className="waves-effect waves-ligth btn darken-4">Ajouter</button>
                    </div>
                </form>
            </div>

         );
    }
}
 
export default Form;