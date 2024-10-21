const cell = [
  [
    document.getElementById("td-1"),
    document.getElementById("td-2"),
    document.getElementById("td-3"),
  ],
  [
    document.getElementById("td-4"),
    document.getElementById("td-5"),
    document.getElementById("td-6"),
  ],
  [
    document.getElementById("td-7"),
    document.getElementById("td-8"),
    document.getElementById("td-9"),
  ],
];
const overlayBox = document.createElement("div");
overlayBox.id = ""
let XorOWins = document.getElementById("decide");
let popUp = document.getElementById("winOrLose");
let firstPlayer = "O";
let secondPlayer = "X";
let count = 0;
let gameOver = false;

let theOSpace = document.getElementById("theO");
let theXSpace = document.getElementById("theX");
let drawScene = document.getElementById("theDraw");
let theBoard = document.getElementById("board-tic");
let theGame = document.getElementById("change");
let theBody = document.getElementById("black");
let setDraw = document.getElementById("drawing");
let setXWins = document.getElementById("valueforX");
let theOValue = document.getElementById("valueforO");
let drawPop = document.getElementById("draw");
for (let i = 0; i < cell.length; i++) {
  for (let j = 0; j < cell[i].length; j++) {
    cell[i][j].addEventListener("click", () => {
      if (cell[i][j].textContent === "") {
        // cell[i][j].addEventListener("mouseover", () => {
        //   cell[i][j].textContent = secondPlayer;
        //   cell[i][j].style.backgroundColor = "red";
        // });
        if (count % 2 === 0) {
          cell[i][j].textContent = secondPlayer;

          count++;
        } else {
          cell[i][j].textContent = firstPlayer;
          count++;
        }
        if (
          cell[0][0].textContent !== "" &&
          cell[0][1].textContent !== "" &&
          cell[0][2].textContent !== ""
        ) {
          if (
            cell[0][0].textContent === secondPlayer &&
            cell[0][1].textContent === secondPlayer &&
            cell[0][2].textContent === secondPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = secondPlayer;
            cell[0][0].style.color = "red";
            cell[0][1].style.color = "red";
            cell[0][2].style.color = "red";
            xWins();
            blurIt();
          } else if (
            cell[0][0].textContent === firstPlayer &&
            cell[0][1].textContent === firstPlayer &&
            cell[0][2].textContent === firstPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = firstPlayer;
            cell[0][0].style.color = "red";
            cell[0][1].style.color = "red";
            cell[0][2].style.color = "red";
            oWins();
            blurIt();
          }
        }
        if (
          cell[1][0].textContent !== "" &&
          cell[1][1].textContent !== "" &&
          cell[1][2].textContent !== ""
        ) {
          if (
            cell[1][0].textContent === secondPlayer &&
            cell[1][1].textContent === secondPlayer &&
            cell[1][2].textContent === secondPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = secondPlayer;
            cell[1][0].style.color = "red";
            cell[1][1].style.color = "red";
            cell[1][2].style.color = "red";
            xWins();
            blurIt();
          } else if (
            cell[1][0].textContent === firstPlayer &&
            cell[1][1].textContent === firstPlayer &&
            cell[1][2].textContent === firstPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = firstPlayer;
            cell[1][0].style.color = "red";
            cell[1][1].style.color = "red";
            cell[1][2].style.color = "red";
            oWins();
            blurIt();
          }
        }
        if (
          cell[2][0].textContent !== "" &&
          cell[2][1].textContent !== "" &&
          cell[2][2].textContent !== ""
        ) {
          if (
            cell[2][0].textContent === secondPlayer &&
            cell[2][1].textContent === secondPlayer &&
            cell[2][2].textContent === secondPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = secondPlayer;
            cell[2][0].style.color = "red";
            cell[2][1].style.color = "red";
            cell[2][2].style.color = "red";
            xWins();
            blurIt();
          } else if (
            cell[2][0].textContent === firstPlayer &&
            cell[2][1].textContent === firstPlayer &&
            cell[2][2].textContent === firstPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = firstPlayer;
            cell[2][0].style.color = "red";
            cell[2][1].style.color = "red";
            cell[2][2].style.color = "red";
            oWins();
            blurIt();
          }
        }
        if (
          cell[0][0].textContent !== "" &&
          cell[1][0].textContent !== "" &&
          cell[2][0].textContent !== ""
        ) {
          if (
            cell[0][0].textContent === secondPlayer &&
            cell[1][0].textContent === secondPlayer &&
            cell[2][0].textContent === secondPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = secondPlayer;
            cell[0][0].style.color = "red";
            cell[1][0].style.color = "red";
            cell[2][0].style.color = "red";
            xWins();
            blurIt();
          } else if (
            cell[0][0].textContent === firstPlayer &&
            cell[1][0].textContent === firstPlayer &&
            cell[2][0].textContent === firstPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = firstPlayer;
            cell[0][0].style.color = "red";
            cell[1][0].style.color = "red";
            cell[2][0].style.color = "red";
            oWins();
            blurIt();
          }
        }
        if (
          cell[0][1].textContent !== "" &&
          cell[1][1].textContent !== "" &&
          cell[2][1].textContent !== ""
        ) {
          if (
            cell[0][1].textContent === secondPlayer &&
            cell[1][1].textContent === secondPlayer &&
            cell[2][1].textContent === secondPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = secondPlayer;
            cell[0][1].style.color = "red";
            cell[1][1].style.color = "red";
            cell[2][1].style.color = "red";
            xWins();
            blurIt();
          } else if (
            cell[0][1].textContent === firstPlayer &&
            cell[1][1].textContent === firstPlayer &&
            cell[2][1].textContent === firstPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = firstPlayer;
            cell[0][1].style.color = "red";
            cell[1][1].style.color = "red";
            cell[2][1].style.color = "red";
            oWins();
            blurIt();
          }
        }
        if (
          cell[0][2].textContent !== "" &&
          cell[1][2].textContent !== "" &&
          cell[2][2].textContent !== ""
        ) {
          if (
            cell[0][2].textContent === secondPlayer &&
            cell[1][2].textContent === secondPlayer &&
            cell[2][2].textContent === secondPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = secondPlayer;
            cell[0][2].style.color = "red";
            cell[1][2].style.color = "red";
            cell[2][2].style.color = "red";
            xWins();
            blurIt();
          } else if (
            cell[0][2].textContent === firstPlayer &&
            cell[1][2].textContent === firstPlayer &&
            cell[2][2].textContent === firstPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = firstPlayer;
            cell[0][2].style.color = "red";
            cell[1][2].style.color = "red";
            cell[2][2].style.color = "red";
            oWins();
            blurIt();
          }
        }
        if (
          cell[0][0].textContent !== "" &&
          cell[1][1].textContent !== "" &&
          cell[2][2].textContent !== ""
        ) {
          if (
            cell[0][0].textContent === secondPlayer &&
            cell[1][1].textContent === secondPlayer &&
            cell[2][2].textContent === secondPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = secondPlayer;
            cell[0][0].style.color = "red";
            cell[1][1].style.color = "red";
            cell[2][2].style.color = "red";
            xWins();
            blurIt();
          } else if (
            cell[0][0].textContent === firstPlayer &&
            cell[1][1].textContent === firstPlayer &&
            cell[2][2].textContent === firstPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = firstPlayer;
            cell[0][0].style.color = "red";
            cell[1][1].style.color = "red";
            cell[2][2].style.color = "red";
            oWins();
            blurIt();
          }
        }
        if (
          cell[0][2].textContent !== "" &&
          cell[1][1].textContent !== "" &&
          cell[2][0].textContent !== ""
        ) {
          if (
            cell[0][2].textContent === secondPlayer &&
            cell[1][1].textContent === secondPlayer &&
            cell[2][0].textContent === secondPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = secondPlayer;
            cell[0][2].style.color = "red";
            cell[1][1].style.color = "red";
            cell[2][0].style.color = "red";
            xWins();
            blurIt();
          } else if (
            cell[0][2].textContent === firstPlayer &&
            cell[1][1].textContent === firstPlayer &&
            cell[2][0].textContent === firstPlayer
          ) {
            popUp.style.display = "flex";
            XorOWins.textContent = firstPlayer;
            cell[0][2].style.color = "red";
            cell[1][1].style.color = "red";
            cell[2][0].style.color = "red";
            oWins();
            blurIt();
          }
        }
        checkGameOver();
        checkScores();
      }
    });
  }
}
function checkGameOver() {
  let cellsFilled = 0;
  for (let i = 0; i < cell.length; i++) {
    for (let j = 0; j < cell[i].length; j++) {
      if (cell[i][j].textContent !== "") {
        cellsFilled++;
      }
    }
  }
  if (cellsFilled === 9 && popUp.style.display !== "flex") {
    drawPop.style.display = "flex";
    drawCase();
    blurIt();
  }
}
const blurIt = () => {
  theBoard.style.filter = "blur(10px)";
};
const drawCase = () => {
  setDraw.style.animation = "changing 2s linear infinite";
  drawScene.style.backgroundColor = "black";
  drawScene.style.color = "white";
;
};
let table1 = document.getElementById("td-1");
let table2 = document.getElementById("td-2");
let table3 = document.getElementById("td-3");
let table4 = document.getElementById("td-4");
let table5 = document.getElementById("td-5");
let table6 = document.getElementById("td-6");
let table7 = document.getElementById("td-7");
let table8 = document.getElementById("td-8");
let table9 = document.getElementById("td-9");

