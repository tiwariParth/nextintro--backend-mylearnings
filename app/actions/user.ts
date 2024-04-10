"use server";
import client from "@/db/index";
export async function solve(username:string, password:string) {
  try {
    await client.user.create({
      data: {
        username:username,
        password:password,
      },
    });
    return true
  }
  catch(e){
    return false
  }
}
