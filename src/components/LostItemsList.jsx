import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getLostItems } from '../utils/database';

const LostItemsList = () => {
  const lostItems = getLostItems();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lost Items</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {lostItems.map((item) => (
            <li key={item.id} className="mb-4">
              <div className={`p-2 rounded-md bg-${item.color}-100 border border-${item.color}-300`}>
                <h3 className="font-semibold">{item.name}</h3>
                <p>Location: {item.location}</p>
                <p>Date: {item.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default LostItemsList;
