var loadingScreen = document.querySelector("#loadingScreen");
var mainContent = document.querySelector(".mainContent");
mainContent.style.display = 'none';

window.addEventListener('load', function() {
  setTimeout(function() {
    loadingScreen.style.display = 'none'; 
    mainContent.style.display = 'block'; 
  }, 4000); 
});