import { useState, useEffect } from 'react'
import { supabase } from '../client'
import Card from '../components/Card.jsx';



const ReadCitizens = (props) => {

    const [citizen, setCitizen] = useState([]);

    useEffect( () => {
    
    const fetchCitizen = async () => {
        const {data} = await supabase.from("Citizens").select('*').order('created_at', {ascending: true});
        setCitizen(data);
    }
    
        fetchCitizen();
    }, [props])

    return (
        <div className="ReadCitizens" >
            {
                citizen && citizen.length > 0 ?
                [...citizen]
                .sort((a,b) => b.id - a.id)
                .map((citizen, index) => 
                    <Card key={citizen.id} id={citizen.id} name={citizen.name} species={citizen.species} hobby={citizen.hobby} />  
                ) : null


            }

        </div>   
        
    )


}

export default ReadCitizens