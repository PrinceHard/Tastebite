
const InstructionsList = ({instructions}: {instructions: string[]}) => {
    return (
        <>
            <span className="font-semibold text-lg">Instructions:</span>
            <ul className="list-disc list-inside">
                {instructions.map((step, index) => (
                    <li key={index} className="mb-2">
                        {step}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default InstructionsList
