
const IngredientList = ({ingredients}: {ingredients: string[]}) => {
    return (
        <>
            <span className="font-semibold text-lg">Ingredients:</span>
            <ul className="list-disc list-inside">
                {ingredients.map((step, index) => (
                    <li key={index} className="mb-2">
                        {step}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default IngredientList
