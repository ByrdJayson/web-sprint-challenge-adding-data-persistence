const db = require('../../data/dbConfig')


async function getProjects() {
    const projects = await db('projects')
    const response = []

    projects.forEach(p => {
        const project = {
            project_id: p.project_id,
            project_name: p.project_name,
            project_description: p.project_description,
            project_completed: p.project_completed === 1 ? true : false
        }

        response.push(project)
    })

    return response


}

async function addProject(project) {
    const [project_id] = await db('projects').insert(project)
    return db('projects').where("project_id", project_id).first()
}





module.exports = {
    getProjects,
    addProject
}
