import React from "react";

class Stats extends React.Component {
  constructor(params){
    super(params);
    this.props.uuid = params.uuid;
    this.state = {
      stats: {},
    }
  }
  componentDIdMount(){
    $.ajax({
      url: `/generalstats/${this.props.uuid}`,
      sucess: result => this.setState( state => state.stats = JSON.parse(result))
    });
  }
  render(){
    return <ul className="stats">
        {this.state.stats.map( stat => {
          if (stat.key === 'elo'){}
            // return <ELO elo={stat.val}>
          else
            return <li>{S(stat.val).s}</li>
        })}
        </ul>
  }

}

export default Stats;
