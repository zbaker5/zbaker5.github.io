function setup() {
  loadPlayerInfo();
  loadDice();
  loadScoreCard();
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
  });
}

function loadScoreCard() {
  yahtzee.scoreCard.forEach(function(index) {
    row = document.createElement('tr');

      row.appendChild(createTD(yahtzee.scoreCard.title));

  });
}

function createTD(content) {
  cell = document.createElement('td');
  cell.innerHTML = content;
  return cell;
}
