import { useState } from "react";
import {Link} from 'react-router-dom'
import '../components/Card.css';

const Card = (props) => {

    const [count, setCount] = useState(0)
    const updateCount = () => {
        setCount((count) => count + 1)
    }

    return (
        <div className="Card">
            <h2 className="name">{props.name}</h2>
            <h2 className="species">{props.species}</h2>
            <h2 className="hobby">{props.hobby}</h2>
            <Link to={`/town/${props.id}/edit`}>
                <button>Edit</button>
            </Link>
        </div>       
    )



}

export default Card