
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('donation').del()
    .then(function () {
      // Inserts seed entries
      return knex('donation').insert([
        {id: 1, donorid: 1, funderid: 3, amount: 100, note:'' },
        {id: 2, donorid: 2, funderid: 3, amount: 100, note:'Good luck!'}
    
      ]);
    });
};
