// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeBtns = document.querySelectorAll('.like');

likeBtns.forEach(likeBtn => {

  const heart = likeBtn.querySelector('.like-glyph');

  likeBtn.addEventListener('click', ()=> {
    mimicServerCall('http://mimicServer.example.com')
    .then(() => {
        heart.innerHTML == FULL_HEART ? heart.innerHTML = EMPTY_HEART : heart.innerHTML = FULL_HEART;      
        heart.className == 'activated-heart' ? heart.className = '' : heart.className = 'activated-heart';
      })
      .catch((error) => {
        const hidden = document.getElementsByClassName('hidden');
        hidden.className == 'hidden' ? hidden.className = '' : hidden.className == 'hidden';
        setTimeout("hidden.class =='hidden", 300);
        // console.log(hidden);
      })
    }
  )  
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
// Backend 
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
