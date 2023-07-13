function callthis() {
var desksDiv = document.getElementsByClassName('deskrows');
console.log("here!")
var desks1 = Array(20).fill().map((_, i) => {
  var desk = document.createElement('div');
  desk.className = 'desk';
  desk.id = 'desk' + (i + 1);
  desk.addEventListener('click', function() {
    //
  });
  desksDiv[0].appendChild(desk);
  return desk;
});

var desks2 = Array(20).fill().map((_, i) => {
  var desk = document.createElement('div');
  desk.className = 'desk';
  desk.id = 'desk' + (i + 1);
  desk.addEventListener('click', function() {
    //
  });
  desksDiv[1].appendChild(desk);
  return desk;
});

// var desks3 = Array(20).fill().map((_, i) => {
//   var desk = document.createElement('div');
//   desk.className = 'desk';
//   desk.id = 'desk' + (i + 1);
//   desk.addEventListener('click', function() {
//     //
//   });
//   desksDiv[2].appendChild(desk);
//   return desk;
// });





var desksDiv = document.getElementById('radiate');
var desks = Array(20).fill().map((_, i) => {
  var desk = document.createElement('div');
  desk.className = 'desk';
  desk.id = 'desk' + (i + 1);
  desk.addEventListener('click', function() {
    //
  });
  desksDiv.appendChild(desk);
  return desk;
});

setInterval(function() {

  // random desks
  for (var i = 0; i < desks1.length; i++) {
      var rand = Math.random() * 100;
      if (rand < 45) {
        deskStates[i] = 'boredom';
      } else {
        deskStates[i] = null;
      }
  }
  updateDeskColors(desks1, deskStates);


  // one kid
  for (var i = 0; i < desks2.length; i++) {
    deskStates[i] = null;
  }
      // var rand = Math.random() * 100;
      // if (rand < 75) {
    deskStates[6] = 'hidden';
      // } else {
      //   deskStates[6] = null;
      // }
  updateDeskColors(desks2, deskStates);
  

  // radiate
  if (deskStates2[6] === 'boredom') {
      if (deskStates2[5] === null) {
          deskStates2[7] = 'close';
          deskStates2[11] = 'close';
          deskStates2[1] = 'close';
          deskStates2[5] = 'close';
      } else if (deskStates2[10] === null){
          deskStates2[12] = 'second';
          deskStates2[10] = 'second';
          deskStates2[0] = 'second';
          deskStates2[2] = 'second';
      } else {
          deskStates2[6] = null
      }
  } else {
    if (deskStates2[5] === 'close') {
      deskStates2[7] = null;
      deskStates2[11] = null;
      deskStates2[1] = null;
      deskStates2[5] = null;
    } else if (deskStates2[10] === 'second') {
      deskStates2[10] = null;
      deskStates2[12] = null;
      deskStates2[0] = null;
      deskStates2[2] = null;
    } else {
      deskStates2[6] = 'boredom'
    }
  }

  updateDeskColors2(desks, deskStates2);
}, 400);

function updateDeskColors(desks, deskStates) {
for (var i = 0; i < desks.length; i++) {
  switch (deskStates[i]) {
    case 'boredom':
      desks[i].style.backgroundColor = 'hsl(351, 83%, 61%)';
      break;
    case 'anxiety':
      desks[i].style.backgroundColor = 'hsl(42, 94%, 55%)';
      break;
    case 'disruption':
      desks[i].style.backgroundColor = 'hsl(234, 44%, 66%)';
      break;
    case 'hidden':
      desks[i].style.backgroundColor = '#f5f5f5';
      break;
    default:
      desks[i].style.backgroundColor = '';
      break;
  }
}
}
function updateDeskColors2(desks, deskStates2) {
for (var i = 0; i < desks.length; i++) {
  switch (deskStates2[i]) {
    case 'boredom':
      desks[i].style.backgroundColor = 'hsl(351, 83%, 61%)';
      break;
    case 'close':
    desks[i].style.backgroundColor = 'hsl(351, 83%, 61%)'; // 'hsl(351, 83%, 72%)';
      break;
    case 'second':
    desks[i].style.backgroundColor = 'hsl(351, 83%, 61%)'; // 'hsl(351, 83%, 83%)';
      break;
    default:
      desks[i].style.backgroundColor = '';
      break;
  }
}
}
}