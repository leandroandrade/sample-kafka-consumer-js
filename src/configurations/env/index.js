const { array, boolean } = require('./helper');

module.exports = {
    kafkaConfig: {
        clientId: process.env.CLIENT_ID,
        brokers: array(process.env.BROKERS),
    },
    consumerConfig: {
        groupId: process.env.GROUP_ID,
    },
    subscribeConfig: {
        topic: process.env.TOPIC,
        fromBeginning: boolean(process.env.READ_FROM_BEGINNING),
    },
    listenerConfig: {},
};
