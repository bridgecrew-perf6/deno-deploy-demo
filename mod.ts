import { serve } from 'https://deno.land/x/gustwind@v0.16.4/mod.ts'
import { getCache } from 'https://deno.land/x/gustwind@v0.16.4/src/cache.ts'
import type { ProjectMeta } from 'https://deno.land/x/gustwind@v0.16.4/types.ts'
import twindSetup from './twindSetup.ts';

// This doesn't work on Deno Deploy just yet
// import projectMeta from "./meta.json" assert { type: "json" };

const projectMeta = await getJson<ProjectMeta>('./meta.json')
const server = await serve(projectMeta, Deno.cwd(), { ...getCache(), twindSetup });

console.log('Head to localhost:3000');

server();

function getJson<R>(filePath: string): Promise<R> {
  return Deno.readTextFile(filePath).then((d) => JSON.parse(d));
}
