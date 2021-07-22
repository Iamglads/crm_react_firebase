

const Single = (props)  => {
    return(
        <li className="col s12 l6">
            <div className="card">
                <div className="card-image">
                    <img src="../assets/portrait.jpg" alt={ props.item.notes}/>
                    <span className="card-title">
                        { props.item.notes } - { props.item.prenom }  { props.item.nom } 
                    </span>
                </div>
                <div className="card-content">
                    <p> { props.item.notes } </p>
                </div>
                <div className="card-actions">
                        <button className="waves-effect waves-ligth btn red darken-4">Supprimer</button>
                </div>
            </div>
        </li>
        );
}
 
export default Single;
 
