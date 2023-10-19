import { lobster } from "~/fonts"


const Navbar = () => {
    return (
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
    )
}
export default Navbar