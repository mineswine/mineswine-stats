import path from 'path';
import express from 'express';
import DB from "./dbHooks";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

dotenv.config();
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'src/client/')));
app.use(express.static(path.join(__dirname, 'dist')));

db.getMatches((data) => console.log(data));
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

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;
  console.log('Server is listening at %s', port);
});
