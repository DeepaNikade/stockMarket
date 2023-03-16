const connection=require("./dbConnect");

const executeQuery=async function executeQuery(query){
    try {
        const Request=await connection;
        const queryOutput=await Request.query(query);
        return queryOutput.recordset;
    } catch (err) {
       console.log(err); 
    } 
}
module.exports=executeQuery;
