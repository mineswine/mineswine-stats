import path from 'path';
import express from 'express';
import DB from "./dbHooks";
import Profile from "../app/components/profileview";
var app = Express();
var server;

var db = new DB({
  host: process.env.mineswineDBHost,
  user: process.env.mineswineDBUser,
  password: process.env.mineswineDBPass,
  database: process.env.mineswineDBName
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/recentmatches/', (req,res) => {
  db.getMatchInfoForPlayer(req.query.user,(data) => {
    res.json(data);
  }, req.query.orderby, Profile.RECENTMATCHES_SIZE, req.query.page+Profile.RECENTMATCHES_SIZE);
});

app.get('/weaponstats/', (req,res) => {
  db.getWeaponInfo(req.query.user,(data) => {
    res.json(data);
  }, req.query.orderby, Profile.WEAPONSTATS_SIZE, req.query.page+Profile.WEAPONSTATS_SIZE);
});

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;
  console.log('Server is listening at %s', port);
});
