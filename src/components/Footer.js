import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {

  //Data
	const [inputValue, setInputValue] = useState('')

  //Behavior
  function noAtAlert(inputValue) {
    if (!inputValue.includes('@')) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
    }
  }

  //Render
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
      <input
        type='email'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={(e) => noAtAlert(e.target.value)}
      />
		</footer>
	)
}

export default Footer