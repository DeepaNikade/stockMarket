const mssql=require("mssql/msnodesqlv8");
require("dotenv").config()

const{SERVER,DATABASE,DBUSER,DBPASSWORD}=process.env;


const config={
    server:SERVER,
    database:DATABASE,
    user:DBUSER,
    pasword:DBPASSWORD,
    options: { 
        trustedConnection:true
    }
}

const connection=mssql.connect(config)
            .then(()=>{
                console.log("Db connect");
                return new mssql.Request();
            })
            .catch((err)=>{
                console.log("db not connected",err);
            })
module.exports=connection;            