function createBox() {
  textBox = document.createElement("input");
  textBox.setAttribute("value", "1");
  textBox.setAttribute("onkeyup", "validateTextbox(this)")
  textBox.className = "numeric";
  document.getElementById("textBoxes").appendChild(textBox);
}

function add() {
  boxes = Array.from(document.getElementsByClassName("numeric"));
  sum = 0;
  boxes.forEach(function(elem) {
    sum += parseInt(elem.value);
  });
  document.getElementById("answer").innerHTML = sum;
}

function average() {
  avg = 0;
  boxes = Array.from(document.getElementsByClassName("numeric"));
  sum = 0;
  boxes.forEach(function(elem) {
  sum += parseInt(elem.value);
  avg = sum/boxes.length;
  });
  document.getElementById("answer").innerHTML = avg;
}

function validateTextbox(textBox) {
  num = textBox.value;
  if (isNaN(num)) {
    textBox.className = "numeric invalid";
  } else {
  textBox.className = "numeric";
  }
  setButtonState();
}

function setButtonState() {
  invalids = document.getElementsByClassName("invalid");
  if (invalids.length > 0) {
    document.getElementById("addButton").disabled = true;
  } else {
    document.getElementById("addButton").disabled = false;
  }
}

function chooseAction() {
  choice = document.getElementById("actionChoice");
  action = choice[choice.selectedIndex];
  button = document.getElementById("addButton");

  if(action.value == "add") {
    button.innerHTML = "Add Them!";
    button.setAttribute("onclick", "add()");
  }

  if(action.value == "average") {
    button.innerHTML = "Average Them!";
    button.setAttribute("onclick", "average()");
  }

  if(action.value == "median") {
    button.innerHTML = "Find the Median!";
    button.setAttribute("onclick", "median()");
  }
}

function setup() {
  chooseAction();
}
