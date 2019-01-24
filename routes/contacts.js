var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// /contacts/delete?phone=1234
router.get('/delete', function(req, res, next) {
  var phone = req.query.phone;
  
  const fs = require('fs');
  var content = fs.readFileSync('public/data/contacts.json');
  var contacts = JSON.parse(content);

  var remainingContacts = contacts.filter(function(contact){
    return contact.phone != phone;
  });
  
  content = JSON.stringify(remainingContacts, null, 2);
  fs.writeFileSync('public/data/contacts.json', content);

  //res.json({success: true});
  res.redirect('/agenda.html');

});


module.exports = router;
