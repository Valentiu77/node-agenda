function loadContacts() {
    $.ajax('data/contacts.json').done(function(contacts){
        console.info('contacts loaded', contacts);
        displayContacts(contacts);
    });
}

function displayContacts(contacts) {
    var rows = contacts.map(function(contact){
        console.log("transofrm contacts", contact);
        return`<tr>
            <td>${contact.fistName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.phone}</td>
            <td><a href="/contacts/delete?phone=${contact.phone}">x</a></td>
        </tr>`;
    });

    console.warn('rows', rows);
    document.querySelector('tbody').innerHTML = rows.join('');
}

loadContacts();