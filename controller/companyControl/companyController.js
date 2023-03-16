const executeQuery=require("../../dataBase/executeQuery");


// INSERT OPERATION IN COMPANY
async function insertInCompany(req,res){
  const{companyName,city,state,mobile,gstNo,panNo}=req.body;
  
try {
    const INSERT_COMPANY_QUERY = `insert into company (companyName,city,state,mobile,gstNo,panNo)
    OUTPUT inserted.* 
    values ('${companyName}','${city}','${state}','${mobile}','${gstNo}','${panNo}')`;

    const inserted_data_company=await executeQuery(INSERT_COMPANY_QUERY);
    res.status(200).json(inserted_data_company);  
} catch (err) {

    res.status(500).json(err);
}

}

module.exports={
    insertInCompany
}