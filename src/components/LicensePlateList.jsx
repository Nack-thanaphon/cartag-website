import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LicensePlateList = ({ plates }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {plates.map((plate, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{plate.number}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>ราคา: {plate.price} บาท</p>
            <p>ประเภท: {plate.type}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LicensePlateList;