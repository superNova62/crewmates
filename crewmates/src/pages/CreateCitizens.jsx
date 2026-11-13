import { useState } from 'react'
import { supabase } from '../client'
import './CreateCitizens.css'


const CreateCitizens = () => {

    const [citizen, setCitizen] = useState({name: "", species: "", hobby: ""});

    //create citizen
    const createCitizen = async (event) => {
        event.preventDefault();
        await supabase.from("Citizens").insert({name: citizen.name, species: citizen.species, hobby: citizen.hobby}).order('created_at', {ascending: true});

        window.location = "/citizen";
    }

    //update citizen

    //delete citizen


    const handleChange = (event) => {
        const {name, value} = event.target
        setCitizen( (prev) => {
            return {
                ...prev,
                [name]:value
            }     
        })
    }

    return (
        <div class="create-citizens">
            <form>
                <div className="field">
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" id="name" name="name" onChange={handleChange} /><br />
                    <br/>
                </div>

                <div className="field">
                    <label htmlFor="species">Species</label><br />
                    <input type="text" id="species" name="species" onChange={handleChange} /><br />
                    <br/>
                </div>

                <div className="field">
                    <label htmlFor="hobby">Hobby</label><br />
                    <input type="text" id="hobby" name="hobby" onChange={handleChange}>
                    </input>
                    <br/>
                </div>

                <input type="submit" value="Submit" onClick={createCitizen}/>
            </form>
        </div>
    )

}

export default CreateCitizens