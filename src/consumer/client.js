exports.processData = async ({ topic, partition, message }) => {
    console.log({ message: message.value.toString() });
};
