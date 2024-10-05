import CareScale from "./CareScale"
import PropTypes from 'prop-types'
import '../styles/PlantItem.css'
import '../styles/Layout.css'


function PlantItem({ cover, name, water, light, price}) {

	//Behavior
	function handleClick(plantName) {
		alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
	}

	//Render
	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}


PlantItem.propTypes = {
  name: PropTypes.string,
  cover: PropTypes.string,
  id: PropTypes.string,
  light: PropTypes.number,
  water: PropTypes.number,
	id:PropTypes.string,
}




export default PlantItem;