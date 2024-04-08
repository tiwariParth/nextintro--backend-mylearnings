import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function getUserData() {
  const user = await prisma.user.findFirst();
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
