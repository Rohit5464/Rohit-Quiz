import readlineSync from 'readline-sync';
import chalk from 'chalk';

const r = chalk.bold.red;
const bg = chalk.bold.green;
const b = chalk.blue;
const g = chalk.green;
const m = chalk.magenta;
const c = chalk.cyan;
const rb = chalk.redBright;
const y = chalk.yellow;
const bw = chalk.bgWhite;
const bl = chalk.black;
var name = readlineSync.question("Type your name Bro! ")
console.log(b("Welcome to the quiz " + r(name.toUpperCase() )+ "\n"))
var score = 0;

function quiz(option, correct) {
  if (option === correct) {
    console.log(g("Congrats, you got it right! \n"));
    score++;
  } else {
    console.log(rb("You dumb, do u really know Rohit? \n"))
    score--;
  }
}
var ques = ["Q1: What is my name?", "Q2: What is my favourite color?",
  "Q3: What is my age?", "Q4: How do i work?", "Q5: What do i prefer in smoking?"]
var ans = [
  ["1: Mohit ", "2: Sohit ", "3: Rohit ", "4: Smart"],
  ["1: Grey ", "2: White ", "3: Black ", "4: Brown "],
  ["1: 23   ", "2: 21   ", "3: 22   ", "4: 20"],
  ["1: Don't know ", "2: Smartly ", "3: Slowly ", "4: Irresponsibly"],
  ["1: Leaves ", "2: Cigarette ", "3: Oxygen ", "4: Nothing"]
]
var correct = ["3: Rohit ", "3: Black ", "2: 21   ", "1: Don't know ", "4: Nothing"]

for (var i = 0; i < ques.length; i++) {
  console.log(bw(bl(ques[i])));
  console.log(c(ans[i][0], ans[i][1], ans[i][2], ans[i][3]))
  var a = readlineSync.question("Type your option: ")
  quiz(ans[i][a - 1], correct[i]);
}
if (score >= ques.length-1) {
  console.log(("Your final score is " + m(score) + y(" YOU FUCK'IN SMART")))
} else
  console.log(("Your final score is " + m(score) + y("\nYOU DUMB LOSER!\n") + bw(bg("Only Rohit got the highest score ever!"))))
