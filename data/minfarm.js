// requires modified app 21 chunk

// checks if lesson is open
if (window['html5Iframe'] === undefined || window['html5Iframe'] === null || window['p1'] === undefined || window['p1'] === null) {
  alert('Please open a lesson.')
} else {
  if (togglemin === 1 || reload === 1) { // sets min farmer to enable
    togglemin = 0;
    reload = 0;
    setInterval(function() {
      html5Iframe.contentWindow.dispatchEvent(new KeyboardEvent('keydown', {
        'key': 'a'
      }));
    }, 1000); // ;)
    alert('Enabled. Click again to disable. You will only gain minutes while inside a lesson.')
    alert("Going onto a new tab will prevent Min Farmer from working. Putting a new tab on a seperate window should solve this.")
  } else { // disables min farmer if clicked again
    location.reload()
  }

}
// patched, also where is the modified appchunk?
