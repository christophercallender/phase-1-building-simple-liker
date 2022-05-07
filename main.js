// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

let likeGlyph = document.querySelectorAll('.like-glyph');
let errorModel = document.querySelector('#modal');
likeGlyph.forEach((e) => e.addEventListener('click', handleClick));

function handleHeart(e) {
   if (e.target.textContent === '♡') {
      e.target.className = 'activated-heart';
      return (e.target.textContent = '♥');
   } else if (e.target.textContent === '♥') {
      e.target.className = 'emty';
      return (e.target.textContent = '♡');
   }
}

function handleClick(e) {
   mimicServerCall(e)
      .then(handleHeart(e))
      .catch(() => {
         errorModel.className = null;
         setTimeout(() => (errorModel.className = 'hidden'), 3000);
      });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         let isRandomFailure = Math.random() < 0.2;
         if (isRandomFailure) {
            reject('Random server error. Try again.');
         } else {
            resolve('Pretend remote server notified of action!');
         }
      }, 300);
   });
}
