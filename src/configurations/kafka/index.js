const { Kafka } = require('kafkajs');

exports.connect = async env => {
    const kafka = new Kafka(env.kafkaConfig);
    const consumer = kafka.consumer(env.consumerConfig);
    await consumer.connect();
    await consumer.subscribe(env.subscribeConfig);

    return consumer;
};
