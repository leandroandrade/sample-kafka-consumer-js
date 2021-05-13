const kafkajs = require('kafkajs');

jest.mock('kafkajs');

const client = require('../../../src/configurations/kafka');

describe('kafka-connector-tests', () => {
    test('should connect', async () => {
        const connect = jest.fn().mockResolvedValue({});
        const subscribe = jest.fn().mockResolvedValue({});

        kafkajs.Kafka.prototype.consumer = jest.fn().mockImplementation(() => ({
            connect,
            subscribe,
        }));

        const params = {
            kafkaConfig: {},
            consumerConfig: {},
            subscribeConfig: {},
        };
        const consumer = await client.connect(params);
        expect(consumer).not.toBeNull();
        expect(consumer).not.toBeUndefined();
        expect(connect).toBeCalled();
        expect(subscribe).toBeCalled();
    });
});
