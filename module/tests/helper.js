
const es = require('elasticsearch');

const host = process.env.ES_HOST || 'http://localhost:9200'

const connection = new es.Client({
    host
});


module.exports = function createTest(pipeline, input) {
    return async function() {
        const {docs} = await connection.ingest.simulate({
            body: {
                pipeline: pipeline,
                docs: [
                    {"_source": {message: input}}
                ]
            }
        })
        const source = docs[0].doc._source;

        expect(source).not.toHaveProperty('error')
        expect(source).toMatchSnapshot();
    }
}