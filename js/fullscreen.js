
function toggleFullscreen() {
  const iframe = document.getElementById('evolveIframe');
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) {
    iframe.msRequestFullscreen();
  } else {
    alert("Fullscreen not supported in this browser.");
  }
}
