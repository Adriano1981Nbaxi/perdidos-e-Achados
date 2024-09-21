import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FoundItemsList = () => {
  // This is mock data. In a real app, you'd fetch this from an API.
  const foundItems = [
    { id: 1, name: 'Red Wallet', location: 'City Library', date: '2023-03-16' },
    { id: 2, name: 'House Keys', location: 'Downtown Bus Stop', date: '2023-03-15' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Found Items</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {foundItems.map((item) => (
            <li key={item.id} className="mb-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p>Location: {item.location}</p>
              <p>Date: {item.date}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FoundItemsList;