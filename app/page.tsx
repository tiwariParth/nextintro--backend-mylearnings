import axios from "axios";
import Image from "next/image";

async function getUserData() {
  const res = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  return res.data;
}

export default async function Home() {
  const userData = await getUserData();
  return (
    <div className="flex flex-col justify-center items-center h-screen border-2 p-3 border-black">
      hi there
      <div className="border-2 p-2 border-black">{userData.name}</div>
      <div className="border-2 p-2 border-black">{userData.email}</div>
    </div>
  );
}
