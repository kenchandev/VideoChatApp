//  If the standard, default name for getUserMedia() is already supported in the browser, use it. Otherwise, use Mozilla's, Google's or Microsoft's implementation of it.
navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia ||
navigator.webkitGetUserMedia || navigator.msGetUserMedia;

// Define callback function that is executed if user's webcam and microphone is successfully accessed.
function onSuccess() {
  console.log("Successful connection made to access webcam and microphone");
}

// Define callback function that is executed if the user's webcam and microphone cannot be accessed due inaccessibility or technical issue.
function onError() {
  throw new Error("There has been a problem accessing the webcam and microphone");
}

//  Self-executing function.
(function(){
  //  Check if the getUserMedia() method is supported by the browser.
  if (navigator.getUserMedia) {
    navigator.getUserMedia({
      video: true,
      audio: true
    }, onSuccess, onError);
  } 
  else {
  // Throw an error if the getUserMedia() method is unsupported by the browser.
    throw new Error("Sorry, getUserMedia() is not supported in your browser");
  } 
})();
  