import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import CareScale from './CareScale'
import '../styles/PlantItem.css'


function ShoppingList({ cart, updateCart, activeCategory, setActiveCategory, updateShoppingModalContent, updateShoppingModalDisplay }) {

	//Data

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	// Behavior

	function openPlantModal(name,price,cover,description,water,light){
		updateShoppingModalDisplay('modal-open')
		updateShoppingModalContent((
		<div className='lmj-plant-modal-content'>
			<p>{name}</p>
			<img src={cover} alt={name}/>
			<p>{description}</p>
			<div className='lmj-plant-modal-careScale'>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
			<p>{price}€</p>
		</div>))
	}

	function resetCategory() {
			setActiveCategory('')
	}

	function addToCart(name, price,id) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ id,name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { id,name, price, amount: 1 }])
		}
	}

	//Render

	return (
		<div className='lmj-shopping-list'>
			<Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} resetCategory={resetCategory} categories={categories}/>
			<ul className='lmj-plant-list'>
				{ activeCategory.length === 0 ?  plantList.map(({ id, cover, name, water, light, price,description }) => (
					<div key={`${id}-${name}`}>
						<PlantItem							
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
							
						/>

						<div className='lmj-plant-buttons-div'>
							<button onClick={() => openPlantModal(name,price,cover,description,water,light)}>Plus d'infos</button>
							<button onClick={() => addToCart(name,price,id)}>Ajouter</button>
						</div>
						
					</div>
				))
						: plantList.filter((plant) => activeCategory.includes(plant.category)).map(({ id, cover, name, water, light, price,description }) => (
								<div key={`${id}-${name}`}>
										<PlantItem												
												cover={cover}
												name={name}
												water={water}
												light={light}
												price={price}
												
										/>
										<div className='lmj-plant-buttons-div'>
											<button onClick={() => openPlantModal(name,price,cover,description,water,light)}>Plus d'infos</button>
											<button onClick={() => addToCart(name,price,id)}>Ajouter</button>
										</div>
								</div>
						))
				}
			</ul>
		</div>
	)
}

export default ShoppingList