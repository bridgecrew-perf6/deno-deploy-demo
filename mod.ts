import { serve } from 'https://deno.land/x/gustwind@v0.17.0/mod.ts'
import { getCache } from 'https://deno.land/x/gustwind@v0.17.0/src/cache.ts'
import type { ProjectMeta } from 'https://deno.land/x/gustwind@v0.17.0/types.ts'
import twindSetup from './twindSetup.ts';

// This doesn't work on Deno Deploy just yet
// import projectMeta from "./meta.json" assert { type: "json" };

const projectMeta = await getJson<ProjectMeta>('./meta.json')
const server = await serve({projectMeta, projectRoot: Deno.cwd(), initialCache: { ...getCache(), twindSetup }, mode: 'production'});

console.log('Head to localhost:3000');

server();

function getJson<R>(filePath: string): Promise<R> {
  return Deno.readTextFile(filePath).then((d) => JSON.parse(d));
}
