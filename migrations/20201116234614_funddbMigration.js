
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
      tbl.increments("id");
      tbl.string("username", 255).notNullable().unique();
      tbl.string("name",255);
      tbl.string("password", 255).notNullable();
      tbl.boolean("fundraiser").defaultTo(false)

  }).createTable("fundraiser", tbl => {
      tbl.increments("id");
      tbl.integer("ownerid").unsigned().notNullable().references("users.id").onDelete("CASCADE").onUpdate("CASCADE");
      tbl.string("name").notNullable().unique();
      tbl.string("description").notNullable();
  })
  .createTable("donation", tbl => {
      tbl.increments("id");
      tbl.integer("donorid").unsigned().notNullable().references("users.id").onDelete("CASCADE").onUpdate("CASCADE");
      tbl.integer("amount").unsigned().notNullable();
      tbl.string("note");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("fundraisers").dropTableIfExists("events").dropTableIfExists("donation");
};
