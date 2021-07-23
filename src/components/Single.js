import React, { Component } from 'react';

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return(
            <li className="col s12 l6">
                <div className="card">
                    <div className="card-image">
                        <img src="./portrait.jpg" alt={ this.props.item.notes}/>
                        <h2>
                            { this.props.item.notes } - { this.props.item.prenom }  { this.props.item.nom } 
                        </h2>
                    </div>
                    <div className="card-content">
                        <p> { this.props.item.notes } </p>
                    </div>
                    <div className="card-actions">
                            <button className="waves-effect waves-ligth btn red darken-4" onClick={this.props.deleteData.bind(this, this.props.item.id)}>Supprimer</button>
                    </div>
                </div>
            </li>
            );
    }
}
 
export default Single;
