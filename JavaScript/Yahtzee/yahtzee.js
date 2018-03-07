function setup() {
  loadModal();
  loadDice();
  loadScorecard();
}

function loadModal() {
  document.getElementsByClassName('modal-wrapper')[0].style.display = 'block';
}

function closeModal() {
  if (document.getElementById('nameInput').value.length > 0) {
    yahtzee.player.name = document.getElementById('nameInput').value;
    document.getElementsByClassName('modal-wrapper')[0].style.display = 'none';

    yahtzee.player.avatar = document.querySelector('input[name="avatar"]:checked').value;



    loadPlayerInfo();
  } else {
    document.getElementById('nameInput').placeholder = 'Please enter a name';
  }
}


function loadPlayerInfo() {
  document.getElementById("playerName").innerHTML = yahtzee.player.name;
  document.getElementById("picture").src = yahtzee.player.avatar;
}

function loadDice() {
  document.getElementById('rollsRemain').innerHTML = 'Rolls Remaining: ' + yahtzee.throwsRemainingInTurn;
  document.getElementById('roll').disabled = (yahtzee.throwsRemainingInTurn <= 0 || yahtzee.turnsRemaining == 0);
  document.getElementById('turnsRemain').innerHTML = 'Turns Remaining: ' + yahtzee.turnsRemaining;
  dieImages = ['./images/defaultAvatar.png', './images/die1.png', './images/die2.png',
   './images/die3.png', './images/die4.png', './images/die5.png', './images/die6.png']
  yahtzee.dice.forEach(function(die, index) {
    img = document.getElementById('die' + index);
    img.src = dieImages[die.sideUp];


    if(die.saved) {
      img.className = 'saved';
    } else {
      img.className = '';
    }
    loadScorecard();
});
}


function loadScorecard() {
  topSubtotal = 0;
  document.getElementById('scoreRows').innerHTML = '';
  yahtzee.scoreCard.forEach(function(scoreCardRow, index) {
    if (scoreCardRow.top) {
      buildScoreCardRow(scoreCardRow.title, scoreCardRow.score, (scoreCardRow.scoreRecorded ? 'scored' : 'unscored'), !scoreCardRow.scoreRecorded, index);
      topSubtotal += scoreCardRow.score ;
    }
  });
  buildScoreCardRow('Top Subtotal:', topSubtotal, 'totals', false, 0);

  if(topSubtotal >= 65) {
    bonus = 30;
  } else {
    bonus = 0;
  }
  buildScoreCardRow('Top Bonus:', bonus, 'totals', false, 0);

  bottomSubtotal = 0;
  yahtzee.scoreCard.forEach(function(scoreCardRow, index) {
    if (!scoreCardRow.top) {
      buildScoreCardRow(scoreCardRow.title, scoreCardRow.score, (scoreCardRow.scoreRecorded ? 'scored' : 'unscored'), !scoreCardRow.scoreRecorded, index);
      bottomSubtotal += scoreCardRow.score;
    }
  });
  yahtzee.finalScore = (topSubtotal + bonus + bottomSubtotal);
  buildScoreCardRow('Total Score: ', (yahtzee.finalScore), 'totals', false, 0);
}


function buildScoreCardRow(title, score, columnClassName, clickable, scoreCardIndex) {
  tr = document.createElement('tr');
  td1 = document.createElement('td');
  td1.innerHTML = title;
  tr.appendChild(td1);
  td2 = document.createElement('td');
  td2.innerHTML = score;
  td2.className = columnClassName;
  if (clickable) {
    td2.onclick = saveScore;
    td2.setAttribute('data-scoreCardIndex', scoreCardIndex);
  }
  if(td2)
  tr.appendChild(td2);
  document.getElementById('scoreRows').appendChild(tr);
}


function saveScore() {
    if (yahtzee.throwsRemainingInTurn < 3) {
      this.className = 'saveScore';
      index = this.getAttribute('data-scoreCardIndex');
      yahtzee.scoreCard[index].scoreRecorded = true;
      yahtzee.throwsRemainingInTurn = 3;
      yahtzee.dice.forEach(function(die) {
      die.sideUp = 0;
      die.saved = false;
    });
    if (yahtzee.turnsRemaining > 0) {
      yahtzee.turnsRemaining -= 1;
      document.getElementById('turnsRemain').innerHTML = 'Turns Remaining: ' + yahtzee.turnsRemaining;
    }
    if (yahtzee.turnsRemaining == 0) {
      alert ('Your Final Score Is: ' + yahtzee.finalScore);
    }
    loadDice();
  }
}


function rollDice() {
  if (yahtzee.throwsRemainingInTurn > 0) {
    yahtzee.throwsRemainingInTurn -= 1;
  }
  //TODO: Do not allow roll if all dice saved
  yahtzee.dice.forEach(function(die) {
    if (die.saved != true) {
      die.sideUp = (Math.floor(Math.random() * 6) +1);
    }
  });
  loadDice();
  calculateScores();
}

function calculateScores() {
  yahtzee.scoreCard.forEach(function(scoreCardRow) {
    if (!scoreCardRow.scoreRecorded) {
      if (conditionIsMet(scoreCardRow.scoreCondition)) {
        if (scoreCardRow.scoreMath[0] == 'const') {
          scoreCardRow.score = scoreCardRow.scoreMath[1];
        }
        if (scoreCardRow.scoreMath[0] == 'sum') {
          scoreCardRow.score = sumOfDice(scoreCardRow.scoreMath[1]);
        }
      }
    }
  });
  loadScorecard();
}

function conditionIsMet(condition) {
  if (condition[0] == 'none') {
    return true;
  }
  if (condition[0] == 'ofAKind') {
    return ofAKind(condition);
  }
  if (condition[0] == 'inARow') {
    return inARow(condition);
  }
  return false;
}

function ofAKind(condition) {
  counter = 0;
  for (i = 0; i < yahtzee.dice.length; i++) {
    for (j = 1; j < yahtzee.dice.length; j++) {
      if (yahtzee.dice[i].sideUp == yahtzee.dice[j].sideUp) {
        counter ++;
      }
    }
    if (condition[1] <= counter) {
      return true;
    } else {
      return false;
    }
  }
}

function inARow(condition) {
  counterTwo = 0;
  for (i = 0; i < yahtzee.dice.length; i++) {
    for (j = 0; j <yahtzee.dice.length; j++) {
      if (yahtzee.dice[i].sideUp == yahtzee.dice[j].sideUp + 1) {
        counterTwo++
      }
    }
  }
  if (counterTwo == condition[1]) {
    return true;
  } else {
    return false;
    counterTwo = 0;
  }
}

function sumOfDice(valueToMatch) {
  total = 0;
  yahtzee.dice.forEach(function(die) {
    if (die.sideUp == valueToMatch || valueToMatch === 0) {
      total += die.sideUp;
    }
  });
  return total;
}


function saveDie(dieIndex) {
  if(yahtzee.throwsRemainingInTurn != 3) {
    yahtzee.dice[dieIndex].saved = !yahtzee.dice[dieIndex].saved
    loadDice();
  }
}

function loadModalTwo() {
  document.getElementsByClassName('modalTwo-wrapper')[0].style.display = 'block';
}

function closeModalTwo() {
  document.getElementsByClassName('modalTwo-wrapper')[0].style.display = 'none';
}
