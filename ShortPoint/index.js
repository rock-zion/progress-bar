const finishProgress = document.getElementById('finish-progress');
const progressBar = document.getElementsByClassName('progres-bar');

finishProgress.addEventListener('click', handleFinshProgress);

function handleFinshProgress() {
  for (var i = 0; i < progressBar.length; i++) {
    progressBar[i].classList.add('width-100');
    progressBar[i].innerHTML = '100%';
  }
}
