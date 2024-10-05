
import { useState, useEffect } from 'react'
import '../styles/Cart.css'


function Cart({ cart, updateCart,activeCategory }) {

	//Data
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)


	

	//Behavior
	useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	function deleteProductFromCart(cart,id){
		const cartWithoutItem = cart.filter((item) => item.id !== id)
		updateCart(cartWithoutItem)
	}

	function operationOnProductFromCart(cart,id,operator){
		const productWithId = cart.filter((item) => item.id === id)[0]
		if(operator === "-"){
			if(productWithId.amount === 1 ){
				deleteProductFromCart(cart,id)
			}else{
				productWithId.amount -= 1
				const cartWithoutProduct = cart.filter((item) => item.id !== id)
				updateCart([...cartWithoutProduct, productWithId] )
			}
		}
		else{
			productWithId.amount += 1
			const cartWithoutProduct = cart.filter((item) => item.id !== id)
			updateCart([...cartWithoutProduct, productWithId] )
		}



	}

	// useEffect(() => {
  //   alert(`J'aurai ${total}€ à payer 💸`)
	// }, [total])

	//Render
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul style={{padding : 0}}>
						{cart.map(({ name, price, amount,id }, index) => (
							<div key={`${name}-${index}`} className='lmj-cart-product' >
								<p>{name} {price}€ x {amount}</p>
								<div className='lmj-cart-product-button'>
									<button onClick={()=>deleteProductFromCart(cart,id)}>Supprimer</button>
									<button onClick={()=>operationOnProductFromCart(cart,id,"-")}>-1</button>
									<button onClick={()=>operationOnProductFromCart(cart,id,"+")}>+1</button>
								</div>
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
