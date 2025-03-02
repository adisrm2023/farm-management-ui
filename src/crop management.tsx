"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Sprout, AlertTriangle, Home, Search, Settings } from "lucide-react"
import Image from "next/image"

export default function CropManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 space-y-6">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search for crops or diseases"
            className="flex-1"
            startDecorator={<Search className="h-4 w-4 text-muted-foreground" />}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer">
            <CardContent className="p-4 flex items-center space-x-2">
              <Sprout className="h-5 w-5 text-primary" />
              <span className="font-medium">Crop Growth Predictor</span>
            </CardContent>
          </Card>
          <Card className="bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer">
            <CardContent className="p-4 flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span className="font-medium">Disease Detection</span>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Crops</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            {[
              { name: "High Yield", desc: "Optimal growth conditions" },
              { name: "Vitamin Rich", desc: "Seasonal data" },
              { name: "Tomatoes", desc: "Perfect growing season" },
              { name: "Apples", desc: "High market demand" },
            ].map((crop) => (
              <div key={crop.name} className="p-4 bg-secondary/50 rounded-lg space-y-2">
                <h3 className="font-semibold">{crop.name}</h3>
                <p className="text-sm text-muted-foreground">{crop.desc}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Latest Articles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Effective Pest Control</h4>
              <p className="text-sm text-muted-foreground">Tips on keeping away pests from your crops...</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Nutrient Management</h4>
              <p className="text-sm text-muted-foreground">Ensure your crops get the right nutrients...</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Crop Insights</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-2xl font-bold">8 tons</p>
              <p className="text-sm text-muted-foreground">Yield</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600">Low</p>
              <p className="text-sm text-muted-foreground">Disease Risk</p>
            </div>
          </CardContent>
        </Card>

        <div className="fixed bottom-0 left-0 right-0 border-t bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-around py-2">
              <Button variant="ghost" className="flex-col items-center">
                <Home className="h-5 w-5" />
                <span className="text-xs">Home</span>
              </Button>
              <Button variant="ghost" className="flex-col items-center">
                <Search className="h-5 w-5" />
                <span className="text-xs">Search</span>
              </Button>
              <Button variant="ghost" className="flex-col items-center">
                <Settings className="h-5 w-5" />
                <span className="text-xs">Settings</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

