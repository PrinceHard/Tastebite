import { lobster } from "../fonts"

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
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Pesquisar receitas"
                            className="border border-gray-300 rounded-full py-2 px-6 w-64 focus:outline-none focus:border-blue-700" />
                            <img src="/search.svg" width={20} height={20} className="absolute right-0 top-0 mx-4 mt-3"/>
                    </div>
                </div>
                <hr/>
            </header>
            <main className="mx-auto w-fit">
                <div className="mt-12">
                    <h1 className="text-4xl font-semibold">Receita do Dia</h1>
                    <div className="flex">
                        <img className="w-full h-[500px] rounded-md"
                            src={"https://www.themealdb.com/images/media/meals/t3r3ka1560461972.jpg"} />
                        <div className="min-w-fit h-fit rounded-md bg-[#e3f1ff] p-3 flex flex-col justify-between">
                            <h2 className="font-semibold text-2xl">{"Nome da Receita"}</h2>
                            <div className="flex flex-col gap-3 mt-2">
                                <div className="flex gap-3 items-center">
                                    <span className="font-semibold text-lg">Categoria:</span>
                                    <span>Vegetariana</span>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <span className="font-semibold text-lg">Área:</span>
                                    <span>Italiana</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
