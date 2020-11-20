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
    return db('fundraiser').where('ownerid','=',id).update(changes)
       .then(data => {
          return data
       })
 }
 
 function remove(id) {
    return db('fundraiser').where( 'ownerid','=', id ).delete()
 }
function getfundraiser(id){
    return db('donation')
    .join('fundraiser', 'fundraiser.ownerid', '=', 'donation.funderid')
    .select('*').where('ownerid','=',id)
        
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