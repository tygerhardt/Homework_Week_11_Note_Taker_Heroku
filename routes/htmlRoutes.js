var router = require ("express").Router()

// Path package to get the file path for the html
const path = require("path");

// Create a route
// Basic routes that sends the user first to the AJAX page
// Go get the html so that the user can see the page.

//module.exports = function(app) {

    router.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    router.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    module.exports = router
;