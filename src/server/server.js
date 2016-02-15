import path from 'path';
import Express from 'express';
import DB from "./dbHooks";
var app = Express();
var db = new DB({host:"209.222.26.2", user:"root", password:"jd9032nfa9932nozsc3oi234", database:"mineswineapi"});
db.getMatches((data) => console.log(data));
var server;

// const PATH_STYLES = path.resolve(__dirname, '../client/styles');
const PATH_DIST = path.resolve(__dirname, '../../dist');

// app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});