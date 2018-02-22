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
  dieImages = ['./images/defaultAvatar', './images/die1.png', './images/die2.png',
   './images/die3.png', './images/die4.png', './images/die5.png', './images/die6.png']
  yahtzee.dice.forEach(function(die, index) {
    img = document.getElementById('die' + index);
    img.src = dieImages[die.sideUp];
    if(die.saved) {
      img.className = 'saved';
    } else {
      img.className = '';
    }
    
    score = 0;
    if(die.sideUp == 1) {
      score += 1;
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
  tr.appendChild(td2);
  document.getElementById('scoreRows').appendChild(tr);
}
