
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fundraiser').del()
    .then(function () {
      // Inserts seed entries
      return knex('fundraiser').insert([
        {id: 1, ownerid: 3, name:'Benefit for Programmers who are really bad at programming', description:'please help'}
      ]);
    });
};
