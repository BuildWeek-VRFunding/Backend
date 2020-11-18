const bcrypt = require('bcryptjs');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Dantheman', name:'Dan',password:bcrypt.hashSync('pass', 10),fundraiser:false},
        {id: 2, username: 'kelvinsama', name:'Kelvin',password:bcrypt.hashSync('pass', 10),fundraiser:false},
        {id: 3, username: 'memedude', name:'idklol',password:bcrypt.hashSync('pass', 10),fundraiser:true}
      ]);
    });
};
