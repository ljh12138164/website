import { Hono } from "hono";
import user from "./user";

const website = new Hono().route('/user',user)

export default website