const{Router}=require("express");
const{  insertInCompany}=require("../../controller/companyControl/companyController");

const router=Router();
router.post("/companyInsert",insertInCompany);


module.exports=router;