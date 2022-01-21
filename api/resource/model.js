const db = require('../../data/dbConfig')

function getResources() {
    return db('resources')
}

async function postResource(resource) {
    const [resource_id] = await db('resources').insert(resource)
    return db('resources').where('resource_id', resource_id).first()
}

module.exports = {
    getResources,
    postResource
}
