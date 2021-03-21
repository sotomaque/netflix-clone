// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Movie, Show, Season, Episode } = initSchema(schema);

export {
  Category,
  Movie,
  Show,
  Season,
  Episode
};