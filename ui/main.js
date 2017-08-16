console.log('Loaded!');

var button = document.getElementById('counter');
button.onClick = function(){
 var request = new XMLHttpRequest();
 
 request.onreadystatechange = function(){
     
     if(request.readyState === XMLHttpRequest.DONE)
     {
         if(request.status === 200)
         {
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