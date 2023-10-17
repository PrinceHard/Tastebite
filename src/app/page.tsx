import { use } from "react"

const getRandomRecipe = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
        cache: 'no-cache'
    })
    console.log('Dentro do Server')

    if(!res.ok){
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const getRandomRecipeStatic = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
        cache: 'force-cache'
    })
    console.log('Dentro do Static')

    if(!res.ok){
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export default function Home() {
    const recipeFromServer = use(getRandomRecipe()) 
    const recipeFromStatic = use(getRandomRecipeStatic()) 
    return (
        <div>
            <main className="px-56">
                <div className="mt-12">
                    <h1 className="text-4xl font-semibold">Receita do Dia</h1>
                    <div className="flex">
                        <img className="w-2/3 rounded-md"
                            src="https://oquetempracomer.com.br/wp-content/uploads/elementor/thumbs/Design-sem-nome-58-q1fgbaa3vnhvilmhnsouv4jeu5dyli3d74uguij3x8.jpg" />
                        <div className="rounded-md bg-[#e3f1ff] p-3">
                            <h2 className="font-semibold text-2xl"></h2>
                            <span className="font-semibold">Intruções:</span>
                            <p>Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                            <span className="font-semibold">Ingredientes:</span>
                            <p>five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                        </div>
                    </div>
                </div>
            </main>
            <div>{recipeFromServer?.meals?.[0]?.strMeal}(Dinamico)</div>
            <div>{recipeFromStatic?.meals?.[0]?.strMeal}(Static)</div>
        </div>
    )
}
