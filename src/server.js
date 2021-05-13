require('dotenv').config();

const kafka = require('./configurations/kafka');
const env = require('./configurations/env');

const client = require('./consumer');

Promise.all([kafka.connect(env)])
    .then(([consumer]) => {
        console.log('Consumer connected on brokers!');

        client.listening({ env, consumer });
    })
    .catch(err => console.error(err));
