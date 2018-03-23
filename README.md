# Invoices

## Execute

The script `gen_db.js` takes all the dummy JSon and concatenates them into `db.json`.

This creates a set of APIs on `http://localhost:5555`


## APIs

When you click on Create An Invoice Button:

* GET `/tenants/1101`
* GET `/invoice-definition/1301`

Invoice is displayed on screen, enter organization name :

* GET `/organisations?name.contains=xxx`

Then create the invoice

* POST `/invoices`
