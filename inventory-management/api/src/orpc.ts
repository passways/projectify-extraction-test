import { implement } from "@orpc/server";
import { contract } from "@projectify/inma-contract";

export const orpc = implement(contract).$context<{ headers: Headers }>();
