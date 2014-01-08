function Numbers() {
}

Numbers.prototype.evaluateArgs = function(){
  for (var i=0; i <arguments.length; i++)
  {
    if(typeof arguments[i] != "number"){
    	return false;
    }
  }
  return true;
}