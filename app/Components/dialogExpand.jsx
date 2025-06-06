import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DialogExpand = ({ descriptionMessage }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="hover:cursor-pointer hover:scale-102 duration-200 hover:text-[#FF385C]"
        >
          Showmore...
        </Button>
      </DialogTrigger>
      {/* รอแก้ เพราะHydration & div nested p */}
      <DialogContent className="sm:max-w-[425px] bg-white md:max-w-[780px] max-w-[1080px]">
        <DialogHeader className="p-4 rounded-2xl bg-[#FF385C] flex items-center">
          <DialogTitle className="text-white font-bold">
            {`About this place`}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="hyphens-auto flex flex-col justify-center items-start mt-4">
          {descriptionMessage}
        </DialogDescription>
      </DialogContent>
      {/* รอแก้ */}
    </Dialog>
  );
};

export default DialogExpand;
