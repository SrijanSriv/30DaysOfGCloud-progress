const express = require('express');
const path = require('path');
const app = express();

/* Since react-routing needs to know that "/" is the default for index.html
thar is if we are routing in the first place */
app.get("/*", (req, res) => {
    let url = path.join(__dirname, '../client/build', 'index.html');
    if (!url.startsWith('/app/'))
    url = url.substring(1);
   res.sendFile(url);
 });