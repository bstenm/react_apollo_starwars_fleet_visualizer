// import { mongoAtlasPassword } from './.credentials';
const dev = process.env.NODE_ENV === 'development';
const db = dev ? 'starwars_dev' : 'starwars';

const mongoAtlasUser = 'starwars';

export const dbPath = `mongodb://127.0.0.1:27017/${db}`;
// `mongodb+srv://${mongoAtlasUser}:${mongoAtlasPassword}@cluster0-1k9i8.mongodb.net/test?retryWrites=true&w=majority`;
