"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import type React from "react";

// Dummy data for stores
const initialStores = [
  {
    id: 1,
    name: "Fashion Store",
    url: "fashion-store.myshopify.com",
    type: "Clothing",
    stats: { orders: 156, revenue: "$12,354" },
  },
  {
    id: 2,
    name: "Tech Shop",
    url: "tech-shop.myshopify.com",
    type: "Electronics",
    stats: { orders: 89, revenue: "$23,456" },
  },
];

export default function Home() {
  const [stores, setStores] = useState(initialStores);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    url: "",
    apiKey: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate and process the API key here
    const storeName = formData.url.split(".")[0];
    const newStore = {
      id: stores.length + 1,
      name: storeName.charAt(0).toUpperCase() + storeName.slice(1),
      url: formData.url,
      type: "New Store",
      stats: { orders: 0, revenue: "$0" },
    };
    setStores([...stores, newStore]);
    setFormData({ url: "", apiKey: "" });
    setIsOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Your Stores</h1>
          <p className="text-gray-600">Manage your Shopify stores</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-500 hover:bg-purple-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Store
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a new Shopify store</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="url">Store URL</Label>
                <Input
                  id="url"
                  placeholder="your-store.myshopify.com"
                  value={formData.url}
                  onChange={(e) =>
                    setFormData({ ...formData, url: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key</Label>
                <Input
                  id="apiKey"
                  type="password"
                  placeholder="Enter your API key"
                  value={formData.apiKey}
                  onChange={(e) =>
                    setFormData({ ...formData, apiKey: e.target.value })
                  }
                  required
                />
              </div>
              <Link
                href="#"
                className="text-sm text-purple-500 hover:text-purple-600 inline-block mt-2"
              >
                How do I get these credentials?
              </Link>
              <div className="flex justify-end mt-6">
                <Button
                  type="submit"
                  className="bg-purple-500 hover:bg-purple-600"
                >
                  Add Store
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="divide-y divide-gray-100">
          {stores.map((store) => (
            <Link
              key={store.id}
              href={`/store/${store.id}`}
              className="flex items-center justify-between p-4 group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <span className="text-xl">🏪</span>
                </div>
                <div>
                  <h3 className="font-medium group-hover:text-purple-500">
                    {store.name}
                  </h3>
                  <p className="text-sm text-gray-500">{store.url}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500" />
            </Link>
          ))}
          {stores.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No stores added yet. Click &quotAdd Store&quot to get started.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
