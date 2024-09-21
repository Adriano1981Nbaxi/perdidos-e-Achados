import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';
import LostItemsList from '../components/LostItemsList';
import FoundItemsList from '../components/FoundItemsList';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Lost and Found</h1>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-4 mb-8">
          <Button onClick={() => navigate('/report-lost')}>Report Lost Item</Button>
          <Button onClick={() => navigate('/report-found')}>Report Found Item</Button>
        </div>
        <div className="mb-8">
          <Input type="text" placeholder="Search items..." className="w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LostItemsList />
          <FoundItemsList />
        </div>
      </div>
    </div>
  );
};

export default Index;
