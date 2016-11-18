$(document).ready(function(){
  console.log($(".__i_"))
  setInterval(function (){
  var msgs=document.getElementsByClassName("_58nk")
  i=0;
  while (i<msgs.length){
    if(msgs[i].innerHTML.lastIndexOf("$:", 0) === 0){
      console.log(msgs[i].innerHTML.substring(2))
      msgs[i].innerHTML=Aes.Ctr.decrypt(msgs[i].innerHTML.substring(2),"dix",256)
    }
    i=i+1;
  }
},500)
})
