var btn = document.getElementById("f");
     var btn1= document.getElementById("o");
     var btn2= document.getElementById("r");
     var btn3= document.getElementById("m");
 
  var buttonClick= function() {
      if (btn.style.display == 'none') {
           btn.style.display ='block';
      }else {
           btn.style.display ='none';
      }
 
      if (btn1.style.display == 'none'){
           btn1.style.display ='block';
      }else{
           btn1.style.display ='none';
      }
 
      if (btn2.style.display == 'none'){
           btn2.style.display ='block';
      }else{
           btn2.style.display ='none';
      }
 
      if (btn3.style.display == 'none'){
           btn3.style.display ='block';
      }else{
           btn3.style.display ='none';
      }
     
  }