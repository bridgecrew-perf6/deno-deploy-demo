import { serve } from 'https://deno.land/x/gustwind@v0.16.3/mod.ts'
import type { ProjectMeta } from 'https://deno.land/x/gustwind@v0.16.3/types.ts'

// This doesn't work on Deno Deploy just yet
// import projectMeta from "./meta.json" assert { type: "json" };

const projectMeta = await getJson<ProjectMeta>('./meta.json')
const server = await serve(projectMeta, Deno.cwd(), false);

console.log('Head to localhost:3000');

server();

function getJson<R>(filePath: string): Promise<R> {
  return Deno.readTextFile(filePath).then((d) => JSON.parse(d));
}
