const { processData } = require('./client');

exports.listening = ({ env, consumer }) => {
    consumer
        .run({
            ...env.listenerConfig,
            eachMessage: processData,
        })
        .then(() => {
            console.log('Consumer ready and listening...');
        })
        .catch(err => console.error('Consumer error:', err));
};
