import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-center">ทะเบียนเด่น</h1>
        <small>Cartag-fast-track</small>
      </div>

      <div className="mb-8">
        <Input
          type="search"
          placeholder="ค้นหาทะเบียนรถ..."
          className="w-full"
        />
        <div className="grid grid-cols-3 gap-2 mt-5">
          <button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-[10px] py-2">
            ความรัก
          </button>
          <button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-[10px] py-2">
            วันเกิด
          </button>
          <button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-[10px] py-2">
            ประจำปี
          </button>
          <button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-[10px] py-2">
            ดวงชะตา
          </button>
          <button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-[10px] py-2">
            ชื่อย่อ
          </button>
          <button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-[10px] py-2">
            ผลรวม
          </button>
          <button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-[10px] py-2">
            ประมูล
          </button>
          <button className="col-span-2 border border-1 border-blue-300  text-blue-300 rounded-[10px] py-2">
            อยากได้หมายเลข ..
          </button>
        </div>
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
              <p>รายการทะเบียนใหม่จะแสดงที่นี่</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hot">
          <Card>
            <CardHeader>
              <CardTitle>ยอดนิยม</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                <div className="rounded-[20px] border border-1 border-blue-400 p-3">
                  <img
                    src="https://file.chobrod.com/2019/05/02/iO9DezGG/-d843.jpg"
                    alt=""
                  />
                  <p className="text-[0.6rem] mb-1">หมายเลข</p>
                  <p className="text-[1.2rem] mb-2 text-bold text-start">
                    ฎฐ 456770
                  </p>
                  <div className="grid grid-cols-1 mb-3">
                    {/* <p className="text-[0.6rem] mb-1">ผลรวม</p>
                    <p className="text-[0.8rem] text-bold text-start">89</p> */}
                    {/* <p className="text-[0.6rem] mb-1">ประเภท</p>
                    <p className="text-[0.8rem] text-bold text-start">ประมูล</p> */}
                    <p className="text-[0.6rem] mb-1">ราคา</p>
                    <p className="text-[1rem] text-bold text-start">450,000</p>
                    <p className="text-[0.6rem] mb-1">สถานะ</p>
                    <div className="text-[0.8rem] text-bold text-start bg-green-300 w-fit px-3 rounded-[20px] my-2">
                      ว่าง
                    </div>
                    {/* <p className="text-[0.6rem] mb-1">จำนวนเข้าชม</p>
                    <p className="text-[0.8rem] text-bold text-start">3,000</p> */}
                  </div>
                  <button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-[10px] p-2 w-full text-[0.8rem]">
                    อ่านรายละเอียดเพิ่ม
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sold">
          <Card>
            <CardHeader>
              <CardTitle>ขายแล้ว</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                <div className="relative rounded-[20px] border border-1 border-gray-400 p-3 overflow-hidden">
                  <img
                    src="https://file.chobrod.com/2019/05/02/iO9DezGG/-d843.jpg"
                    alt=""
                  />
                  <p className="text-[0.6rem] mb-1 text-gray-500">หมายเลข</p>
                  <p className="text-[1.2rem] mb-2 text-bold text-start text-gray-700">
                    ฎฐ 456770
                  </p>
                  <div className="grid grid-cols-1 mb-3">
                    <p className="text-[0.6rem] mb-1 text-gray-500">ราคา</p>
                    <p className="text-[1rem] text-bold text-start text-gray-700">
                      450,000
                    </p>
                    <p className="text-[0.6rem] mb-1 text-gray-500">สถานะ</p>
                    <div className="text-[0.8rem] text-bold text-start bg-gray-300 w-fit px-3 rounded-[20px] my-2">
                      ขายแล้ว
                    </div>
                  </div>
                  {/* <button className="bg-gradient-to-r from-gray-300 to-gray-500 text-white rounded-[10px] p-2 w-full text-[0.8rem]">
                    อ่านรายละเอียดเพิ่ม
                  </button> */}
                  <div className="absolute top-0 left-0 bg-red-500 text-white text-[1rem] font-bold px-2 py-1 rounded-br-[10px]">
                    Sold Out
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="suggest">
          <Card>
            <CardHeader>
              <CardTitle>แนะนำล่าสุด</CardTitle>
            </CardHeader>
            <CardContent>
              <p>รายการแนะนำจะแสดงที่นี่</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="review">
          <Card>
            <CardHeader>
              <CardTitle>รีวิว</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                <div className="rounded-[20px] border border-1 border-blue-400 p-4 max-w-md mx-auto">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <img
                        src="https://www.shutterstock.com/image-photo/happy-mid-aged-business-woman-600nw-2353012835.jpg"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <p className="font-bold">John Doe</p>
                        <p className="text-sm text-gray-500">March 10, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★★★★☆</span>
                    <p className="ml-2 text-sm text-gray-500">(4/5)</p>
                  </div>
                  <p className="text-gray-700">
                    ใช้งานง่าย สะดวก และรวดเร็ว แอดมินไว
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {/* เพิ่ม TabsContent สำหรับแท็บอื่นๆ ตามต้องการ */}
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="mt-2">
          <div className="mr-2 mb-2">
            <p className="text-nowrap">เรียงตาม :</p>
          </div>
          <div className="overflow-x-auto whitespace-nowrap">
            <button className="shadow-sm border border-1  mr-2 p-2 rounded-[10px]">
              แพงสุด - ถูกสุด
            </button>
            <button className="shadow-sm border border-1  mr-2 p-2 rounded-[10px]">
              ถูกสุด - แพงสุด
            </button>
            <button className="shadow-sm border border-1  mr-2 p-2 rounded-[10px]">
              ประมูล
            </button>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>ป้ายทะเบียนทั้งหมด</CardTitle>
          </CardHeader>
          <div className="grid grid-cols-2 gap-3 p-2">
            <div className="rounded-[10px] border border-1 border-blue-400 p-2">
              <div className="flex gap-2">
                <small className="bg-slate-300 p-1 rounded-[10px] text-[0.5rem]">
                  #มาใหม่
                </small>
                <small className="bg-pink-300 p-1 rounded-[10px] text-[0.5rem]">
                  #ความรัก
                </small>
                <small className="bg-orange-300 p-1 rounded-[10px] text-[0.5rem]">
                  #รวย
                </small>
              </div>
              <img
                src="https://file.chobrod.com/2019/05/02/iO9DezGG/-d843.jpg"
                alt=""
              />
              <p className="text-[0.6rem] mb-1">หมายเลข</p>
              <p className="text-[1.2rem] mb-2 text-bold text-start">
                ฎฐ 456770
              </p>
              <div className="grid grid-cols-1 mb-1">
                <p className="text-[0.6rem] mb-1">ราคา</p>
                <p className="text-[1rem] text-bold text-start">450,000</p>
              </div>
            </div>
            <div className="rounded-[10px] border border-1 border-blue-400 p-2">
              <div className="flex gap-2">
                <small className="bg-slate-300 p-1 rounded-[10px] text-[0.5rem]">
                  #มาใหม่
                </small>
                <small className="bg-pink-300 p-1 rounded-[10px] text-[0.5rem]">
                  #ความรัก
                </small>
                <small className="bg-orange-300 p-1 rounded-[10px] text-[0.5rem]">
                  #รวย
                </small>
              </div>
              <img
                src="https://file.chobrod.com/2019/05/02/iO9DezGG/-d843.jpg"
                alt=""
              />
              <p className="text-[0.6rem] mb-1">หมายเลข</p>
              <p className="text-[1.2rem] mb-2 text-bold text-start">
                ฎฐ 456770
              </p>
              <div className="grid grid-cols-1 mb-1">
                <p className="text-[0.6rem] mb-1">ราคา</p>
                <p className="text-[1rem] text-bold text-start">450,000</p>
              </div>
            </div>
            <div className="rounded-[10px] border border-1 border-blue-400 p-2">
              <div className="flex gap-2">
                <small className="bg-slate-300 p-1 rounded-[10px] text-[0.5rem]">
                  #มาใหม่
                </small>
                <small className="bg-pink-300 p-1 rounded-[10px] text-[0.5rem]">
                  #ความรัก
                </small>
                <small className="bg-orange-300 p-1 rounded-[10px] text-[0.5rem]">
                  #รวย
                </small>
              </div>
              <img
                src="https://file.chobrod.com/2019/05/02/iO9DezGG/-d843.jpg"
                alt=""
              />
              <p className="text-[0.6rem] mb-1">หมายเลข</p>
              <p className="text-[1.2rem] mb-2 text-bold text-start">
                ฎฐ 456770
              </p>
              <div className="grid grid-cols-1 mb-1">
                <p className="text-[0.6rem] mb-1">ราคา</p>
                <p className="text-[1rem] text-bold text-start">450,000</p>
              </div>
            </div>
            <div className="rounded-[10px] border border-1 border-blue-400 p-2">
              <div className="flex gap-2">
                <small className="bg-slate-300 p-1 rounded-[10px] text-[0.5rem]">
                  #มาใหม่
                </small>
                <small className="bg-pink-300 p-1 rounded-[10px] text-[0.5rem]">
                  #ความรัก
                </small>
                <small className="bg-orange-300 p-1 rounded-[10px] text-[0.5rem]">
                  #รวย
                </small>
              </div>
              <img
                src="https://file.chobrod.com/2019/05/02/iO9DezGG/-d843.jpg"
                alt=""
              />
              <p className="text-[0.6rem] mb-1">หมายเลข</p>
              <p className="text-[1.2rem] mb-2 text-bold text-start">
                ฎฐ 456770
              </p>
              <div className="grid grid-cols-1 mb-1">
                <p className="text-[0.6rem] mb-1">ราคา</p>
                <p className="text-[1rem] text-bold text-start">450,000</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
