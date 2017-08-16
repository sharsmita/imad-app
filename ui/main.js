//console.log('Loaded!');
//var counter=0;
alert("in main.js");
var button = document.getElementById('counter');
button.onclick = function(){
   // counter = counter+1;
    alert("on click");
    
 var request = new XMLHttpRequest();
 
 request.onreadystatechange = function(){
     alert("on ready state change");
     if(request.readyState === XMLHttpRequest.DONE)
     {
         alert("on ready state");
         if(request.status === 200)
         {
             //alert("on click");
             var counter = request.responseText;
             var span = document.getElementById('count');
             alert(counter.toString());
             span.innerHtml = counter.toString();
         }
     }
 };
 
 request.open('GET','http://sharsmita.imad.hasura-app.io/counter',true);
 request.send(null);
 
};