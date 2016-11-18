//inject code into send method
var s2=AsyncRequest.prototype.send;
AsyncRequest.prototype.send=function(isRetry){
  if(typeof this.data.body=="string"){
  this.data.body="$:"+Aes.Ctr.encrypt(this.data.body,"dix",256);
}
  s2.apply(this,isRetry)

  ;}
//decrypt
  $(".__i_").bind("DOMSubtreeModified", function() {
});
