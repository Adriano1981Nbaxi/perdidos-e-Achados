import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';
import LostItemsList from '../components/LostItemsList';
import FoundItemsList from '../components/FoundItemsList';
import { searchItems } from '../utils/database';

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = searchItems(searchQuery);
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Lost and Found</h1>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-4 mb-8">
          <Button onClick={() => navigate('/report-lost')}>Report Lost Item</Button>
          <Button onClick={() => navigate('/report-found')}>Report Found Item</Button>
        </div>
        <div className="mb-8 flex">
          <Input 
            type="text" 
            placeholder="Search items..." 
            className="w-full mr-2" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        {searchResults.length > 0 ? (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            <ul>
              {searchResults.map((item) => (
                <li key={item.id} className="mb-4">
                  <div className={`p-2 rounded-md ${item.type === 'lost' ? `bg-${item.color}-100 border border-${item.color}-300` : 'bg-gray-100 border border-gray-300'}`}>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>Location: {item.location}</p>
                    <p>Date: {item.date}</p>
                    <p>Type: {item.type}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LostItemsList />
            <FoundItemsList />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
