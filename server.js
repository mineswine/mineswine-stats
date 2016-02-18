// import path from 'path';
// import express from 'express';
var express = require('express')
var path = require('path')
var compression = require('compression')

import http from 'http';
import DB from "./src/server/dbHooks";
// import querystring from "querystring";
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './src/app/routes'

const RECENTMATCHES_SIZE = 25, WEAPONSTATS_SIZE = 25;
var server;
var loadedprofiles = new Map()
var app = express()
console.log("DIRNAME "+__dirname);
console.log(routes);
app.use(compression())
// app.use(express.static("/"))
app.use(express.static(path.join(__dirname, 'dist')))
app.get('*', (req, res) => {
  console.log(routes);
  // match the routes to the url
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // `RouterContext` is the what `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to
    // get these props before rendering.
    const appHtml = renderToString(<RouterContext {...props}/>)

    // dump the HTML into a template, lots of ways to do this, but none are
    // really influenced by React Router, so we're just using a little
    // function, `renderPage`
    res.send(renderPage(appHtml))
  })
})

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/dist/bundle.js"></script>
   `
}

// var db = new DB({
//   host: process.env.mineswineDBHost,
//   user: process.env.mineswineDBUser,
//   password: process.env.mineswineDBPass,
//   database: process.env.mineswineDBName
// });
var db = null;
//
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// });

app.get('/recentmatches/:uuid/:page', (req,res) => {
  db.getMatchInfoForPlayer(req.params.uuid, data => {
    res.json(data);
  },req.params.page*RECENTMATCHES_SIZE,RECENTMATCHES_SIZE);
});

app.get('/weaponstats/:uuid/:page', (req,res) => {
  db.getWeaponInfo(req.params.uuid, data => {
    res.json(data);
  },req.params.page*WEAPONSTATS_SIZE, WEAPONSTATS_SIZE);
});

app.get('/generalstats/:uuid', (req,res) => {
  db.getBasicInfo(req.params.uuid, data =>{
    res.json(data);
  });
});

server = app.listen(process.env.PORT || 3001, () => {
  var port = server.address().port;
  console.log('Server is listening at %s', port);
});
