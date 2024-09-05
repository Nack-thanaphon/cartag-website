import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">ขายทะเบียนรถยนต์</h1>
      
      <div className="mb-8">
        <Input type="search" placeholder="ค้นหาทะเบียนรถ..." className="w-full" />
      </div>

      <Tabs defaultValue="new" className="mb-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="new">ใหม่ล่าสุด</TabsTrigger>
          <TabsTrigger value="hot">ยอดนิยม</TabsTrigger>
          <TabsTrigger value="suggest">แนะนำ</TabsTrigger>
          <TabsTrigger value="sold">ขายแล้ว</TabsTrigger>
          <TabsTrigger value="review">รีวิว</TabsTrigger>
        </TabsList>
        <TabsContent value="new">
          <Card>
            <CardHeader>
              <CardTitle>ทะเบียนใหม่ล่าสุด</CardTitle>
            </CardHeader>
            <CardContent>
              {/* ตัวอย่างรายการทะเบียนใหม่ */}
              <p>รายการทะเบียนใหม่จะแสดงที่นี่</p>
            </CardContent>
          </Card>
        </TabsContent>
        {/* เพิ่ม TabsContent สำหรับแท็บอื่นๆ ตามต้องการ */}
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>ค้นหาตามราศี</CardTitle>
          </CardHeader>
          <CardContent>
            <Button>ค้นหา</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ค้นหาตามปีเกิด</CardTitle>
          </CardHeader>
          <CardContent>
            <Button>ค้นหา</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ค้นหาตามดวง</CardTitle>
          </CardHeader>
          <CardContent>
            <Button>ค้นหา</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;