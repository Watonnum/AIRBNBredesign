export default function Showmore() {
  return (
    <>
      <div className="flex justify-center items-center mt-14">
        <p className="text-3xl text-black font-bold">
          สำรวจที่พักประเภทวิวสวยต่อ
        </p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          type="submit"
          className="flex justify-center items-center bg-black opacity-75 hover:opacity-100 py-5 px-12 text-4xl rounded-xl text-white  font-bold transition duration-200 cursor-pointer hover:scale-110 "
        >
          แสดงมากขึ้น
        </button>
      </div>
    </>
  );
}
