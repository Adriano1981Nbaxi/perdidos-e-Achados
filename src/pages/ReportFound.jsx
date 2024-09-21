import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from 'react-router-dom';

const ReportFound = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Found item reported');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Report Found Item</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">Item Name</label>
              <Input type="text" id="itemName" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Found Location</label>
              <Input type="text" id="location" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date Found</label>
              <Input type="date" id="date" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <Textarea id="description" rows={3} className="mt-1" />
            </div>
            <Button type="submit" className="w-full">Report Found Item</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportFound;