import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const spaceshipSchema = new Schema(
    {
        shot: Number,
        name: String,
    },
    { timestamps: true },
);

export default mongoose.model('Spaceship', spaceshipSchema);
