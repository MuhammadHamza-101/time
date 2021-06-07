

let a;
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a= new Date();
    datee= a.toLocaleDateString(undefined,options)
 time = a.getHours()+" : "+a.getMinutes()+" : "+a.getSeconds();
document.getElementById("tyme").innerHTML= time+"  on  "+datee;
}, 1000);
