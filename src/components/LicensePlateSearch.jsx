import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LicensePlateSearch = () => {
  return (
    <div className="flex space-x-2">
      <Input type="search" placeholder="ค้นหาทะเบียนรถ..." className="flex-grow" />
      <Button type="submit">ค้นหา</Button>
    </div>
  );
};

export default LicensePlateSearch;