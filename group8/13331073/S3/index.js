// Generated by LiveScript 1.3.1
(function(){
  var addClickingToFetchTheNumberToButton, addClickingToCalculateTheSumToBubble, allButtonDone, getRandomNumber, disableAllOtherButtons, showNumberArea, fetchNumber, enableAllOtherButton, resetTheCalculator, resetAllTheButtons, resetTheBubble, button, number, letter, Info_bar, atPlus, changeBubbleColorWhileBubbleCanClick, changeButtonsColorToGrayAfterClick, changeButtonsColorToBlueAfterClick, robotClick, bubbleClick;
  window.onload = function(){
    addClickingToFetchTheNumberToButton();
    addClickingToCalculateTheSumToBubble();
    robotClick();
    document.getElementById('at_plus').onmouseout = resetTheCalculator;
  };
  addClickingToFetchTheNumberToButton = function(){
    var i$, i;
    resetAllTheButtons();
    for (i$ = 0; i$ <= 4; ++i$) {
      i = i$;
      button(i).onclick = fn$;
    }
    function fn$(){
      return getRandomNumber(this.number);
    }
  };
  addClickingToCalculateTheSumToBubble = function(){
    document.getElementById('info-bar').onclick = function(){
      var randomNumber, add, i$, i;
      if (!allButtonDone()) {
        return;
      }
      randomNumber = document.getElementsByClassName('number');
      add = 0;
      for (i$ = 0; i$ <= 4; ++i$) {
        i = i$;
        add += parseInt(randomNumber[i].innerHTML);
      }
      Info_bar().innerHTML = add;
      Info_bar().style.backgroundColor = 'gray';
    };
  };
  allButtonDone = function(){
    var i$, i;
    for (i$ = 0; i$ <= 4; ++i$) {
      i = i$;
      if (number(i).innerHTML === '...') {
        return false;
      }
    }
    changeBubbleColorWhileBubbleCanClick();
    return true;
  };
  getRandomNumber = function(this_number){
    if (button(this_number).classList.contains('disable')) {
      return;
    }
    button(this_number).classList.remove('enable');
    button(this_number).classList.add('disable');
    disableAllOtherButtons(this_number);
    showNumberArea(this_number);
    fetchNumber(this_number);
  };
  disableAllOtherButtons = function(this_number){
    var i$, i;
    for (i$ = 0; i$ <= 4; ++i$) {
      i = i$;
      if (i !== this_number) {
        button(i).classList.add('waiting');
        changeButtonsColorToGrayAfterClick(i);
      }
    }
  };
  showNumberArea = function(this_number){
    number(this_number).style.opacity = '1';
  };
  fetchNumber = function(this_number){
    var request;
    request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if (request.readyState === 4 && request.status === 200) {
        number(this_number).innerHTML = request.responseText;
        enableAllOtherButton(this_number);
        if (allButtonDone()) {
          addClickingToCalculateTheSumToBubble();
        }
      }
    };
    request.open("GET", "/" + this_number, true);
    request.send();
  };
  enableAllOtherButton = function(this_number){
    var i$, i;
    for (i$ = 0; i$ <= 4; ++i$) {
      i = i$;
      button(i).classList.remove('waiting');
      if (i !== this_number && button(i).classList.contains('enable')) {
        changeButtonsColorToBlueAfterClick(i);
      } else {
        changeButtonsColorToGrayAfterClick(i);
      }
    }
  };
  resetTheCalculator = function(){
    resetAllTheButtons();
    resetTheBubble();
  };
  resetAllTheButtons = function(){
    var i$, i;
    for (i$ = 0; i$ <= 4; ++i$) {
      i = i$;
      button(i).classList.add('enable');
      button(i).classList.remove('disable');
      changeButtonsColorToBlueAfterClick(i);
      number(i).innerHTML = "...";
      number(i).style.opacity = '0';
    }
  };
  resetTheBubble = function(){
    Info_bar().innerHTML = "";
  };
  button = function(position){
    var buttons;
    buttons = $(".char");
    buttons[position].number = position;
    return buttons[position];
  };
  number = function(position){
    var numbers;
    numbers = $(".number");
    return numbers[position];
  };
  letter = function(position){
    var letters;
    letters = $(".letter");
    return letters[position];
  };
  Info_bar = function(){
    var bars;
    return bars = $('#info-bar')[0];
  };
  atPlus = function(){
    var atplus;
    return atplus = $('#at_plus')[0];
  };
  changeBubbleColorWhileBubbleCanClick = function(){
    $('#info-bar')[0].style.backgroundColor = 'rgba(48, 63, 159, 1)';
  };
  changeButtonsColorToGrayAfterClick = function(position){
    letter(position).style.backgroundColor = 'gray';
  };
  changeButtonsColorToBlueAfterClick = function(position){
    letter(position).style.backgroundColor = 'rgba(48, 63, 159, 1)';
  };
  robotClick = function(){
    atPlus().onclick = function(){
      var i$, i;
      for (i$ = 0; i$ <= 4; ++i$) {
        i = i$;
        button(i).click();
      }
      setTimeout(bubbleClick, 4000);
    };
  };
  bubbleClick = function(){
    if (allButtonDone) {
      Info_bar().click();
    }
  };
}).call(this);
