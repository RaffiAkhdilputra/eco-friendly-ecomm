"use client"

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ShoppingCart } from "lucide-react"

export default function Navbar() {
    return (
        <header className="w-full border-b bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 gap-6 py-5">
                {/* Left: Logo */}
                <div className="text-xl font-bold text-black">Ecovera.</div>

                {/* Center: Full-width Search Bar */}
                <div className="flex flex-1 items-center">
                    <div className="flex w-full items-center rounded-sm border px-3 py-2">
                        <Search className="h-5 w-5 text-gray-400" />
                        <Input
                            type="text"
                            placeholder="Cari barang eco-friendly di Ecovera"
                            className="flex-1 border-none focus-visible:ring-0 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Right: Cart + Buttons */}
                <div className="flex items-center gap-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <button className="p-2">
                                        <ShoppingCart className="h-5 w-5 text-gray-600" />
                                    </button>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="h-6 w-px bg-gray-300" />
                    <Button variant="outline">Masuk</Button>
                    <Button className="bg-black text-white hover:bg-black/90">
                        Daftar
                    </Button>
                </div>
            </div>
        </header>
    )
}
