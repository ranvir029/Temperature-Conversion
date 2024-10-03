const textblock=document.getElementById("textblock");
const toFahernhite=document.getElementById("toFahernhite");
const toCelcius=document.getElementById("toCelcius");
const result=document.getElementById("result");
const final=document.getElementById("final");
let temp;

   result.onclick=function(){
    temp=textblock.value;
    temp=Number(temp);
    if(toFahernhite.checked){
        temp=(9/5*temp)+32;
        temp=temp.toFixed(2);
        final.textContent=`${temp}°F`;
    }
    else if(toCelcius.checked){
       temp=(temp-32)*5/9;
       temp=temp.toFixed(2);
        final.textContent=`${temp}°C`;
    }
    else {
        final.textContent="Please Select Any Condition";
    }
};
      

  