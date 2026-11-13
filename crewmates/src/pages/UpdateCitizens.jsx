import { useState, useEffect } from 'react'
import { supabase } from '../client'
import './CreateCitizens.css'
import { useNavigate, useParams } from 'react-router-dom'


const UpdateCitizens = ({data}) => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [citizen, setCitizen] = useState({id: id, name: "", species: "", hobby: ""});

    useEffect(() => {
        const fetchCitizen = async () => {
            const {data, error} = await supabase.from('Citizens').select('*').eq('id', id).single();
    

            if(error) {
                console.error('Error fetching citizen:', error);
            } else {
                setCitizen({
                    name: data.name, 
                    species: data.species,
                    hobby: data.hobby    
                });
            }
        }

        fetchCitizen();
    }, [id]);


    //update citizen
    const handleChange = (event) => {
        const {name, value} = event.target
        setCitizen( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
        
    }

   const updateCitizen = async (event) => {
        event.preventDefault();

        await supabase.from('Citizens').update({
            name: citizen.name,
            species: citizen.species,
            hobby: citizen.hobby
        }).eq('id', id)


        navigate('/town')
    }


    const deleteCitizen = async (event) => {
        event.preventDefault();

        await supabase.from('Citizens').delete().eq('id', id)

        navigate('/town')
    
    }


    return (
        <div class="create-citizens">
            <form onSubmit={updateCitizen}>
                <div className="field">
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" id="name" name="name" value={citizen.name} onChange={handleChange} /><br />
                    <br/>
                </div>

                <div className="field">
                    <label htmlFor="species">Species</label><br />
                    <input type="text" id="species" name="species" value={citizen.species} onChange={handleChange} /><br />
                    <br/>
                </div>

                <div className="field">
                    <label htmlFor="hobby">Hobby</label><br />
                    <input type="text" id="hobby" name="hobby" value={citizen.hobby} onChange={handleChange}/>
                    <br/>
                </div>

                <button>Update</button>
                <button onClick={deleteCitizen}>Delete</button>
            </form>
        </div>
    )

}

export default UpdateCitizens