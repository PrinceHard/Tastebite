import Link from "next/link"
import { lobster } from "../../app/fonts"

const Navbar = () => {
    return (
        <header>
            <div className="py-3 flex items-center justify-around">
                <span className={`${lobster.className} text-5xl`}>
                    <Link href={'/'}> 
                        Tastebite
                    </Link>
                </span>
                <nav className="flex gap-6">
                    <Link className="hover:underline" href={"/categorias"}>Categorias</Link>
                    <Link className="hover:underline" href={"/sobre"}>Sobre</Link>
                </nav>
                <div>
                    <input
                        type="text"
                        placeholder="Pesquisar receitas"
                        className="border border-gray-300 rounded-full py-2 px-6 w-64 focus:outline-none focus:border-blue-700" />
                </div>
            </div>
        </header>
    )
}
export default Navbar
