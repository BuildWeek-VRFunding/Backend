const db = require("./dbconfig");

module.exports = {
    add,
    find,
    findBy,
    findById,
    findByUsername,
    // update,
    // remove
}
function find() {
    return db("users").select("id", "username").orderBy("id");
  }
  
  function findBy(filter) {
    return db("users").where(filter).orderBy("id");
  }
async function add(user) {
    try{
        const [id] = await db("users").insert(user, "id");  
        return findById(id);
    } catch (error){
        throw error;
    }
}
function findByUsername(username){
    return db('users').where({ username }).first();
}
function findById(id){
    return db("users").where({ id }).first();
}