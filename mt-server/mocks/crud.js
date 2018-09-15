var fs = require('fs');

module.exports={
    //增加json文件中的对象
    "createJson":function createJson(params) {
        //现将json文件读出来
        let data = fs.readFileSync('./index.json');
        var person = data.toString();//将二进制的数据转换为字符串
        person = JSON.parse(person);//将字符串转换为json对象
        person.introItems.push(params);//将传来的对象push进数组对象中
        // person.total = person.introItems.length;//定义一下总条数，为以后的分页打基础
        // console.log(person.introItems);
        var str = JSON.stringify(person, null, 4);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile('./index.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log('----------新增成功-------------');
        });
        return person.introItems;
    },
    //更新json文件中的对象
    "updateJson":function updateJson(id,params) {
        let data = fs.readFileSync('./index.json')
        var person = data.toString();
        person = JSON.parse(person);
        //把数据读出来,然后进行修改
        for(var i = 0; i < person.introItems.length;i++){
            if(id == person.introItems[i].id){
                for(var key in params){
                    if(person.introItems[i][key]){
                        person.introItems[i][key] = params[key];
                    }
                }
            }
        }
        // person.total = person.introItems.length;
        var str = JSON.stringify(person, null, 4);
        fs.writeFile('./index.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log('--------------------修改成功');
        });
        return person.introItems;
    },
    //查询json文件中的对象
    "retrieveJson":function retrieveJson(name,p,s){
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
        //如果id存在则查找某项
        if(name){
            //把数据读出来,然后进行修改
            for(var i = 0; i < pagePerson.length;i++){
                if(name == pagePerson[i].name){
                    console.log('------------------------查询成功单个pagePerson');
                    return [pagePerson[i]];
                }
            }
            return null;
        }
        console.log('------------------------查询成功所有pagePerson');
        // console.log(pagePerson);
        return pagePerson;
        // return person;
    },
    //删除json文件中的对象
    "deleteJson":function deleteJson(id){
        let data= fs.readFileSync('./index.json');

        var person = data.toString();
        person = JSON.parse(person);
        //把数据读出来删除
        for(var i = 0; i < person.introItems.length;i++){
            if(id == person.introItems[i].id){
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
}