// src/app/api/uploadthing/route.ts

import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core"; // Update path if needed

// This exports the required GET and POST handlers for Next.js App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
