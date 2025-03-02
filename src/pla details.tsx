"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { X } from "lucide-react"

interface Plant {
  id: number
  name: string
  image: string
  soil: string
  climate: string
  waterNeeds: string
}

interface PlantDetailsProps {
  plant: Plant
  onClose: () => void
}

export default function PlantDetails({ plant, onClose }: PlantDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <Card className="w-full max-w-md">
        <CardHeader className="relative">
          <Button variant="ghost" className="absolute right-2 top-2" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-center">{plant.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <span className="text-6xl">{plant.image}</span>
          </div>
          <div className="space-y-2">
            <p>
              <strong>Soil:</strong> {plant.soil}
            </p>
            <p>
              <strong>Climate:</strong> {plant.climate}
            </p>
            <p>
              <strong>Water Needs:</strong> {plant.waterNeeds}
            </p>
          </div>
          <div className="mt-6">
            <PlantAnimation />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function PlantAnimation() {
  return (
    <div className="relative h-40">
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path d="M50 90 C50 90 20 60 20 40 C20 20 40 10 50 10 C60 10 80 20 80 40 C80 60 50 90 50 90" fill="green" />
          <circle cx="50" cy="30" r="10" fill="yellow" />
        </svg>
      </motion.div>
    </div>
  )
}

