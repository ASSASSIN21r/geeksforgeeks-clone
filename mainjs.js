var tutbtn=document.getElementById('tutb')
var tutdropdwm=document.getElementById('tutdropdwn')
var tutarr=document.getElementById('tutbarr')









tutarr.addEventListener('click',function(){
    
    if(tutdropdwm.style.display=='flex'){
        tutdropdwm.style.display='none'
        tutarr.style.transform='rotate(0deg)'
       }
       else{
        tutdropdwm.style.display='flex'
        
        tutarr.style.transform='rotate(180deg)'
       }
})
tutbtn.addEventListener('click',function(){
   if(tutdropdwm.style.display=='flex'){
    tutdropdwm.style.display='none'
    tutarr.style.transform='rotate(0deg)'
   }
   else{
    tutdropdwm.style.display='flex'
    tutarr.style.transform='rotate(180deg)'
   }
})