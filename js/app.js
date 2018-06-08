function rollDice(){
    var die1 = document.getElementById('dice1');
    var status = document.getElementById('status')
    var d1= Math.ceil(Math.random() * 6);
    die1.innerHTML = d1;
    status.innerHTML = "you rolled a " + d1 + "."
}