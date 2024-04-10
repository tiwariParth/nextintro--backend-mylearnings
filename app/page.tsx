import client from "@/db/index";

async function getUserData() {
  const user = await client.user.findFirst();
  return {
    email: user?.username,
    name: "sadfs",
  };
}

export default async function Home() {
  const userData = await getUserData();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name:{userData.name}</div>
          {userData?.email}
        </div>
      </div>
    </div>
  );
}
