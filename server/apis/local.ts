import { serve } from "@hono/node-server";
import app from "./src";

serve({ fetch: app, port: 3000 });
