"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Leaf } from "lucide-react"
import PlantCard from "@/components/PlantCard"

const plants = [
  { id: 1, name: "Tomato", image: "🍅" },
  { id: 2, name: "Carrot", image: "🥕" },
  { id: 3, name: "Lettuce", image: "🥬" },
  { id: 4, name: "Potato", image: "🥔" },
  { id: 5, name: "Cucumber", image: "🥒" },
  { id: 6, name: "Pepper", image: "🫑" },
]

export default function PlantsPage() {
  const [selectedPlants, setSelectedPlants] = useState<number[]>([])

  const togglePlantSelection = (id: number) => {
    setSelectedPlants((prev) => (prev.includes(id) ? prev.filter((plantId) => plantId !== id) : [...prev, id]))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose Your Plants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            isSelected={selectedPlants.includes(plant.id)}
            onSelect={() => togglePlantSelection(plant.id)}
          />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/dashboard">
          <Button className="bg-primary hover:bg-primary/90">
            <Leaf className="mr-2 h-4 w-4" /> Start Growing ({selectedPlants.length})
          </Button>
        </Link>
      </div>
    </div>
  )
}

