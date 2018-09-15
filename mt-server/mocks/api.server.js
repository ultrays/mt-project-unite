const express = require("express");
const app = express();
const MeiShi=require("./MeiShi");
const Delison=require("./Delison");
const Index=require("./index");
const KtvList=require("./ktvList");
const Ktv=require("./ktv");
const CatEye=require("./CatEye");
const _Detail=require("./CatEye_Detail");
const delicious=require("./delicious");
const zbyc=require("./zbyc");

var fs=require("fs");
var crud=require("./crud");
var bodyParser = require('body-parser');//中间件获取req.body

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.all('*', function (req, res, next) {
  if (req.path !== "/" && !req.path.includes(".")) {
    res.header('"Access-Control-Allow-Credentials", true');
    res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
  }
  next();
});

app.use("/api/MeiShi",(req,res)=>{
  res.json(MeiShi)
});

app.use("/api/Delison",(req,res)=>{
  let id = req.query.id;
  res.json(Delison[id])
});

app.use("/api/Index",(req,res)=>{
  let data= fs.readFileSync("./index.json");
  res.send(data);
});

app.use("/api/ktvList",(req,res)=>{
  res.json(KtvList);
});

app.use("/api/Ktv",(req,res)=>{
  res.json(Ktv);
});

app.use("/api/CatEye",(req,res)=>{
  res.json(CatEye)
});

app.use("/api/CatEye_Detail",(req,res)=>{
  let id = req.query.id;
  res.json(_Detail[id]);
});

app.use("/api/delicious",(req,res)=>{
  res.json(delicious)
});

app.use("/api/zbyc",(req,res)=>{
  res.json(zbyc)
});

/*******服务器监听端口******/
app.listen(3000,()=>{
  console.log("api server is ready on port 3000")
});

/*******首页index增删改查CRUD******/
//查询
app.use("/api/Crud/Retrieve",(req,res)=>{
  let temp = crud.retrieveJson(req.query.name,0,50);
  res.json(temp);
});
//删除
app.use("/api/Crud/delete",(req,res)=>{
  let temp = crud.deleteJson(req.query.id);
  res.json(temp);
});
//新增
app.post("/api/Crud/create",(req,res)=>{
  console.log("新增",req.body);
  let temp=crud.createJson(req.body);
  res.json(temp);
});
//更新
app.use("/api/Crud/update",(req,res)=>{
  let temp = crud.updateJson(req.body.id,req.body);
  res.json(temp);
});
