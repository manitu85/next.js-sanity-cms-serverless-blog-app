import sanityClient from '@sanity/client';

const options = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
  useCdn: process.env.NODE_ENV === 'production'
};

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
});

const client = sanityClient(options);

export default client;

// useCdn === true, gives you fast response, it will get you cached data
// useCdn === false, give you little bit slower response, but latest data
