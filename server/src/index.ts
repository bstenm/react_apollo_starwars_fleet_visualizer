import * as uuid from 'uuid';
import * as mongoose from 'mongoose';
import { GraphQLServer } from 'graphql-yoga';

import Model from './model';
import { dbPath } from './config';

// connect to db
mongoose.connect(dbPath, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
// successfully connected to db
db.once('open', () => console.log('connected to the database'));
// error connecting to db
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const typeDefs = `
    type Query {
        getSpaceships: [Spaceship]!
    }

    type Mutation {
        addItem(name: String): Spaceship!
        addShot(id: String): Spaceship!
        deleteItem(id: String): Spaceship!
    }

    type Spaceship {
        id: ID!
        shot: Int,
        name: String,
    }
`;

const resolvers = {
    Query: {
        async getSpaceships() {
            return await Model.find().exec();
        },
    },
    Mutation: {
        async addItem(_, { name }) {
            const data = new Model();
            if (!name || name.length === 0) {
                throw new Error('Please provide a name');
            }
            data.shot = 0;
            data.name = name;
            await data.save();
            return data;
        },
        async addShot(_, { id }) {
            return await Model.findByIdAndUpdate(id, {
                $inc: { 'shot': 1 },
            }).exec();
        },
        async deleteItem(_, { id }) {
            return await Model.findByIdAndRemove(id).exec();
        },
    },
};

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server.start(() => console.log('Server running at port 4000'));
