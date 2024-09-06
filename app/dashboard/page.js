"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductList from "@/components/productList";


const Dashboard = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "NeuralNova GPT", apiKey: "NN7x**********9Q2pL3", health: "good" },
    { id: 2, name: "QuantumMind AI", apiKey: "QM5r**********8wK1fY", health: "warning" },
    { id: 3, name: "SynthesizerX", apiKey: "SX3m**********9yH4Z", health: "critical" },
    { id: 4, name: "CogniSphere Agent", apiKey: "CA2j**********1nP8R", health: "good" },
    { id: 5, name: "EchoLogic LLM", apiKey: "EL9t**********6vG5K", health: "warning" },
    { id: 6, name: "InferenceEngine Pro", apiKey: "IE1k**********3cR7M", health: "good" },
    { id: 7, name: "NeuroByte Assistant", apiKey: "NA6h**********9sL0W", health: "critical" },
  ]);

  const generateRandomProduct = () => {
    const adjectives = ["Smart", "Intelligent", "Advanced", "Cognitive", "Neural", "Quantum", "Adaptive"];
    const nouns = ["Mind", "Brain", "Logic", "Thinker", "Genius", "Intellect", "Cortex"];
    const types = ["AI", "LLM", "Assistant", "Agent", "Engine", "Network"];
    
    const name = `${adjectives[Math.floor(Math.random() * adjectives.length)]}${nouns[Math.floor(Math.random() * nouns.length)]} ${types[Math.floor(Math.random() * types.length)]}`;
    const apiKey = `${name.substring(0, 2).toUpperCase()}${Math.random().toString(36).substring(2, 6)}**********${Math.random().toString(36).substring(2, 6)}`;
    const health = ["good", "warning", "critical"][Math.floor(Math.random() * 3)];
    
    return {
      id: products.length + 1,
      name,
      apiKey,
      health
    };
  };

  const handleAddProduct = () => {
    const newProduct = generateRandomProduct();
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-600 mb-6">Add and manage your AI products for safety, health, and security evaluation.</p>
      
      <div className="flex space-x-4 mb-8">
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
        <Button onClick={handleAddProduct}>Add New Product</Button>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Your AI Products</h2>
        <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
      </div>
    </div>
  );
};

export default Dashboard;