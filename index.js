let newGame = document.getElementById('newGame');
let multiButton = document.getElementById('multi');
multiButton.addEventListener('click', () => {
    alert('Coming Soon...');
})
let settingButton = document.getElementById('setting');
settingButton.addEventListener('click', () => {
    alert("Nothing Yet");
})
const loading = () => {
    const entirePage = document.createElement("div")
    entirePage.id = "entirePage"
    document.body.appendChild(entirePage)
    const loader = document.createElement("div")
    const loaderDiv = document.createElement("div")
    loader.className = "loader"
    loaderDiv.className = "loaderDiv"
    loaderDiv.appendChild(loader)
    entirePage.appendChild(loaderDiv)
    setInterval(() => {
        document.body.removeChild(entirePage)
        loaderDiv.removeChild(loader)
        entirePage.removeChild(loaderDiv)
    }, 5000);
}
newGame.addEventListener('click', () => {
    localStorage.clear();
    loading();
    console.log("Hee")
})