
var apiRoutes = require ("./routes/apiRoutes")
var htmlRoutes = require ("./routes/htmlRoutes")

const express = require("express");
const app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);
app.use ("/api",apiRoutes)
app.use ("/",htmlRoutes)


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
