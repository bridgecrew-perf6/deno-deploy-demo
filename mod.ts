import { serve } from 'https://deno.land/x/gustwind@v0.16.3/mod.ts'
import projectMeta from "./meta.json" assert { type: "json" };

const server = await serve(projectMeta, Deno.cwd(), false);

console.log('Head to localhost:3000');

await server();
