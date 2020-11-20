const db = require("./dbconfig");

module.exports = {
    addfund,
    adddonation,
    findDonationByID,
    findById,
    getDonationTotalByID,
    getfundraiser,
    update,
    remove
}
function addfund(data) {
    return db('fundraiser')
       .insert(data)
       .then(fundraiser => {
          return fundraiser;
       })
    }
       function adddonation(data) {
        return db('donation')
           .insert(data)
           .then(donation => {
              return findDonationByID(donation);
           })
        }
function update(id, changes) {
    return db('fundraiser').where(id).update(changes)
       .then(data => {
          return data
       })
 }
 
 function remove(id) {
    return db('fundraiser').where( id ).del()
 }
function getfundraiser(id){
    return db("fundraiser as f").join("donations as d", "d.funderid", "f.ownerid")
            .where("f.ownerid", "=", id)
        
}
function findById(id){
    return db("fundraiser").where("ownerid", "=", id);
}
function findDonationByID(id){
    return db("donation").where("donorid", "=" , id)
}
function getDonationTotalByID(id){
    return db('donation').where("funderid", "=" , id)
}