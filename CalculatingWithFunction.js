
//Operators
function plus(number) {
    return " + " + number.toString()
  }
function minus(number) {
    return " - " + number.toString()
  }

function times(number) {
    return " * " + number.toString()
  }

function dividedBy(number) {
    return " / " + number.toString()
  }
  
//Numbers
function zero(callback) {
    value = 0;
    
  if(arguments.length == 0) // Means no parameters are passed  
  {  
      return value
  } 
  else if(arguments.length == 1) // Means one parameter is are passed  
  {  
    return Math.floor(eval(value+arguments[0])); 
  }
}

function one(callback) {
      value = "1";
      
    if(arguments.length == 0) // Means no parameters are passed  
    {  
        return value
    } 
    else if(arguments.length == 1) // Means one parameter is are passed  
    {  
      return Math.floor(eval(value+arguments[0])); 
    }
  }

function two(callback) {
    value = 2;
    
  if(arguments.length == 0) // Means no parameters are passed  
  {  
      return value
  } 
  else if(arguments.length == 1) // Means one parameter is are passed  
  {  
    return Math.floor(eval(value+arguments[0]));  
  }
}

function three(callback) {
  value = 3;
  
if(arguments.length == 0) // Means no parameters are passed  
{  
    return value
} 
else if(arguments.length == 1) // Means one parameter is are passed  
{  
   return Math.floor(eval(value+arguments[0])); 
}
}

function four(callback) {
  value = 4;
  
if(arguments.length == 0) // Means no parameters are passed  
{  
    return value
} 
else if(arguments.length == 1) // Means one parameter is are passed  
{  
  return Math.floor(eval(value+arguments[0])); 
}
}

function five(callback) {
  value = 5;
  
if(arguments.length == 0) // Means no parameters are passed  
{  
    return value
} 
else if(arguments.length == 1) // Means one parameter is are passed  
{  
  return Math.floor(eval(value+arguments[0])); 
}
}

function six(callback) {
  value = 6;
  
if(arguments.length == 0) // Means no parameters are passed  
{  
    return value
} 
else if(arguments.length == 1) // Means one parameter is are passed  
{  
  return Math.floor(eval(value+arguments[0]));  
}
}

function seven(callback) {
  value = 7;
  
if(arguments.length == 0) // Means no parameters are passed  
{  
    return value
} 
else if(arguments.length == 1) // Means one parameter is are passed  
{  
  return Math.floor(eval(value+arguments[0]));  
}
}

function eight(callback) {
  value = 8;
  
if(arguments.length == 0) // Means no parameters are passed  
{  
    return value
} 
else if(arguments.length == 1) // Means one parameter is are passed  
{  
   return Math.floor(eval(value+arguments[0])); 
}
}

function nine(callback) {
  value = 9;
  
if(arguments.length == 0) // Means no parameters are passed  
{  
    return value
} 
else if(arguments.length == 1) // Means one parameter is are passed  
{  
   return Math.floor(eval(value+arguments[0])); 
}
}
  

  

  console.log(eight(dividedBy(three())));




