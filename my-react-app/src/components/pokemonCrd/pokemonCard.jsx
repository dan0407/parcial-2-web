// import { useNavigate } from "react-router";
const Card = ({usrers}) => {
   
        // let navigate = useNavigate();
	return (
        
		<div>
			<h2>{usrers.id}</h2>
			<h1>{usrers.name}</h1>
			<p>{usrers.img}</p>
			<img src={usrers.sprites.back_shiny} alt="pokemon" />
			<p>{usrers.stats[0].base_stat}hp</p>
			<p>{usrers.stats[1].base_stat}attack</p>
			<p>{usrers.stats[2].base_stat}defense</p>
			<p>{usrers.stats[3].base_stat}special-attack</p>
			<p>{usrers.stats[4].base_stat}special-defense</p>

            <button type='submit'> choose </button>
        

			
	
		</div>
	);
};

export default Card;