
const RecipeItem = () => {
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
            <hr/>
            <div className="mt-2 flex flex-col gap-3">
                <span className="font-semibold text-lg">Ingredientes:</span>
                <ul className="list-item">
                    <li>1 xícara de farinha de trigo</li>
                </ul>
                <span className="font-semibold text-lg">Instruções:</span>
                <ul>
                    <li>1 xícara de farinha de trigo</li>
                </ul>
                <span className="font-semibold text-lg">Tutorial:</span>
                <video src="https://www.youtube.com/watch?v=1IszT_guI08" />
            </div>
        </div>
    )
}
export default RecipeItem
