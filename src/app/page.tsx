import Navbar from "~/components/Navbar"
import { lobster } from "../fonts"

export default function Home() {
    return (
        <div>
            <Navbar/>
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
