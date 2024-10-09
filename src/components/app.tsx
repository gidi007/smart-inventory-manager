"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// InventoryOverview component
function InventoryOverview({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Products</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{data.totalProducts}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Low Stock Items</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{data.lowStockItems}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Out of Stock Items</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{data.outOfStockItems}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Inventory Value</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">${data.totalValue.toLocaleString()}</p>
        </CardContent>
      </Card>
    </div>
  )
}

// Placeholder components for other sections
const ProductList = () => <div>Product List Component</div>
const SalesTracker = () => <div>Sales Tracker Component</div>
const RestockingAlerts = () => <div>Restocking Alerts Component</div>
const DemandPrediction = () => <div>Demand Prediction Component</div>

export function AppComponent() {
  const [inventoryData, setInventoryData] = useState({
    totalProducts: 150,
    lowStockItems: 12,
    outOfStockItems: 3,
    totalValue: 25000
  })

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Smart Inventory Manager</h1>
      
      <InventoryOverview data={inventoryData} />

      <Tabs defaultValue="products" className="mt-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="restocking">Restocking</TabsTrigger>
          <TabsTrigger value="prediction">Demand Prediction</TabsTrigger>
        </TabsList>
        <TabsContent value="products">
          <ProductList />
        </TabsContent>
        <TabsContent value="sales">
          <SalesTracker />
        </TabsContent>
        <TabsContent value="restocking">
          <RestockingAlerts />
        </TabsContent>
        <TabsContent value="prediction">
          <DemandPrediction />
        </TabsContent>
      </Tabs>
    </div>
  )
}