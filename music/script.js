
function addNewwefield() {
 // console.log("add new field");

let newnode=document.createElement("textarea");

newnode.classList.add("form-control");
newnode.classList.add("wefield");
newnode.classList.add("mt-2");

newnode.setAttribute("rows",3);
newnode.setAttribute('placeholder' ,'enter here');


let weob=document.getElementById("we")
let weAddbuttonob=document.getElementById("weAddbutton");

weob.insertBefore(newnode, weAddbutton);

}

function addNewaqfield() {
  // console.log("add new field");
 
 let newnode=document.createElement("textarea");
 
 newnode.classList.add("form-control");
 newnode.classList.add("aqfield");
 newnode.classList.add("mt-2");
 
 newnode.setAttribute("rows",3);
 newnode.setAttribute('placeholder' ,'enter here');
 
 
 let aqob=document.getElementById("aq")
 let aqAddbuttonob=document.getElementById("aqAddbutton");
 
 aqob.insertBefore(newnode, aqAddbutton);
 
 }

 //generating cv

 function generateCV(){
  //console.log("generating CV")
 
let namefield=document.getElementById("namefield").value;

let namtT1=document.getElementById('nameT1');

nameT1.innerHTML = namefield;

document.getElementById('nameT2').innerHTML = namefield;
document.getElementById('contactT').innerHTML =document.getElementById("contactfield").value;
document.getElementById('addressT').innerHTML =document.getElementById("addressfield").value;

document.getElementById('fbT').innerHTML =document.getElementById("fbfield").value;
document.getElementById('instaT').innerHTML =document.getElementById("instafield").value;
document.getElementById('linkedT').innerHTML =document.getElementById("linkedfield").value;

document.getElementById('objectiveT').innerHTML = document.getElementById("objectivefield").value;

let wes = document.getElementsByClassName('wefield');
let str = " ";
for(let e of wes)
{
  str = str + '<li> ${e.value} </li>';
}

document.getElementById(weT).innerHTML=str;


let eqs= document.getElementsByClassName('aqfield');
let str1 = " ";
for(let e of eqs){
  str1+='<li> ${e.value} </li> ';

  document.getElementById('eqT').innerHTML = str1;
}


document.getElementById('Cv-form').style.display='none';
document.getElementById('Cv-template').style.display="block";

}


//printcv

function printCV()
{
  window.print();
}