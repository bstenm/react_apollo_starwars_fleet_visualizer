import * as uuid from 'uuid';
import * as mongoose from 'mongoose';
import { GraphQLServer } from 'graphql-yoga';

import Model from './model';
import { dbPath } from './config';

// connect to db
mongoose.connect(dbPath, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
// successfully connected to db
db.once('open', () => console.log('connected to the database'));
// error connecting to db
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const typeDefs = `
    type Query {
        spaceships: [Spaceship]!
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
        async spaceships() {
            return await Model.find().exec();
        },
    },
    Mutation: {
        async addItem(_, { name }) {
            let data = new Model();
            if (!name || name.length === 0) {
                throw new Error('Please provide a name');
            }
            data.shot = 0;
            data.name = name;
            await data.save();
            return data;
        },
        async addShot(_, { id }) {
            return await Model.findByIdAndUpdate(id, { $inc: { 'shot': 1 } }).exec();
        },
        async deleteItem(_, { id }) {
            return await Model.findByIdAndRemove(id).exec();
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server.start(() => {
    console.log('Server running at port 4000');
});


// this is our get method
// this method fetches all available data in our database
// router.get('/getData', (req, res) => {
//     Model.find((err, data) => {
//         if (err) return res.json({ success: false, error: err });
//         return res.json({ success: true, data: data });
//     });
// });

// // this is our update method
// // this method overwrites existing data in our database
// router.post('/updateData', (req, res) => {
//     const { id, update } = req.body;
//     Model.findByIdAndUpdate(id, update, (err) => {
//         if (err) return res.json({ success: false, error: err });
//         return res.json({ success: true });
//     });
// });

// // this is our delete method
// // this method removes existing data in our database
// router.delete('/deleteData', (req, res) => {
//     const { id } = req.body;
//     Model.findByIdAndRemove(id, (err) => {
//         if (err) return res.send(err);
//         return res.json({ success: true });
//     });
// });

// // this is our create methid
// // this method adds new data in our database
// router.post('/putData', (req, res) => {
//     let data = new Data();

//     const { id, message } = req.body;

//     if ((!id && id !== 0) || !message) {
//         return res.json({
//             success: false,
//             error: 'INVALID INPUTS',
//         });
//     }
//     data.message = message;
//     data.id = id;
//     data.save((err) => {
//         if (err) return res.json({ success: false, error: err });
//         return res.json({ success: true });
//     });
// });

// // append /api for our http requests
// app.use('/api', router);

// // launch our backend into a port
// app.listen(port, () => console.log(`Listening on port ${port}`));

