var config=require("config")
var mysql=require("mysql")


var connection = mysql.createConnection({
  host     : config.get("host"),
  user     : config.get("user"),
  password : config.get("password"),
  database : config.get("database"),
  port     :config.get("port")
});
 
connection.connect();

function getConnection(){
    if(!connection){
        connection.connect();
    }
       
    return connection
}
module.exports={
    getConnection=getConnection
}