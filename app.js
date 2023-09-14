
let input=document.getElementById('user-input')
let groupno= document.getElementById('group')
let no;
function myFunction(){
   let val=input.value;
    for (let i= 0; i <val.length; i++) {
          if(val[i]>= '0' && val[i]<= '9'){
            no=val.slice(i);
            break;
          }
          else{
           continue;
          }
        
    }
    if(no!=null){
        if(no.charAt(0)==1){
            groupno.innerHTML=val;
            groupno.style.color="orange";
            }
        
            else if(no.charAt(0)==2){
                groupno.innerHTML=val;
                groupno.style.color="green";
            }
        
            else if(no.charAt(0)==3){
                groupno.innerHTML=val;
                groupno.style.color="black";
            }
    }
   
    else{
        groupno.innerHTML="an error occurred during input( should be at least a digit)";
        groupno.style.color="red";

    }



}