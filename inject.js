
//inject code into send method
var s2=AsyncRequest.prototype.send;
AsyncRequest.prototype.send=function(isRetry){
  if(typeof this.data.body=="string"){
  this.data.body="$:"+Aes.Ctr.encrypt(this.data.body,"dix",256);
}
  s2.apply(this,isRetry)

  ;}
//decrypt
  /*$(".__i_").bind("DOMSubtreeModified", function() {
    console.log("oi")
    var msgs=document.getElementsByClassName("_58nk")
    i=0;
    while (i<msgs.length){
      if(msgs[i].innerHTML.lastIndexOf("$:", 0) === 0){
        console.log(msgs[i].innerHTML)
        Aes.Ctr.decrypt(msgs[i].innerHTML,"dix")
      }
      i=i+1;
    }
});
*/
