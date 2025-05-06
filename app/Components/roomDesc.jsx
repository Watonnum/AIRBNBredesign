import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const RoomDesc = () => {
  const descriptionMessage = {
    header: [
      "About this page",
      "เกี่ยวกับที่พัก",
      "บริเวณที่ใช้ได้",
      "สิ่งอื่นที่ควรรู้",
    ],
    body: [
      "4 cottage with bamboo ขนาดห้อง กว้าง 2 .5 เมตร ยาว 4 เมตร ที่นอนคิงไซส์ ม่าน2 ชั้น กันลม สามารถมองเห็นวิวทิวทัศน์ของนาข้าว นาถั่ว แปลงผักของฟาร์ม ชุดโต๊ะส่วนตัว นั่งรับประทานอาหารข้างกระท่อม ห้องน้ำรวม ฝักบัว เครื่องใช้ในห้องน้ำ ผ้าเช็ดตัว ",
      "นั่งชิงช้าเล่น ทดลองปลูกผักเองได้ เก็บผักมาทำอาหาร เดินเที่ยวชมธรรมชาติ ในท้องทุ่งได้โดยทั่ว ",
      "ซื้ออาหารมาทำเองได้ มีอุปกรณ์ให้",
    ],
  };
  return (
    <>
      <div className="flex justify-start items-start w-full pt-8">
        <div className="flex justify-start items-center bg-[#F7F7F7] w-full">
          <p className="text-lg p-2">
            ข้อมูลบางส่วนแสดงเป็นภาษาต้นฉบับ{" "}
            <a href="" className="underline">
              แปล
            </a>
          </p>
        </div>
      </div>
      <div className="pt-8 pb-12 flex flex-col justify-centeritems-start w-full">
        <div className="h-36">
          <p className="text-lg font-bold">{descriptionMessage.header[1]}</p>
          <p className="text-wrap hyphens-none line-clamp-5 text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            cumque nihil nesciunt libero consequatur eveniet possimus
            repudiandae perspiciatis, saepe autem ut sapiente molestias, ducimus
            quas vero! Voluptatibus vitae, est placeat alias a nemo quia
            temporibus ducimus soluta iusto, quaerat iure voluptatum repudiandae
            nobis adipisci quos hic optio blanditiis dolorem veniam?
          </p>
        </div>

        <div className="mt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="hover:cursor-pointer hover:scale-102 duration-200 hover:text-[#FF385C]"
              >
                Showmore...
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white max-w-[780px]">
              <DialogHeader className="p-4 rounded-2xl bg-[#FF385C] flex items-center">
                <DialogTitle className="text-white font-bold">
                  {descriptionMessage.header[0]}
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="hyphens-auto">
                <div className="flex flex-col justify-center items-start mt-4">
                  <DialogTitle>{descriptionMessage.header[1]}</DialogTitle>
                  <p className="text-base mt-2">{descriptionMessage.body[0]}</p>
                </div>
                <div className="flex flex-col justify-center items-start mt-4">
                  <DialogTitle>{descriptionMessage.header[2]}</DialogTitle>
                  <p className="text-base mt-2">{descriptionMessage.body[1]}</p>
                </div>
                <div className="flex flex-col justify-center items-start mt-4">
                  <DialogTitle>{descriptionMessage.header[3]}</DialogTitle>
                  <p className="text-base mt-2">{descriptionMessage.body[2]}</p>
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default RoomDesc;
