"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Plus, Info } from "lucide-react"
import PlantDetails from "@/components/PlantDetails"

const plants = [
  {
    id: 1,
    name: "Tomato",
    image: "🍅",
    soil: "Well-draining, slightly acidic",
    climate: "Warm",
    waterNeeds: "Regular",
  },
  { id: 2, name: "Carrot", image: "🥕", soil: "Sandy, loose", climate: "Cool to moderate", waterNeeds: "Moderate" },
  { id: 3, name: "Lettuce", image: "🥬", soil: "Rich, moist", climate: "Cool", waterNeeds: "Regular" },
  {
    id: 4,
    name: "Potato",
    image: "🥔",
    soil: "Loose, well-draining",
    climate: "Cool to moderate",
    waterNeeds: "Moderate",
  },
  { id: 5, name: "Cucumber", image: "🥒", soil: "Rich, well-draining", climate: "Warm", waterNeeds: "High" },
  { id: 6, name: "Pepper", image: "🫑", soil: "Well-draining, fertile", climate: "Warm", waterNeeds: "Moderate" },
]

export default function DashboardPage() {
  const [selectedPlants, setSelectedPlants] = useState(plants.slice(0, 3)) // Start with 3 plants for demo
  const [activePlant, setActivePlant] = useState<(typeof plants)[0] | null>(null)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Garden</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {selectedPlants.map((plant) => (
          <Card
            key={plant.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setActivePlant(plant)}
          >
            <CardHeader>
              <CardTitle className="text-center">{plant.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl mb-4">{plant.image}</div>
              <Button variant="outline" onClick={() => setActivePlant(plant)}>
                <Info className="mr-2 h-4 w-4" /> View Details
              </Button>
            </CardContent>
          </Card>
        ))}
        <Card className="flex items-center justify-center">
          <Link href="/plants">
            <Button variant="ghost" className="text-4xl">
              <Plus className="h-12 w-12" />
            </Button>
          </Link>
        </Card>
      </div>
      {activePlant && <PlantDetails plant={activePlant} onClose={() => setActivePlant(null)} />}
    </div>
  )
}

