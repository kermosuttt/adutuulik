exports.handler = async (event) => {
    const data = JSON.parse(event.body);
    console.log('Tuli vorm:', data);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Vorm on edukalt edastatud!"}),
    };
};