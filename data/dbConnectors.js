import mongoose from "mongoose";
import Sequelize from "sequelize";
import _ from "lodash";
import casual from "casual";

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/friends", {
    useMongoClient: true
});

// create schema for Friend entity
const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    }
});

const Friends = mongoose.model("friends", friendSchema);

// SQL
const sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: './aliens.sqlite'
})

// defining schema for aliens entity
const Aliens = sequelize(define('aliens', {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    planet: { type: Sequelize.STRING }
}));

// forcing the creation of new data when the server starts
Aliens.sync({ force: true }).then(() => {
    _.times(10, (i) => {
        Aliens.create({
            firstName: casual.first_name, // _first_name ?
            lastName: casual.last_name, // _last_name ? (etc..)
            planet: casual.word // _last_name ? (etc..)
        });
    });
});

export { Friends, Aliens };
