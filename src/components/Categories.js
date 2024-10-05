import '../styles/Categories.css'


function Categories({activeCategory,setActiveCategory,resetCategory, categories}) {

    function updateCategoryList(e){
        const checkbox = e.target
        if (checkbox.checked){
            setActiveCategory([...activeCategory, checkbox.value])
        }
        else{
            const catWithoutCheckboxValue = activeCategory.filter((cat) => cat !== e.target.value)
            setActiveCategory([...catWithoutCheckboxValue])
        }

        console.log(activeCategory)

    }

    //Render
    return (
        <div className='lmj-categories-container'>
            <fieldset>
            <legend>Filtrer par catégorie</legend>


            {
                categories.map((category)=> {
                    return(
                    <div key={category}>
                        <input type="checkbox" name={category} id={category} value={category} onChange={updateCategoryList}/>
                        <label htmlFor={category}>{category}</label>
                    </div>)  
                })
            }

            
            </fieldset>
        </div>
    )
}

export default Categories;