let count = 0;

const counter = document.querySelector('#counter')
const buttons = document.querySelectorAll('.btn')

buttons.forEach(function (button){
 button.addEventListener('click', function(e) {
     const styles = e.currentTarget.classList;
     if(styles.contains('increase')) {
         count++;
     } 
     else if (styles.contains('decrease')) {
         count--;
     }
     else {
         count = 0;
     }
     if(count > 0) {
         counter.style.color = 'green';
     }
     if(count < 0) {
         counter.style.color = 'red';
     }
     if (count === 0) {
         counter.style.color = 'black';
     }
     counter.textContent = count;
     });
 });
