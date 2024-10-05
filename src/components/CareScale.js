import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


function CareScale({ scaleValue, careType }) {

  //Data
  const range = [1, 2, 3]
  
  //Behavior
  const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

  const AlertInfoScale = function (scaleValue, careType) {

    let text = "Cette plante requiert "
    const scaleType = careType === 'light' ? 'de lumière' : 'd\'arrosage'

    if (scaleValue === 1) {
      text = text.concat('peu ')
    }
    if (scaleValue === 2) {
      text = text.concat('modérément ')
    }
    if (scaleValue === 3) {
      text = text.concat('beaucoup ')
    }

    alert(text.concat(scaleType))
  }

  //Render
  return (
      <div onClick={()=> AlertInfoScale(scaleValue,careType)}>
          {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
          )}
      </div>
  )
}

export default CareScale;