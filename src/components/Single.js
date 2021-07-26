import React, { Component } from 'react';

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return(
            <li className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">
                            { this.props.item.prenom }  { this.props.item.nom } 
                        </h2>
                        <h3 className="card-title"> { this.props.item.compagnie } </h3>
                        <div className="card-actions">
                            <button className="waves-effect waves-ligth btn red darken-4" onClick={this.props.deleteData.bind(this, this.props.item.id)}>Supprimer</button>
                        </div>
                    </div>
                    
                </div>
            </li>
            );
    }
}
 
export default Single;


