import { useState,useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import Modal  from './Modal'
import '../styles/Layout.css'

function App() {

	//Data
	const [activeCategory, setActiveCategory] = useState([])
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	const [modalDisplay, updateModalDisplay] = useState('modal-closed')
	const [modalContent,updateModalContent] = useState(<div>JSX Element</div>)
	//Behavior
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	//Render
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} activeCategory={activeCategory} />
				<ShoppingList cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} updateShoppingModalContent={updateModalContent} updateShoppingModalDisplay={updateModalDisplay} />
			</div>
			<Footer />
			<Modal openedModal={modalDisplay} setModalState={updateModalDisplay} >
				{modalContent}
			</Modal>
		</div>
	)
}

export default App