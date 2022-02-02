// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let heartsCollection = document.querySelectorAll('.like-glyph')

for (let heart of heartsCollection){
  heart.addEventListener('click', likeHeart)
}

function likeHeart(event){
  let heart = event.target
  mimicServerCall()
  .then( resp => {
    if ( heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART
      heart.className = 'activated-heart'
    }else {
      heart.innerText = EMPTY_HEART
      heart.className = ''
    }
  })
  .catch( resp => {
    let modal = document.querySelector('#modal')
    modal.className = ''
    let p = document.querySelector('#modal-message')
    p.innerHTML = resp
    setTimeout(() => {
      modal.className = 'hidden'
    }, 3000);
  })

}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
