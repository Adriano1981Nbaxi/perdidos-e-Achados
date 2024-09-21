import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFoundItems } from '../utils/database';

const FoundItemsList = () => {
  const foundItems = getFoundItems();

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
