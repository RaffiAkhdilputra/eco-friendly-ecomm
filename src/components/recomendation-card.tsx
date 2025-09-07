import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Leaf, Recycle, ChevronRight } from "lucide-react"

export type EcoProduct = {
    title: string
    price: number
    imageUrl: string
    ecoScore?: number
    tags?: Array<{ label: string; type: "blue" | "green" }>
}

// Helper
function rupiah(n: number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(n)
}

// Tag component
function Pill({
    icon: Icon,
    children,
    variant = "default",
}: {
    icon?: any
    children: React.ReactNode
    variant?: "default" | "outline"
}) {
    const base =
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
    const styles =
        variant === "outline"
            ? "border border-blue-600 text-blue-700 bg-blue-50"
            : "bg-green-100 text-green-700 border border-green-600"
    return (
        <span className={`${base} ${styles}`}>
            {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden /> : null}
            {children}
        </span>
    )
}

// Main Card
export function RecomendationCard({ product }: { product: EcoProduct }) {
    const { title, price, imageUrl, ecoScore = 0 } = product
    return (
        // hover:w-[105%] hover:h-[105%] comment request louis buat hover card
        <Card className="w-[100%] gap-2 p-0 rounded-md border shadow-sm hover:shadow-md transition-all bg-white">
            <CardHeader className="p-0">
                <div className="relative rounded-md overflow-hidden rounded-b-none">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="max-h-[250px] w-full object-cover"
                    />
                    {/* Eco score */}
                    <div className="absolute left-3 top-3">
                        <div className="flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-semibold text-green-700 border border-green-200 shadow-sm">
                            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                            <span>{ecoScore}%</span>
                        </div>
                    </div>
                </div>
                <CardTitle className="sr-only">{title}</CardTitle>
                <CardDescription className="sr-only">
                    Eco-friendly product card
                </CardDescription>
            </CardHeader>

            <div className="flex justify-between">
                <CardContent className="px-4 pb-2">

                    {/* Title & Price */}
                    <div className="space-y-1">
                        <h3 className="text-[15px] font-semibold tracking-tight text-gray-900">
                            {title}
                        </h3>
                        <p className="text-sm font-bold text-blue-700">{rupiah(price)}</p>
                    </div>
                </CardContent>

                <CardFooter className="px-4">
                    <Button variant="secondary" className="w-full rounded-xl gap-2">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </CardFooter>
            </div>
        </Card>
    )
}


