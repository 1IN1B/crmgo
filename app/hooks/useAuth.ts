"use client";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { verifyJwtToken } from "@/lib/auth";

export function useAuth(): any | null {
  const [auth, setAuth] = useState<any | null>(null);

  const getVerifiedToken = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token") ?? null;
    console.log('token -> ', token)
    const verifiedToken = await verifyJwtToken(token);
    console.log(verifiedToken);
    setAuth(verifiedToken);
  };

  useEffect(() => {
    // getVerifiedToken();
  }, []);

  return auth;
}