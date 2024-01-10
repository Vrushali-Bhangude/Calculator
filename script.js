let buttons=document.querySelectorAll("button");
let inputs=document.getElementById("inputbox");
let string="";

let arr=Array.from(buttons);
arr.forEach((button) =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML =="="){
            string=eval(string);
            inputs.value = string;
        }
       else if(e.target.innerHTML=="AC"){
           string="";
           inputs.value=string;
       }
       else if(e.target.innerHTML=="DE"){
         string=string.substring(0,string.length-1);
         inputs.value=string;
       }
       else{
         string +=e.target.innerHTML;
         inputs.value=string;
       }
      
       
    });
} );