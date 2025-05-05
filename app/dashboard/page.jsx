import { UserProfile } from "@clerk/nextjs";

const page = () => {
  const UserProfilePage = <UserProfile />;
  return (
    <div className="w-full h-[980px] flex justify-center items-center">
      <UserProfile />
    </div>
  );
};

export default page;
