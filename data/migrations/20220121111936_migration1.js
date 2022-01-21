/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('projects', (t) => {
      t.increments('project_id').unsigned().primary()
      t.string('project_name').notNullable()
      t.text('project_description')
      t.boolean('project_completed').defaultTo('false')
  })
  .createTable('resources', (t) => {
      t.increments('resource_id').unsigned().primary()
      t.string('resource_name').unique().notNullable()
      t.text('resource_description')
  })
  .createTable('tasks', (t) => {
      t.increments('task_id').unsigned().primary()
      t.text('task_description').notNullable()
      t.string('task_notes')
      t.boolean('task_completed').defaultTo('false')
      t.integer('project_id').notNullable().unsigned().references('project_id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE')
  })
  .createTable('project_resources', (t) => {
    t.increments('project_resource_id').unsigned().primary()
    t.integer('project_id').notNullable().references('project_id').inTable('projects')
    t.integer('resource_id').notNullable().references('resource_id').inTable('resources')

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
