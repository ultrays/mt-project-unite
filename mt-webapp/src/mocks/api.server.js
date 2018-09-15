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
// const Curd = require('./curd');
var fs=require("fs");
// var url=require("url");

app.use("/api/MeiShi",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(MeiShi)
});

app.use("/api/Delison",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let id = req.query.id;
  res.json(Delison[id])
});

app.use("/api/Index",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(Index);
});

app.use("/api/ktvList",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(KtvList);
});

app.use("/api/Ktv",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(Ktv);
});

app.use("/api/CatEye",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(CatEye)
});

app.use("/api/CatEye_Detail",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let id = req.query.id;
  res.json(_Detail[id]);
});

app.use("/api/delicious",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(delicious)
});

app.use("/api/zbyc",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(zbyc)
});

app.listen(3000,()=>{
  console.log("api server is ready on port 3000")
});

app.use("/api/Curd/Retrieve",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let temp=pagination(0,50);
  console.log('str');
  console.log(typeof(temp));
  res.json(temp);
});

app.use("/api/Curd/delete",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  console.log("haha")
  // let urlObj = url.parse(req.url,true);
  let temp = deleteJson(req.query.name);
  console.log(req.toString());
  res.json(temp);
  // res.json({"haha":22});
});

function pagination(p,s){
  //p为页数，比如第一页传0，第二页传1,s为每页多少条数据
  let data= fs.readFileSync('./index.json')
  //     if(err){
  //         console.error(err);
  //     }
  var person = data.toString();
  // console.log(data)
  person = JSON.parse(person);
  //把数据读出来
  //console.log(person.data);
  // var length = person.data.length;
  var pagePerson = person.introItems.slice(s*p,(p+1)*s);
  console.log('------------------------查询成功pagePerson');
  // console.log(pagePerson);
  return pagePerson;
  // return person;
}

//删除json文件中的选项
function deleteJson(name){
  let data= fs.readFileSync('./index.json');

  var person = data.toString();
  person = JSON.parse(person);
  //把数据读出来删除
  for(var i = 0; i < person.introItems.length;i++){
    if(name == person.introItems[i].name){
      console.log(person.introItems[i])
      person.introItems.splice(i,1);
    }
  }
  // console.log(person);
  // person.total = person.data.length;
  var str = JSON.stringify(person, null, 4);
  //然后再把数据写进去
  fs.writeFile('./index.json',str,function(err){
    if(err){
      console.error(err);
    }
    console.log("----------删除成功------------");
  });
  return person.introItems;
}
