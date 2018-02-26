function setup() {
  loadPlayerInfo();
  loadDice();
  loadScorecard();
}

function loadPlayerInfo() {
  document.getElementById("playerName").innerHTML = yahtzee.player.name;
  document.getElementById("picture").src = yahtzee.player.avatar;
}

function loadDice() {
  dieImages = ['./images/defaultAvatar.png', './images/die1.png', './images/die2.png',
   './images/die3.png', './images/die4.png', './images/die5.png', './images/die6.png']
  yahtzee.dice.forEach(function(die, index) {
    img = document.getElementById('die' + index);
    img.src = dieImages[die.sideUp];
//Score Based off Dice side
    if(die.sideUp == 1 && die.saved == true) {
      yahtzee.scoreCard[index = 0].score ++;
    } else if(die.sideUp == 2 && die.saved == true) {
      yahtzee.scoreCard[index = 1].score +=2;
    } else if(die.sideUp == 3 && die.saved == true) {
      yahtzee.scoreCard[index = 2].score +=3;
    } else if(die.sideUp == 4 && die.saved == true) {
      yahtzee.scoreCard[index = 3].score +=4;
    } else if(die.sideUp == 5 && die.saved == true) {
      yahtzee.scoreCard[index = 4].score +=5;
    } else if(die.sideUp == 6 && die.saved == true) {
      yahtzee.scoreCard[index = 5].score +=6;
    }


    if(die.saved) {
      img.className = 'saved';
    } else {
      img.className = '';
    }

});
}

function loadScorecard() {
  topSubtotal = 0;
  yahtzee.scoreCard.forEach(function(scoreCardRow) {
    if (scoreCardRow.top) {
      buildScoreCardRow(scoreCardRow.title, scoreCardRow.score);
      topSubtotal += scoreCardRow.score ;
    }
  });
  buildScoreCardRow('Top Subtotal:', topSubtotal);

  if(topSubtotal >= 65) {
    bonus = 30;
  } else {
    bonus = 0;
  }
  buildScoreCardRow('Top Bonus:', bonus);

  bottomSubtotal = 0;
  yahtzee.scoreCard.forEach(function(scoreCardRow) {
    if (!scoreCardRow.top) {
      buildScoreCardRow(scoreCardRow.title, scoreCardRow.score);
      bottomSubtotal += scoreCardRow.score;
    }
  });
  buildScoreCardRow('Total Score: ', topSubtotal + bonus + bottomSubtotal);
}

function buildScoreCardRow(title, score) {
  tr = document.createElement('tr');
  td1 = document.createElement('td');
  td1.innerHTML = title;
  tr.appendChild(td1);
  td2 = document.createElement('td');
  td2.innerHTML = score;
  td2.className = 'dark';
  td2.onclick = 'yellowBackground()';
  if(td2)
  tr.appendChild(td2);
  document.getElementById('scoreRows').appendChild(tr);
}

function rollDice() {
  //TODO: Do not allow roll if all dice saved
  yahtzee.dice.forEach(function(die) {
    if (die.saved != true) {
      die.sideUp = (Math.floor(Math.random() * 6) +1);
    }
  });
  loadDice();
  if (yahtzee.throwsRemainingInTurn > 0) {
    document.getElementById('rollsRemain').innerHTML = yahtzee.throwsRemainingInTurn -= 1;
  } else {
    document.getElementById('roll').disabled = (yahtzee.throwsRemainingInTurn <= 0);
  }
}

function saveDie(dieIndex) {
  if(yahtzee.throwsRemainingInTurn != 3) {
    yahtzee.dice[dieIndex].saved = !yahtzee.dice[dieIndex].saved
    loadDice();
  }
}

/*function save() {
  if(event.target.className != 'saved') {
  event.target.className = 'saved';
  yahtzee.dice.saved = true;
  } else {
  event.target.className = '';
  }
} */

function yellowBackground() {
  event.target.className = 'yellowBackground';
}
