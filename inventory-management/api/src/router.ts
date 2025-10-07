import { orpc } from "./orpc";
import { signInProcedure } from "./procedures/session/sign-in";
import { signOutProcedure } from "./procedures/session/sign-out";

export const router = orpc.router({
  session: {
    signIn: signInProcedure,
    signOut: signOutProcedure,
  },
});
