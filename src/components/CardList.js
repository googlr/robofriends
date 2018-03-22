import React from 'react';

import Card from './Card.js';


const CardList = ({robots}) => {
	const cardArrays = robots.map( (robot, i)=>{
		return ( <Card 
					key={robots[i].id} 
					id={robots[i].id} 
					name={robots[i].name} 
					email={robots[i].email} 
					/>
					);
	});
	return (
		<div>
			{cardArrays}
		</div>
		);
}

export default CardList;