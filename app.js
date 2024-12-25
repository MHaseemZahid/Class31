var container = document.getElementById('dice-container')
console.log(container);

function fun_Random() {
    var rannum = Math.ceil(Math.random() * 6)
    if (rannum === 1) {
        container.innerHTML = `<div class="dice dice-1 animate__animated animate__flip">
                       <span class="dot center"></span >
                 </div >`
    }
    else
  if (rannum === 2) {
    container.innerHTML = `<div class="dice dice-2 animate__animated animate__flip">
        <span class="dot top-left"></span>
         <span class="dot bottom-right"></span>
       </div>`
 }
 if (rannum === 3) {
     container.innerHTML = ` <div class="dice dice-3 animate__animated animate__flip">
         <span class="dot top-left"></span>
         <span class="dot center"></span>
         <span class="dot bottom-right"></span>
       </div>`
 }
if (rannum === 4) {
     container.innerHTML = `  <div class="dice dice-4 animate__animated animate__flip">
         <span class="dot top-left"></span>
         <span class="dot top-right"></span>
         <span class="dot bottom-left"></span>
         <span class="dot bottom-right"></span>
       </div>`
 }
 if (rannum === 5) {
     container.innerHTML = ` <div class="dice dice-5 animate__animated animate__flip">
         <span class="dot top-left"></span>
         <span class="dot top-right"></span>
         <span class="dot center"></span>
         <span class="dot bottom-left"></span>
         <span class="dot bottom-right"></span>
       </div>`
 }
 if (rannum === 6) {
     container.innerHTML = `<div class="dice dice-6  animate__animated animate__flip">
         <span class="dot top-left"></span>
         <span class="dot top-right"></span>
         <span class="dot middle-left"></span>
         <span class="dot middle-right"></span>
         <span class="dot bottom-left"></span>
         <span class="dot bottom-right"></span>
       </div>`
 }

}
















// function fun_Random() {
//     // --var rannum = Math.ceil(Math.random() * 6);
// var ran1num = Math.ceil(Math.random()*6)
//     console.log(ran1num);
//     if (rannum === 1) {
//         container.innerHTML = `<div class="dice dice - 1 animate__animated animate__flip">
//             < span class= "dot center" ></span >
//       </div >`
//  } else
//  if (rannum === 2) {
//     container.innerHTML = `<div class="dice dice-2 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot bottom-right"></span>
//       </div>`
// }
// if (rannum === 3) {
//     container.innerHTML = ` <div class="dice dice-3 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot center"></span>
//         <span class="dot bottom-right"></span>
//       </div>`
// }
// if (rannum === 4) {
//     container.innerHTML = `  <div class="dice dice-4 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot top-right"></span>
//         <span class="dot bottom-left"></span>
//         <span class="dot bottom-right"></span>
//       </div>`
// }
// if (rannum === 5) {
//     container.innerHTML = ` <div class="dice dice-5 animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot top-right"></span>
//         <span class="dot center"></span>
//         <span class="dot bottom-left"></span>
//         <span class="dot bottom-right"></span>
//       </div>`
// }
// if (rannum === 6) {
//     container.innerHTML = `<div class="dice dice-6  animate__animated animate__flip">
//         <span class="dot top-left"></span>
//         <span class="dot top-right"></span>
//         <span class="dot middle-left"></span>
//         <span class="dot middle-right"></span>
//         <span class="dot bottom-left"></span>
//         <span class="dot bottom-right"></span>
//       </div>`
// }



// }

