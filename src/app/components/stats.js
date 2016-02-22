import React from "react";
var S = require("string");
// var $ = require("jquery");
// var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// import S from "string";

class Stats extends React.Component {
  constructor(params){
    super(params);
    console.log(params);
    this.user = params.user;
    this.state = {
      stats: [],
    }
    // $.support.cors = true;
    // $.ajaxSettings.xhr = () => {return new XMLHttpRequest();}
  }
  componentDidMount(){
    $.ajax({
      datatype:"json",
      url: `/generalstats/${this.user}`,
      success: result => {
          console.log(result);
          this.setState(state => {
            // let obj = JSON.parse(result);
            // console.log(obj);
            state.stats = Object.keys(result).map(k =>{return {key: k, val: result[k]}});
            console.log(state.stats);
        });
      }
    })
  }
  render(){
    return <ul className="stats">
        {this.state.stats.map( stat => {
          if (stat.key === 'elo'){}
            // return <ELO elo={stat.val}>
          else
            return <li key={stat.key}>{`${stat.key}: ${stat.val}`}</li>
        })}
        </ul>
  }

}

export default Stats;
