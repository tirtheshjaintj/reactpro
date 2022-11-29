const mongoose=require("mongoose");
const URI="mongodb://localhost:27017/";
const contomongo=()=>{
mongoose.connect(URI,()=>{
    console.log("success Done");
});
};
module.exports=contomongo;