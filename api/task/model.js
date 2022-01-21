const db = require('../../data/dbConfig')

async function get(){
    const tasks = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.*', 'p.project_name', 'p.project_description')

    const resp = []

    tasks.forEach(t => {
      const structuredTask = {
          task_id: t.task_id,
          task_description: t.task_description,
          task_notes: t.task_notes,
          task_completed: t.task_completed === 1 ? true : false,
          project_name: t.project_name,
          project_description: t.project_description  
      }  
        resp.push(structuredTask)
    })
    return resp
}

module.exports = {
    get
}