import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		light: 2,
		water: 3,
		cover: monstera,
		price: 15,
		description: 'Plante tropicale aux grandes feuilles perforées, appréciée pour son aspect décoratif. Elle aime la lumière indirecte et un environnement humide.'
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16,
		description: "Plante d'intérieur populaire avec de grandes feuilles en forme de violon. Elle aime la lumière vive indirecte."
	},

	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,
		price: 9,
		description: "Plante d'intérieur facile d'entretien avec des feuilles en forme de cœur, idéale pour les débutants. Elle tolère une faible luminosité."
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		light: 2,
		water: 3,
		cover: calathea,
		price: 20,
		description: ''
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 25,
		description: "Arbre méditerranéen, célèbre pour ses olives et son feuillage argenté. Il aime le soleil et supporte des conditions sèches."
	},

	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: cactus,
		price: 6,
		description: ''
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		light: 2,
		water: 3,
		cover: basil,
		price: 5,
		description: "Plante aromatique utilisée en cuisine, avec des feuilles vertes et un parfum distinct. Elle aime le soleil et un sol bien drainé."
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 8,
		description: "Plante grasse avec des feuilles épaisses et charnues, adaptée aux environnements arides. Elle demande peu d’eau et beaucoup de lumière."
	},

	{
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint,
		price: 4,
		description: "Plante aromatique vivace, utilisée pour ses feuilles fraîches en cuisine et infusions. Elle pousse bien dans des endroits mi-ombragés."
	}
]