const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
// document.querySelector('html').addEventListener('click', function() {
//     alert('Ouch! Stop poking me!');
//   });
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ecell_logo.png') {
      myImage.setAttribute('src','images/iith.png');
    } else {
      myImage.setAttribute('src','images/ecell_logo.png');
    }
}