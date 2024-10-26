import './style.css'

// script.js
// document.getElementById('toggleButton').addEventListener('click', function() {
//   const section = document.getElementById('hiddenSection');
//   const button = document.getElementById('toggleButton'); 
  
//   if (section.classList.contains('hidden')) {
//     section.classList.remove('hidden');
//     button.innerHTML = 'Hide Section';
//   } else {
//     section.classList.add('hidden');
//     button.innerHTML = 'Show Section';
//   }
// });


const number =[1,2,3,4,5,6,7,8]

const isEven =()=>{
  number.forEach((num)=>{
    console.log(num)
  })
}

isEven()