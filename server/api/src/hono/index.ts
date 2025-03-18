import { Hono } from "hono"
import website from "./website/index"

const app = new Hono().basePath('/api').route('/website', website).get('/test', (c) => {
  return c.json({
    message: 'Hello World',
  });
})

// @ts-ignore
Deno.serve(app.fetch)