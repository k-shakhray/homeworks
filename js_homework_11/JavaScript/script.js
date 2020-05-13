let buttons = document.querySelectorAll('.btn');

addEventListener('keydown', function (event) {
   switch (event.keyCode) {
       case 13:
           buttons.forEach(function (item) {
               if(item.style.background === 'blue') item.style.background = '';
               if(item.textContent === 'Enter') item.style.background = 'blue'
           });
           break;
       case 83:
           buttons.forEach(function (item) {
               if(item.style.background === 'blue') item.style.background = '';
               if(item.textContent === 'S') item.style.background = 'blue'
           });
           break;
       case 69:
           buttons.forEach(function (item) {
               if(item.style.background === 'blue') item.style.background = '';
               if(item.textContent === 'E') item.style.background = 'blue'
           });
           break;
       case 79:
           buttons.forEach(function (item) {
               if(item.style.background === 'blue') item.style.background = '';
               if(item.textContent === 'O') item.style.background = 'blue'
           });
           break;
       case 78:
           buttons.forEach(function (item) {
               if(item.style.background === 'blue') item.style.background = '';
               if(item.textContent === 'N') item.style.background = 'blue'
           });
           break;
       case 76:
           buttons.forEach(function (item) {
               if(item.style.background === 'blue') item.style.background = '';
               if(item.textContent === 'L') item.style.background = 'blue'
           });
           break;
       case 90:
           buttons.forEach(function (item) {
               if(item.style.background === 'blue') item.style.background = '';
               if(item.textContent === 'Z') item.style.background = 'blue'
           });
           break;
   }
});