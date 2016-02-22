import mysql from "mysql";
class DB {
    constructor(mysqlinfo){
      if (!mysqlinfo)
        return;
        this.connection = mysql.createConnection(mysqlinfo);
        this.connection.connect();
    }

    getBasicInfo(uuid,callback){
      callback({kills:10,losses:10,meterswalked:10,elo:30});
        // this.connection.query("SELECT kills,wins,deaths,elo,stepswalked FROM `mcrl_playerstats` WHERE uuid=?",[uuid], (err,rows) => {
        //     if (err)
        //        callback({uuid: uuid, error:err});
        //     else if (rows.length == 0)
        //         callback({uuid: uuid, data:null});
        //     else
        //         callback({uuid: uuid, data:rows[0]});
        // });
    }

    getWeaponInfo(uuid,callback,start,limit){
        this.connection.query("SELECT weapon,kills,fired,hit,timespent,headshots FROM `mcrl_weaponstats` WHERE uuid=? LIMIT ?,?",[uuid,start,limit],(err,rows) =>{
              if (err)
               callback({uuid: uuid, error:err});
            else if (rows.length == 0)
                callback({uuid: uuid, data:null});
            else
                callback({uuid: uuid, data:rows});
        });
    }

    getMatchInfoForPlayer(uuid,callback,start,limit){
        this.connection.query("SELECT matchid,kills,meterswalked,rank,lossreason,ended FROM mcrl_matches_players WHERE uuid=? ORDER BY ? LIMIT ?,?",
            [uuid,'end',start,limit], (err,rows) =>{
            if (err)
               callback({uuid: uuid, error:err});
            else if (rows.length == 0)
                callback({uuid: uuid, data:null});
            else
                callback({uuid: uuid, data:rows});
        });
    }

    getSingleMatchInfoForPlayer(uuid,matchid,callback){
        this.connection.query("SELECT kills,meterswalked,rank,lossreason,ended FROM mcrl_matches_players WHERE uuid=? AND matchid=?", [uuid,matchid], (err,rows) =>{
            if (err)
               callback({uuid: uuid, error:err});
            else if (rows.length == 0)
                callback({uuid: uuid, data:null});
            else
                callback({uuid: uuid, data:rows[0]});
        });
    }

    getMatches(callback,limit,start){
        this.connection.query("SELECT map,started,ended FROM `mcrl_matches` ORDER BY ? LIMIT ?,?",
         ['ended', start, limit], (err,rows) => {
            if (err)
                callback({error: err});
            else
                callback({data: rows});
        });
    }

    getTopPlayers(callback,start,limit){
        this.connection.query("SELECT kills,wins,deaths,elo FROM `mcrl_playerstats` ORDER BY ? LIMIT ?,?",
        ['elo', start, limit], (rows,err) => {
             if (err)
                callback({error: err});
            else
                callback({data: rows});
        });
    }
}
export default DB;
