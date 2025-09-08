import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
// import EcoCard from "../components/product-card";
import ProductList from "../components/product-list";
import RecomendationList from "../components/recomendation-list";




function HomePage() {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex min-h-screen flex-col items-center px-[15%] gap-20 py-10">

                {/* Banner: REVISI LUIS */}
                <div className="flex flex-col items-center justify-center bg-gray-100 p-8 rounded-lg shadow-md">
                    <div className="my-10 mx-100 text-center">
                        <h1 className="text-2xl font-bold text-gray-800">Belanja Sambil Melestarikan Bumi 🌍🌳</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    </div>
                </div>

                {/* Recomendation:  */}
                <div className="flex w-full flex-col">
                    <div className="flex items-center justify-between mb-4 w-full">
                        <h2 className="text-md font-bold text-gray-800">
                            ⭐ Barang Eco-friendly Favorit
                        </h2>
                        <Button variant="link" className="text-sm font-medium hover:underline">
                            Lihat Semua <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                    </div>

                    {/* Barang Recomended */}
                    <RecomendationList />

                </div>

                {/* Product Grid */}
                <div className="flex w-full flex-col">
                    <div className="flex items-center justify-between mb-4 w-full">
                        <h2 className="text-md font-bold text-gray-800">
                            Rekomendasi Untukmu
                        </h2>
                        <Button variant="link" className="text-sm font-medium hover:underline">
                            Lihat Semua <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                    </div>

                    {/* ProductList from component */}
                    <ProductList />
                </div>
            </main>

            {/* footer */}
            <Footer />

        </>
    );
}

export default HomePage;
