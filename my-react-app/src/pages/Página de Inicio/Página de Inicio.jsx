import { useState, useEffect } from 'react';
import Card from '../../components/pokemonCrd/pokemonCard'

function INICIO() {
	const [user, setUser] = useState([]);
	const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(true);
    
    const handleInputChange = (event) => {
		setInputValue(event.target.value);
   
	};
    
	const handleSubmit = (event) => {
        console.log("hola");
		event.preventDefault();
         fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
        .then((response) => response.json())
        .then((data) => {
            setUser(data);
            setLoading(false);
        });
	};

    console.log(user);

         
 return (
		<div>
			<h2>Fetching Data Example</h2>
            <input type='text'value={inputValue}onChange={handleInputChange} />
            <button type='submit'onClick={(e) => handleSubmit(e)} > Submit </button>
            {loading ? <p>Loading...</p> : <Card usrers={user}/>}
		</div>

  
	);
}
export default INICIO;