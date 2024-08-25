const rulesBtn = document.getElementById('btn')
const closeBtn = document.querySelector(".close")
const gameRule = document.querySelector(".game-rule")
const X = document.querySelector(".X")
const computerScore = document.getElementById("computerScore")
const yourScore = document.getElementById("yourScore")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const line = document.querySelector(".line")
const computerButton = document.querySelectorAll(".comp")
const computerRandom = document.getElementById("comp-scissor")
const computerRandomBG = document.getElementById("comp-scissorBG")





let score = 0;
let scoreComputer = 0

pickOption = {
    "rock":["./images/ROCK.png","./images/rockBG.png"],
    "paper":["./images/PAPER.png","./images/paperBG.png"],
    "scissor":["./images/SCISSOR.png","./images/scissorBG.png"],
}

const pickBtn = (allBtn) => {
    const game = document.querySelector(".game")
    game.style.display = "none"
    const hidden = document.querySelector(".hidden")
    hidden.style.display = "flex"
    const showRock = document.getElementById("show-rock")
    const rockBG = document.getElementById("show-rockBG")
    showRock.src = pickOption[allBtn][0]
    rockBG.src = pickOption[allBtn][1]
    let choice = pcPick(allBtn)
    result(allBtn,choice)
}

const pcPick = () => {
    allBtn = ["rock", "paper", "scissor"]
    choice = allBtn[Math.floor(Math.random() * 3)]
    computerRandom.src = pickOption[choice][0]
    computerRandomBG.src = pickOption[choice][1]
    return choice
}

const p = document.querySelector(".show-result p")
const showResultBtn = document.querySelector(".show-result button")
const nextbtn = document.querySelector(".nextbtn")
const userStyle = document.querySelector(".user-ellipse")
const computerStyle = document.querySelector(".pc-ellipse")

const result = (yourChoice,computerChoice) => {
    if(yourChoice === computerChoice){
        announceResult("TIE UP")
        p.style.display = "none"
        showResultBtn.textContent = "REPLAY"
        showRock.classList.add("hidden-rock")
    }

    // ------------------you win--------------------------------

    if(yourChoice == "rock" && computerChoice == "scissor"){
        announceResult("YOU WIN")
        userScore(score += 1)
        rulesBtn.classList.add("rulesBtnShow")
        nextbtn.style.display = "block"
        userStyle.style.display = "block"
    }
    
    if(yourChoice == "scissor" && computerChoice == "paper"){
        announceResult("YOU WIN")
        userScore(score += 1)
        rulesBtn.classList.add("rulesBtnShow")
        nextbtn.style.display = "block"
        userStyle.style.display = "block"
    }
    if(yourChoice == "paper" && computerChoice == "rock"){
        announceResult("YOU WIN")
        userScore(score += 1)
        rulesBtn.classList.add("rulesBtnShow")
        nextbtn.style.display = "block"
        userStyle.style.display = "block"
    }

    // --------------------computer win-------------------------------

    if(yourChoice == "rock" && computerChoice == "paper"){
        announceResult("YOU LOST")
        pcScore(scoreComputer += 1)
        computerStyle.style.display = "block"
    }
    
    if(yourChoice == "scissor" && computerChoice == "rock"){
        announceResult("YOU LOST")
        pcScore(scoreComputer += 1)
        computerStyle.style.display = "block"
    }
    if(yourChoice == "paper" && computerChoice == "scissor"){
        announceResult("YOU LOST")
        pcScore(scoreComputer += 1)
        computerStyle.style.display = "block"
    }
}
const announceResult = (result) => {
    const resultText = document.querySelector(".result-text")
    resultText.innerText = result
}

const userScore = (setScore) => {
    yourScore.innerText = setScore
    localStorage.setItem("yourScore", score)
}

const pcScore = (setScore) => {
    computerScore.innerText = setScore
    localStorage.setItem("computerScore", scoreComputer)
}

const loadTheScore = () => {
    const storedYourScore = localStorage.getItem("yourScore")
    const storedComputerScore = localStorage.getItem("computerScore")

    if(storedYourScore){
        score = parseInt(storedYourScore)
        yourScore.innerText = score
    }
    if(storedComputerScore){
        scoreComputer = parseInt(storedComputerScore)
        computerScore.innerText = scoreComputer
    }

}
loadTheScore()

const playAgain = () => {
    const game = document.querySelector(".game")
    game.style.display = "block"
    const hidden = document.querySelector(".hidden")
    hidden.style.display = "none"
    nextbtn.style.display = "none"
    rulesBtn.classList.remove("rulesBtnShow")
    p.style.display = "block"
    userStyle.style.display = "none"
    computerStyle.style.display = "none"
}

nextbtn.addEventListener("click", () => {
    
})

rulesBtn.addEventListener("click", () => {
    gameRule.classList.add('visible')
    X.classList.add("close")
    console.log("btn clicked")
})

closeBtn.addEventListener("click", () => {
    gameRule.classList.remove("visible")
    X.classList.remove("close")
})

