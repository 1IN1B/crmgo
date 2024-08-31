import { jwtVerify } from "jose";

export function getJwtSecretKey(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  console.log(secret, "<--- bencho")
  if (!secret) {
    throw new Error("JWT Secret key is not matched");
  }
  return new TextEncoder().encode(secret);
}

export async function verifyJwtToken(token: string): Promise<any | null> {
  try {
    
    let payload;
    jwtVerify(token, getJwtSecretKey()).then((data) => {
        payload = data.payload
    })
    return payload;
  } catch (error) {
    console.log(error)
    return null;
  }
}