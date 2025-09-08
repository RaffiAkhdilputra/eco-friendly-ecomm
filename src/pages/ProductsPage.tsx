import Navbar from "../components/navbar"
import Footer from "../components/footer"

import ProductList from "../components/product-list"

function ProductsPage() {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex min-h-screen flex-col items-center px-[15%] gap-20 py-10 w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Semua Produk Eco-friendly</h1>
                <ProductList />
            </main>

            {/* footer */}
            <Footer />

        </>
    )
}

export default ProductsPage