// Persists Astro's content layer store and image cache between deploys
const CACHE_PATHS = ['node_modules/.astro'];

export const onPreBuild = async ({ utils }) => {
  const restored = await utils.cache.restore(CACHE_PATHS);
  console.log(restored ? 'Restored the Astro cache' : 'No Astro cache to restore');
};

export const onPostBuild = async ({ utils }) => {
  const saved = await utils.cache.save(CACHE_PATHS);
  console.log(saved ? 'Saved the Astro cache' : 'Nothing to save in the Astro cache');
};
