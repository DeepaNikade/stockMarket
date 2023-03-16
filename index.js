const express=require("express");
const bodyparser=require('body-parser');
const companyScript=require("./Routes/company/companyScript");



const app=express();
app.use(bodyparser.json());
app.use("/company",companyScript);


app.listen(5000,()=>{
console.log("listen to port 5000");
})


