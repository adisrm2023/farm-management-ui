"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface Plant {
  id: number
  name: string
  image: string
}

interface PlantCardProps {
  plant: Plant
  isSelected: boolean
  onSelect: () => void
}

export default function PlantCard({ plant, isSelected, onSelect }: PlantCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className={`cursor-pointer ${isSelected ? "border-primary" : ""}`} onClick={onSelect}>
        <CardHeader>
          <CardTitle className="text-center">{plant.name}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-6xl mb-4">{plant.image}</div>
          <Button variant={isSelected ? "secondary" : "outline"}>{isSelected ? "Selected" : "Select"}</Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

