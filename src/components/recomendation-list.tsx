import { RecomendationCard } from "./recomendation-card";
import type { EcoProduct } from "./recomendation-card";


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
    }
]

export default function RecomendationList() {
    return (
        <div className="w-full">
            {/* Cards */}
            <div className="flex flex-row gap-4">
                {products.map((product, i) => (
                    <RecomendationCard key={i} product={product} />
                ))}
            </div>

        </div >
    )
}
