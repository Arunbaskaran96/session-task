// function createRow(tagname,attrname,attrvalue){
//     var element=document.createElement(tagname);
//     element.setAttribute(attrname,attrvalue);
//     return element;
// }

// function createCol(tagname,attrname,attrvalue){
//     var element=document.createElement(tagname);
//     element.setAttribute(attrname,attrvalue);
//     return element;
// }
// function createInput(tagname,attrname,attrvalue,attrname1,attrvalue1){
//     var element=document.createElement(tagname);
//     element.setAttribute(attrname,attrvalue);
//     element.setAttribute(attrname1,attrvalue1);
//     return element;
// }

// function createLabel(tagname,attrname,attrvalue,attrname1,attrvalue1,content){
//     var element=document.createElement(tagname);
//     element.setAttribute(attrname,attrvalue);
//     element.setAttribute(attrname1,attrvalue1);
//     element.innerHTML=content;
//     return element;
// }
// function createBreak(tagname){
//     var element=document.createElement(tagname);
//     return element;
// }

// var element=document.createElement("div");
// element.setAttribute("class","container");

// var row1=createRow("div","class","row")

// var col1=createCol("div","class","col-4")

// var form1=document.createElement("form")

// var label1=createLabel("label","for","fname","id","fn","Firstname")
// var br1=createBreak("br")
// var int1=createInput("input","type","text","id","fname")
// var br2=createBreak("br")

// var label2=createLabel("label","for","lname","id","ln","Lastname")
// var br3=createBreak("br")
// var int2=createInput("input","type","text","id","lname")
// var br4=createBreak("br")

// var label3=createLabel("label","for","address","id","add","Address")
// var br5=createBreak("br")
// var int3=createInput("input","type","text","id","address")
// var br6=createBreak("br")

// var label4=createLabel("label","for","pincode","id","pin","Pincode")
// var br7=createBreak("br")
// var int4=createInput("input","type","number","id","pincode")
// var br8=createBreak("br")

// var buttons=document.createElement("button")
// buttons.innerHTML="click"
// buttons.setAttribute("click",fun)
// form1.append(label1,br1,int1,br2,label2,br3,int2,br4,label3,br5,int3,br6,label4,br7,int4,br8)



// col1.append(form1,buttons)

// var col2=createCol("div","class","col-8")

// var tables=document.createElement("table")

// var thead1=document.createElement("thead")
// var th1=document.createElement("th")
// th1.innerHTML="First name"
// var th2=document.createElement("th")
// th2.innerHTML="Last name"
// var th3=document.createElement("th")
// th3.innerHTML="Address"
// var th4=document.createElement("th")
// th4.innerHTML="Pincode"

// thead1.append(th1,th2,th3,th4)
// tables.append(thead1)
// col2.append(tables)
// row1.append(col1,col2)
// element.append(row1)
// document.body.append(element)


// // function fun(){
// //     var x=document.getElementById("fname").value
// //     var y=document.getElementById("lname").value
// //     var z=document.getElementById("address").value
// //     var a=document.getElementById("pincode").value

// //     // var tbody1=document.createElement("tbody")
// //     var tr1=document.createElement("tr")
// //     var td1=document.createElement("td")
// //     td1.innerHTML=x


// //     var td2=document.createElement("td")
// //     td2.innerHTML=y
// //     var td3=document.createElement("td")
// //     td3.innerHTML=z
// //     var td4=document.createElement("td")
// //     td4.innerHTML=a

// //     tr1.append(td1,td2,td3,td4)
// //     // tbody1.append(tr1)
// //     document.body.append(tr1)
    
// // }


// function fun(){
//     var x=document.getElementById("fname").value
//     var y=document.getElementById("lname").value
//     var a=document.getElementById("fname1").value
//     var b=document.getElementById("lname1").value
//     var tody=document.createElement("tbody")
//     var tr1=document.createElement("tr")
//     var sp=document.createElement("td")
//     sp.innerHTML=x

//     var sp1=document.createElement("td")
//     sp1.innerHTML=y
//     var sp3=document.createElement("td")
//     sp3.innerHTML=a
//     var sp4=document.createElement("td")
//     sp4.innerHTML=b

//     if(male.checked){
//         var aa=document.createElement("td").value
//         var sp5=document.createElement("td")
//         sp5.innerHTML="male"
//     }else{
//         var aa=document.createElement("td").value
//         var sp5=document.createElement("td")
//         sp5.innerHTML="female"
//     }
//     tr1.append(sp,sp1,sp3,sp4,sp5)
//     tody.append(tr1)
//     document.getElementById("main").append(tody)

// }

// // function fun(){
// //     var sp=document.createElement("span")
// //     sp.innerHTML="clicked"
// //     document.getElementById("main").append(sp)
// // }


// // function fun(){
// //     var x=document.getElementById("southindian").value
// //     var y=document.getElementById("northindian").value
// //     console.log(x,y)
// // }

// // var request = new XMLHttpRequest();
// // request.open("GET","https://restcountries.com/v2/all")
// // request.send();
// // request.onload=function(){
// //     var result=JSON.parse(request.response)
// //     console.log(result)
// // }


// // var res=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// // .then((data)=>data.json()).then((data1)=>
// // {}


// // var x=fun()
// // console.log(x)


// function fun(){
//     var x=document.getElementById("name").value

// var td2=document.createElement("td")
// td2.innerHTML=x
//     var temp=[]
//     var td1=document.createElement("td")
//     td1.innerHTML=temp

//     if(ni.checked){
//         var sp=document.getElementById("ni").value
//         temp.push(sp)
//     }
//     if(si.checked){
//         var sp=document.getElementById("si").value
//         temp.push(sp)
//     }
//     if(ci.checked){
//         var sp=document.getElementById("ci").value
//         temp.push(sp)
//     }

//     if(temp.length<2){
//         alert("choice of food min 2")
//     }else{
//         td1.append(temp)
//         document.body.append(td2,td1)
//     }

//     console.log(res)
// }

var container1=document.createElement("div")
container1.setAttribute("class","container")
var row1=document.createElement("div")
row1.setAttribute("class","row")
row1.setAttribute("id","fun")
container1.append(row1)
document.body.append(container1)

var res=fetch("https://restcountries.com/v2/all")
.then((data)=>data.json()).then((data1)=>{
    console.log(data1)
    for(var i=0;i<data1.length;i++){

        var col1=document.createElement("div")
        col1.setAttribute("class","col-md-4")
        var span1=document.createElement("span")
        span1.innerHTML=`<div class="card" style="width: 18rem;">
        <h5 class="card-title">${data1[i].name}</h5>
        <img src="${data1[i].flag}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Capital: ${data1[i].capital}</h5>
          <h5 class="card-title">Region: ${data1[i].region}</h5>
          <h5 class="card-title">Country Code ${data1[i].cioc}</h5>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
      col1.append(span1)
      document.getElementById("fun").append(col1)


    }
    }).catch((err)=>console.log(err))