import React, {Component} from 'react'
import './App.css';
import firebase from './firebase';
import Grid from './components/Grid';
import Form from './components/Form'
class App extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			contacts: []
		};
	}

	updateData() {
		const db = firebase.firestore();
		const settings = { timestampsInSnapshots: true};
		db.settings(settings)

		db.collection('contacts').get()
		.then((snapshot) => {
		let contacts = [];
		snapshot.forEach((doc) => {
			let contact = Object.assign({ id: doc.id}, doc.data())
			contacts.push(contact)
		})
	//	this.setState({ contacts: contacts })
		this.setState({ contacts })
		})
		.catch( err => console.log("Error: " + err))
	}

	deleteData(docID) {
		const db = firebase.firestore();
		const settings = { timestampsInSnapshots: true};
		db.settings(settings)

		db.collection('contacts').doc(docID).delete()
		this.updateData()
	}

	componentWillMount(){
		this.updateData()
	}
	render() {
		//console.log(this.state.contacts)
		return (
		<div>
			<div className="navbar-fixed">
				<nav className="blue lighten-2">
					<div className="nav-wrapper">
					<a href="/" className="brand-logo center"> Liste Des Candidats </a>
					</div>
				</nav>
			</div>
			<div className="container">
				<div>
					<Form updateData={ this.updateData.bind(this) }/>
				</div>
				<div>
					<Grid items={this.state.contacts} deleteData={this.deleteData.bind(this)}/>
				</div>
			</div>
		</div>
	);
	}
  
}

export default App;
