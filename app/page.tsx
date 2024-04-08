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
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>
          {userData?.email}
        </div>
      </div>
    </div>
  );
}
