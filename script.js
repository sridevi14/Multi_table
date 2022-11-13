
  function message(){
  var temp=document.querySelector('input');
  
var result="";
for(var i = 1; i<= 10; i++){
          result = result + "<h3>"+temp.value + "*" + i + "=" + temp.value * i+"</h3>";
        }
document.getElementById("table").innerHTML = result;

 }
