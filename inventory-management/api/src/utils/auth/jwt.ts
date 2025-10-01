import { createRemoteJWKSet, jwtVerify } from "jose";
import { env } from "../../env";

const jwks = createRemoteJWKSet(new URL(env.JWKS_URL));

export async function verifyJWT(token: string) {
  return jwtVerify(token, jwks);
}
