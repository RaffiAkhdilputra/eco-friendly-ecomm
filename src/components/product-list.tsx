import { ProductCard } from "./product-card"
import type { EcoProduct } from "./product-card"
import { Button } from "./ui/button"
import { Recycle, TreeDeciduous, Leaf, BatteryMedium } from "lucide-react"


const products: EcoProduct[] = [
    {
        title: "Kotak Makan Stainless",
        price: 110000,
        imageUrl:
            "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
        ecoScore: 87,
        tags: [
            { label: "Bebas Plastik", type: "blue" },
            { label: "Daur Ulang/Organik", type: "green" },
        ],
    },
    {
        title: "Panel Surya Portable",
        price: 250000,
        imageUrl:
            "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
        ecoScore: 95,
        tags: [{ label: "Energi Terbarukan", type: "green" }],
    },
    {
        title: "Sepeda Lipat Eco",
        price: 1800000,
        imageUrl:
            "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
        ecoScore: 91,
        tags: [{ label: "Karbon Rendah", type: "blue" }],
    },
    {
        title: "Sabun Organik Herbal",
        price: 30000,
        imageUrl:
            "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
        ecoScore: 78,
        tags: [{ label: "Daur Ulang/Organik", type: "green" }],
    },
    {
        title: "Botol Minum Aluminium",
        price: 95000,
        imageUrl:
            "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
        ecoScore: 89,
        tags: [
            { label: "Bebas Plastik", type: "blue" },
            { label: "Karbon Rendah", type: "green" },
        ],
    },
    {
        title: "Lampu LED Hemat Energi",
        price: 60000,
        imageUrl:
            "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
        ecoScore: 85,
        tags: [
            { label: "Energi Terbarukan", type: "green" },
            { label: "Karbon Rendah", type: "blue" },
        ],
    },
]


export default function ProductList() {
    return (
        <div className="w-full">

            {/* Category */}
            <div className="flex gap-3">
                <p className="text-sm p-6 mb-6">
                    Pilih kategori:
                </p>
                <div className="flex items-center gap-3 mb-6">

                    {/* efek hover masih default ditambahin biar kece */}

                    <Button variant="outline" size="sm" className="py-6 px-12 border-2 border-[#386B0F] text-[#386B0F]"><Recycle className="h-4 w-4" />Daur Ulang/Organik</Button>
                    <Button variant="outline" size="sm" className="py-6 px-12 border-2 border-[#155C9E] text-[#155C9E]"><Leaf className="h-4 w-4" />Bebas Plastik</Button>
                    <Button variant="outline" size="sm" className="py-6 px-12 border-2 border-[#2DC029] text-[#2DC029]"><TreeDeciduous className="h-4 w-4" />Karbon Rendah</Button>
                    <Button variant="outline" size="sm" className="py-6 px-12 border-2 border-[#ABE670] text-[#ABE670]"><BatteryMedium className="h-4 w-4" />Energi Terbarukan</Button>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product, i) => (
                    <ProductCard key={i} product={product} />
                ))}
            </div>

        </div >
    )
}
