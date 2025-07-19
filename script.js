let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let gameContainer = document.querySelector(".game-container");

let turn0 = true; //PlayerX , Player0

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn0 = true;
  enableboxes();
  msgContainer.classList.add("hide");
  gameContainer.style.display = "block";
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      box.style.color = "#26ffcb";
      turn0 = false;
    } else {
      box.innerText = "X";
      box.style.color = "#ffb326ff";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
let enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showDraw = () => {
  msg.innerText = "😐 It's a Draw!";
  msgContainer.classList.remove("hide");
  gameContainer.style.display = "none";
  disableboxes();
};

  const showWinner = (winner) => {
    msg.innerText = `🎉 Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    gameContainer.style.display = "none";
    disableboxes();
  };

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos1Val != "" && pos1Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }

  // Check for draw
  let isDraw = true;
  boxes.forEach((box) => {
    if (box.innerText === "") {
      isDraw = false;
    }
  });

  if (isDraw) {
    showDraw();
  }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
