import { createRemoteJWKSet, jwtVerify } from "jose";
import { env } from "../../env";

const JWKS = createRemoteJWKSet(new URL(env.JWKS_URL));

export async function verifyJWT(token: string) {
  return jwtVerify(token, JWKS, {
    algorithms: ["RS256"],
  });
}
