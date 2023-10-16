import RecipeItem from "~/components/RecipeItem"
import { lobster } from "./fonts"

export default function Home() {
    return (
        <div>
            <header>
                <div className="py-3 flex items-center justify-around">
                    <span className={`${lobster.className} text-5xl`}>
                        <a href="/">
                            Tastebite
                        </a>
                    </span>
                    <nav className="flex gap-6">
                        <a className="hover:underline" href="/categorias">Categorias</a>
                        <a className="hover:underline" href="/sobre">Sobre</a>
                    </nav>
                    <div>
                        <input
                            type="text"
                            placeholder="Pesquisar receitas"
                            className="border border-gray-300 rounded-full py-2 px-6 w-64 focus:outline-none focus:border-blue-700" />
                    </div>
                </div>
            </header>
            <main className="px-56">
                <div className="mt-12">
                    <h1 className="text-4xl font-semibold">Receita do Dia</h1>
                    <div className="flex">
                        <img className="w-2/3 rounded-md"
                            src="https://oquetempracomer.com.br/wp-content/uploads/elementor/thumbs/Design-sem-nome-58-q1fgbaa3vnhvilmhnsouv4jeu5dyli3d74uguij3x8.jpg" />
                        <div className="rounded-md bg-[#e3f1ff] p-3">
                            <h2 className="font-semibold text-2xl">Macarrão com Molho de Tomate</h2>
                            <span className="font-semibold">Intruções:</span>
                            <p>Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                            <span className="font-semibold">Ingredientes:</span>
                            <p>five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}