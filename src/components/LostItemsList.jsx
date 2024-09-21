import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LostItemsList = () => {
  // This is mock data. In a real app, you'd fetch this from an API.
  const lostItems = [
    { id: 1, name: 'Blue Umbrella', location: 'Central Park', date: '2023-03-15' },
    { id: 2, name: 'iPhone 12', location: 'Main Street Cafe', date: '2023-03-14' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lost Items</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {lostItems.map((item) => (
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

export default LostItemsList;