const checkScores = () => {
  let cellsCompleted = 0;
  for (let i = 0; i < cell.length; i++) {
    for (let j = 0; j < cell[i].length; j++) {
      if (cell[i][j].textContent !== "") {
        cellsCompleted++;
      }
    }
  }
  if (cellsCompleted === 9) {
    drawRefresh();
  }
};
let overlay = document.createElement("div")
const drawRefresh = () => {
  let drawValue = parseInt(localStorage.getItem("draw")) || 0;
  drawValue++;
  localStorage.setItem("draw", drawValue);
  setDraw.innerText = drawValue;
};
const drawset = () => {
  let drawValue = parseInt(localStorage.getItem("draw")) || 0;
  localStorage.setItem("draw", drawValue);
  setDraw.innerText = drawValue;
};
const setTheX = () => {
  let xValueWins = parseInt(localStorage.getItem("x-wins")) || 0;
  localStorage.setItem("x-wins", xValueWins);
  setXWins.innerText = xValueWins;
};
const xWins = () => {
  let xValueWins = parseInt(localStorage.getItem("x-wins")) || 0;
  xValueWins++;
  localStorage.setItem("x-wins", xValueWins);
  setXWins.innerText = xValueWins;
  document.body.appendChild(overlay);
  overlay.id = "overlay"
  setXWins.style.animation = "changing 2s linear infinite";
};
const oWins = () => {
  let oValueWins = parseInt(localStorage.getItem("o-wins")) || 0;
  oValueWins++;
  localStorage.setItem("o-wins", oValueWins);
  theOValue.innerText = oValueWins;
  theOValue.style.animation = "changing 2s linear infinite";
  document.body.appendChild(overlay);
  overlay.id = "overlay"
};
const setTheO = () => {
  let oValueWins = parseInt(localStorage.getItem("o-wins")) || 0;
  localStorage.setItem("o-wins", oValueWins);
  theOValue.innerText = oValueWins;
};
setTheO();
setTheX();
drawset();

let reloadButton1 = document.getElementById("reloading");
reloadButton1.addEventListener("click", () => {
  location.reload();
});
let reloadButton = document.getElementById("reloadButton");
reloadButton.addEventListener("click", () => {
  location.reload();
});
