let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ecell_logo.png') {
      myImage.setAttribute('src','images/iith.png');
    } else {
      myImage.setAttribute('src','images/ecell_logo.png');
    }
}
