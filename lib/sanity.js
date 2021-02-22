import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
  useCdn: process.env.NODE_ENV === 'production'
  // useCdn === true, gives you fast response, it will get you cached data
  // useCdn === false, give you little bit slower response, but latest data
});

export default client;
