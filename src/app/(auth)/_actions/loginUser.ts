"use server";

import { LoginFormData } from "@/schemas/login.schema";


export async function loginUser(data: LoginFormData) {
  console.log("Login Request:", data);

//  Call backend API
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Login failed");
  }

  return result;


}