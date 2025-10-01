import { requireAuth } from "../../middleware/auth";
import { base } from "../../middleware/base";
import { orpc } from "../../orpc";

export const initializeSetup = base.setup.initialize.handler(
  async ({ input, context }) => {
    const { user } = context;
  },
);
``;
