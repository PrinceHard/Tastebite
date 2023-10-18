import IngredientList from "../IngredientList"
import InstructionsList from "../InstructionsList"
import YoutubeVideo from "../YoutubeVideo"


const RecipeItem = () => {
    const instructions = [""]
    const ingredients = [""]
    const youtubeUrl = ""
    return (
        <div>
            <h1 className="font-semibold text-4xl">Nome da Receita</h1>
            <img
                className="rounded-md w-full h-2/3"
                src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" />
            <div className="flex gap-3 mt-2">
                <div className="flex gap-3 items-center">
                    <span className="font-semibold text-lg">Categoria:</span>
                    <span>Vegetariana</span>
                </div>
                |
                <div className="flex gap-3 items-center">
                    <span className="font-semibold text-lg">Área:</span>
                    <span>Italiana</span>
                </div>
            </div>
            <hr />
            <div className="mt-2 flex flex-col gap-3">
                <IngredientList ingredients={ingredients}/>
                <InstructionsList instructions={instructions}/>
                <YoutubeVideo videoUrl={youtubeUrl} />
            </div>
        </div>
    )
}
export default RecipeItem
