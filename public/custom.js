let girchiWindow;
window.addEventListener("message", (event) => {
  if (event.origin !== 'http://localhost:3000') {
    console.log("Returned");
    console.log(event.data);
    girchiWindow.close();
  }
});

const login = () => {
  girchiWindow = window.open("http://girchi.docker.localhost");
  setTimeout(function (event) {
    console.log("New Window Loaded");
    girchiWindow.postMessage("Hi There from react!", '*');
  }, 3000)
}