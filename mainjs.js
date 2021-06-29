var tutbtn=document.getElementById('tutb')
var tutdropdwm=document.getElementById('tutdropdwn')
var tutarr=document.getElementById('tutbarr')
var algomenu=document.getElementById('algomenu')
var algobtn=document.getElementById('algobtn')
var algoarr=document.getElementById('algoarr')
var dsmenu=document.getElementById('dsmenu')
var dsarr=document.getElementById('dsarr')
var lngarr=document.getElementById('lngarr')
var langmenu=document.getElementById('langmenu')
var intarr=document.getElementById('intarr')
var intmenu=document.getElementById('intmenu')
var garr=document.getElementById('garr')
var gatemenu=document.getElementById('gatemenu')
var isroarr=document.getElementById('isroarr')
var isromenu=document.getElementById('isromenu')
var stddropdwn=document.getElementById('stddropdwn')
var stdarr =document.getElementById('stdarr')
var jobarr=document.getElementById('jobarr')
var jobdropdwn=document.getElementById('jobdropdwn')
var searchbox=document.getElementById('searchbox')
var searchbtn=document.getElementById('searchbtn')
var menudropdwn=document.getElementById("menu-dropdwn")
var menubtn=document.getElementById("menubtn")
var signup=document.getElementById("sign-up-div")
var signin=document.getElementById('sign-in-div')
var signinbtn=document.getElementById("singin-btn-s")
var signupbtn=document.getElementById("sign-up-btn-s")
var signindiv=document.getElementById("signin-div")
var canclebtn=document.getElementById('canclebutton')









function tutbtne(){
   if(tutdropdwm.style.display=='flex'){
    tutdropdwm.style.display='none'
    algomenu.style.display='none'
    dsmenu.style.display='none'
    langmenu.style.display='none' 
    intmenu.style.display='none'
    gatemenu.style.display='none'
    isromenu.style.display='none'
    isroarr.style.transform='rotate(0deg)'
    garr.style.transform='rotate(0deg)'
    algoarr.style.transform='rotate(0deg)'
    tutarr.style.transform='rotate(0deg)'
    dsmenu.style.transform='rotate(0deg)'
    lngarr.style.transform='rotate(0deg)'
    intarr.style.transform='rotate(0deg)'
    jobarr.style.transform='rotate(0deg)'
    stdarr.style.transform='rotate(0deg)'
    stddropdwn.style.display='none'
    jobdropdwn.style.display='none'
   }
   else{
    tutdropdwm.style.display='flex'
    tutarr.style.transform='rotate(180deg)'
    jobdropdwn.style.display='none'
    stddropdwn.style.display='none'
    jobarr.style.transform='rotate(0deg)'
    stdarr.style.transform='rotate(0deg)'
   }
}
algobtn.addEventListener('click',function(){
    if(tutdropdwm.style.display=='none'){
        algomenu.style.display='none'
    }
    else if(algomenu.style.display=='flex'){
        algomenu.style.display='none'
        algoarr.style.transform='rotate(0deg)'
    }
    else{
        algomenu.style.display='flex'
        algoarr.style.transform='rotate(180deg)'
    }
})

function dsbtnclick(){
    if(tutdropdwm.style.display=='none'){
        dsmenu.style.display='none'
    }
    else if(dsmenu.style.display=='flex'){
        dsmenu.style.display='none'
        dsarr.style.transform='rotate(0deg)'
    }
    else{
        dsmenu.style.display='flex'
        dsarr.style.transform='rotate(180deg)'
    }
}
function langbtnclick(){
    if(tutdropdwm.style.display=='none'){
        langmenu.style.display='none'
    }
    else if(langmenu.style.display=='flex'){
        langmenu.style.display='none'
        lngarr.style.transform='rotate(0deg)'
    }
    else{
        langmenu.style.display='flex'
        lngarr.style.transform='rotate(180deg)'
    }
}
function intbtnclick(){
    if(tutdropdwm.style.display=='none'){
        intmenu.style.display='none'
    }
    else if(intmenu.style.display=='flex'){
        intmenu.style.display='none'
        intarr.style.transform='rotate(0deg)'
    }
    else{
        intmenu.style.display='flex'
        intarr.style.transform='rotate(180deg)'
    }
}
function gatebtnclick(){
    if(tutdropdwm.style.display=='none'){
        gatemenu.style.display='none'
    }
    else if(gatemenu.style.display=='flex'){
        gatemenu.style.display='none'
        garr.style.transform='rotate(0deg)'
    }
    else{
        gatemenu.style.display='flex'
        garr.style.transform='rotate(180deg)'
    }
}
function isrobtnclick(){
    if(tutdropdwm.style.display=='none'){
        isromenu.style.display='none'
    }
    else if(isromenu.style.display=='flex'){
        isromenu.style.display='none'
        isroarr.style.transform='rotate(0deg)'
    }
    else{
        isromenu.style.display='flex'
        isroarr.style.transform='rotate(180deg)'
    }
}
function stdbtnclick(){
    if(stddropdwn.style.display=='flex'){
        stddropdwn.style.display='none'
        tutdropdwm.style.display='none'
        jobdropdwn.style.display='none'
        jobarr.style.transform='rotate(0deg)'
        tutarr.style.transform='rotate(0deg)'
        stdarr.style.transform='rotate(0deg)'
    }
    else{
        tutdropdwm.style.display='none'
        stddropdwn.style.display='flex'
        jobdropdwn.style.display='none'
        jobarr.style.transform='rotate(0deg)'
        tutarr.style.transform='rotate(0deg)'
        stdarr.style.transform='rotate(180deg)'
    }
}
function jobbtnclick(){
    if(jobdropdwn.style.display=='flex'){
        stddropdwn.style.display='none'
        tutdropdwm.style.display='none'
        jobdropdwn.style.display='none'
        jobarr.style.transform='rotate(0deg)'
        stdarr.style.transform='rotate(0deg)'
        tutarr.style.transform='rotate(0deg)'
    }
    else{
        tutdropdwm.style.display='none'
        stddropdwn.style.display='none'
        jobdropdwn.style.display='flex'
        tutarr.style.transform='rotate(0deg)'
        stdarr.style.transform='rotate(0deg)'
        jobarr.style.transform='rotate(180deg)'
    }
}
searchbtn.addEventListener('click',function(){
    if(searchbox.style.display=='block'){
        searchbox.style.display='none'
    }
    else{
        searchbox.style.display='block'
        
    }
})
searchbox.addEventListener('keyup',function(event){
    if(event.keyCode===13){
        alert('Cant Find  '+searchbox.value)
    }
})

function menubtnclicked(){
if(menudropdwn.style.display=='block'){
    menudropdwn.style.display='none'
}
else{
    menudropdwn.style.display='block'
    
}
}

signupbtn.addEventListener('click',function(){
    
   signup.style.display='block'
   signin.style.display='none'
   signupbtn.style.backgroundColor='darkgray'
   signinbtn.style.backgroundColor='rgb(235, 229, 229)'
   
})
signinbtn.addEventListener('click',function(){
    signin.style.display='block'
    signup.style.display='none'
    signinbtn.style.backgroundColor='darkgray'
   signupbtn.style.backgroundColor='rgb(235, 229, 229)'
    
    
 })
 function singinupbtnclick(){
  if(signindiv.style.display=='block')  
  {
    signindiv.style.display='none'
  }
  else{
    signindiv.style.display='block'
  }
 }
 canclebtn.addEventListener('click',function(){
    signindiv.style.display='none'
 })