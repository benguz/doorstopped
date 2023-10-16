const referents = ["Class Prez", "Chief Stoner", "Highest Snap Score", "Guy who starts random convos with the teacher during class", "Basketball team captain", "Most Social Guy on Math Team", "Couple together since pre-k", "Diva", "Trend-setter"];

  var idTracker = 0;
  $(document).ready(function() {
  $('#addCard').on('click', function() {
    var newCard = '<div class="lard" style="display: flex; flex-direction: row;">'+
                  '<div class="textbox" contenteditable="true" style="flex: 5;">'+
                  referents[Math.floor(Math.random()*referents.length)] +
                  '</div>'+
                  '<button class="close-button" id="close' + idTracker +
                  '">'+
                  '<span class="close-icon">&#215;</span>'+ 
                  '</button></div>';
    $(newCard).insertBefore('#addCard');
    let closeNew = document.getElementById("close" + idTracker)
    closeNew.addEventListener('click', () => {
      const card = closeNew.closest('.lard');

      // Delete the lard element if found
      if (card) {
        card.remove();
      }
    });
    $('.textbox').each(function() {
      var text = $(this).text();
      var textExists = false;

      $('#strategies .lard').each(function() {
        if ($(this).text().indexOf(text) != -1) {
          textExists = true;
          console.log("found match!")
          return false; // break the loop
        }
        console.log($(this).attr('id'))
      });
      console.log(textExists);
      if (!textExists) {
        appendCard(text, idTracker);

      } 
    });
  });
});

function appendCard(text, id) {
  var newStrategyCard = '<div class="lard"><strong>' + 
  text + 
  '</strong><br>' +
  '<div>choose a strategy, change their mind</div>' +
  '<div class="row" id="select' + id +
  '"">' +
    '<div id="talk' + id +
    '" class="lard row" onclick="act(1, ' + id +
    ')" style="background-color: hsl(351, 83%, 88%)">' +
      'Man-to-man</div><div id="empathy' + id +
      '" class="lard row" onclick="act(2, ' + id +
      ')" style="background-color: hsl(42, 94%, 88%)">' +
      'Open Heart Surgery</div>' +
    '<div id="cafeteria' + id +
    '" class="lard row" onclick="act(3, ' + id +
    ')" style="background-color: hsl(234, 44%, 88%)">Group Hug</div></div>' +
  '</div>';
  $('#strategies').append(newStrategyCard);
  idTracker++;

}

function act(n, id) {
  let p = document.createElement('p');
  // let explainer = document.createElement('p');
  let old = document.getElementById('attachment' + id);
  let script = "";
  let explainText = "";
  if (old) {
    old.remove();
  }
  p.id = 'attachment' + id;
  let div = "";

  if (n === 1) {
    div = document.getElementById('talk' + id);
    let close = document.getElementById('empathy' + id);
    let close1 = document.getElementById('cafeteria' + id);

    div.style.backgroundColor = 'hsl(351, 83%, 75%)';
    close.style.backgroundColor = 'hsl(42, 94%, 88%)';
    close1.style.backgroundColor = 'hsl(234, 44%, 88%)';
    // man to man approach + script
    
    if (strategy === 1) {
      // judgey people
      // solution is hi's + gum culture
      // Start saying hi to people in the halls. Genuinely.  (Popular non-bullies creating a status symbol, giving it to people lower on the hierarchy)

      script = `Hey man, do you have a minute to talk? I know we don't usually hang out but it's important. Girls are really mean to each other here. It's not like this at other schools.<br><br>
      
      And it's kind of not really our problem, but it's two percent of the girls making the other 98 percent feel awful. Every Day. And you know how it is with anxiety and everything. We don't have to, like, burn down someone's house, but at other schools, even doing small things to show that we *don't* agree with the bad vibes has completely changed the culture.<br><br> 
      
      Can you start [saying hi // offering gum] to girls in class you don't usually talk to. That is literally all it takes.All the guys look up to you and would follow your lead, and it could really change the culture.<br><br>
      
      I'm asking man to man here. [okay to say this even if you're not a man].<br><br> 

      I'm totally down to bring my friends to a [sports team/performance/opening/help out] if it'd convince you!`;
      // Brief explainer of the strategy and why it will work.
      explainText = "this will work bc..."


    } else if (strategy === 2) {
      // loud classes / harassment. Should probably switch this to harassment.

      // 
      // 
      script = `Hey man, do you have a minute to talk? I know we don't usually hang out but it's important.<br><br>
      I know you guys have a lot of fun in [class where there's disruptive people // parties // juuling in bathrooms, etc].<br><br>
      I have to bring up - for me and for my friends - that it can be stressful for us. I know you have no bad intentions at all, but when you [behavior X], it [outcome, eg. hurts the teacher's feelings/makes it harder for the people who want to learn / makes some of my friends uncomfy].<br><br>
      I'm not asking you to completely stop. Is there a compromise you might be open to? I'm sure if we [solution, eg. went to the teacher and said we'd be way more respectful if we changed the curriculum/had more time outside], you'd have a more chill time, too.<br><br>
      What do you think?<br><br>

      [Optional - I would definitely owe you one man. If they bring up that their friends would be against it, explain the social referents concept.]
      `;
      explainText = "this will work bc..."

    } else if (strategy === 3) {
      // competitiveness
      script = `Hey man, can I be, like, emotionally available for a second? I know we don't hang out much but this is important.<br><br>
      
      Everyone's super stressed about grades and college and everything. I think there's a way to get rid of the toxic competitive part - there are lots of high schools with high-achieving kids and no competitiveness. Plus, there's a lot of admissions data that says colleges don't take a fixed number of students from a school.<br><br>

      Here's what I'm thinking:<br><br>
      
      If we had something collaborative to push for [like getting admin to get rid of weighted GPA, working together to push for a school policy change that would look good on everyone's resume, committing to genuinely shouting out people for effort on assignments, even if you don't know them], school culture would be a lot less stressful.<br><br>

      Would you be down to support something like that?`;
      explainText = "this will work bc..."
      // external link to people who want to try participation boycott, different approach.
    }



  } else if (n === 2) {
    div = document.getElementById('empathy' + id);
    let close = document.getElementById('talk' + id);
    let close1 = document.getElementById('cafeteria' + id);

    div.style.backgroundColor = 'hsl(42, 94%, 75%)';
    close.style.backgroundColor = 'hsl(351, 83%, 88%)';
    close1.style.backgroundColor = 'hsl(234, 44%, 88%)';
    // proving to them there's a problem 
    // Don’t believe it? Try a day of silence. Watch people pick on you because you can’t fight back. It’s literally a jungle.
          // Brief explainer of the strategy and why it will work.

    if (strategy === 1) {
      // judgey people
      // solution is hi's + gum culture
      // Start saying hi to people in the halls. Genuinely.  (Popular non-bullies creating a status symbol, giving it to people lower on the hierarchy)
      
      script = `At first, I didn't really believe there was a problem either. But imagine if you spent a day silent: not saying anything to anyone at school. People would start to make fun of you, pick on you, because you can't respond.<br><br>
      
      That's how people with lower social status feel, like they can't respond.
      
      I'm not asking you to hold a massive protest or anything, but can you, just, say hi to people in the halls? Or offer girls sitting next to you gum? will be enough to stop the toxic groupchats from stinging.<br><br> 
      
      It's 1% of girls making the rest of us feel shitty, and they're not *that* popular. If everyone else starts acting like the popularity contest doesn't exist, we'll all end up happier.
      
      All it takes is proving the world doesn't revolve around the 1%. Are you in?`;
      explainText = "this will work bc..."

    } else if (strategy === 2) {
      // loud classes
      script = `Hey, do you have a minute to talk? I think there are more fun ways to [make math class less boring than to interupt the teacher // party that make girls less uncomfortable], hear me out.<br><br>
      I heard that in Scotland, a bunch of kids were told by their school not to go to a cemetery "because there were vampires there", so after school the entire student population went to the cemetery and spent hours hunting for the vampire.<br><br>
      Why don't we do stuff like that here? What I'm trying to say is, I'm down to go against school rules, but I think there are fun ways to do it that make everyone feel included.<br><br>
      Are you open to trying [solution, eg. to talk to the teacher about taking breaks during class? It would be less hurtful for them and make class easier on other students // change the way you talk to girls at parties? You can still chase them, but do it in a way that's fun for them!]<br><br>
      A lot of people respect you and would follow your lead.
      `;
      explainText = "this will work bc..."

    } else if (strategy === 3) {
      // competitiveness
      script = `You know when people walk up to you all like "WHADIDYA GET ON THE EXAM WHA-WHA-WHA???" Isn't that kind of toxic?<br><br> 
      It's like a mix of rubbing their better score in your face, trying to get you into a dick-measuring contest, and just compulsively wanting to know how other people are doing. But the common theme is low self-awareness.<br><br>
      That person clearly has no bad intentions, they just don't know they're making other people uncomfortable.<br><br>
      But... there are other things at school that are a *little* more subtle but leave people just as stressed.<br><br>
      Groaning about how much homework we have or how many classes we're taking, being frustrated about an A-, not opening up about how stressed we are about getting into college... What if we committed to changing the culture here?<br><br>
      I think if at the next [lunch/assembly/event], a group of students stood up and talked about what we could do to make school less stressful, [policy change, eg. preventing students from taking a class during lunch or culture change, eg. shouting out hard work/cool thoughts on assignments instead of asking about grades], life would get easier.<br><br> 
      Are you down?`;
      explainText = "this will work bc..."

    }


  } else if (n===3) {
    div = document.getElementById('cafeteria' + id);
    let close = document.getElementById('empathy' + id);
    let close1 = document.getElementById('talk' + id);

    div.style.backgroundColor = 'hsl(234, 44%, 75%)';
    close.style.backgroundColor = 'hsl(42, 94%, 88%)';
    close1.style.backgroundColor = 'hsl(351, 83%, 88%)';

    // cafeteria convo approach + script
    // Share hydroflasks with ice cream in them. Other kind of simple nice thing that works as social currency eg gum
    // Say you want that protest to happen. Maybe the dress code is awful. 
    // Maybe there’s a culture of harassment at parties. The first problem you might run into is apathy: sure, it sucks, but nobody cares enough to do anything about it. 
    // If you go from lunch table to lunch table pitching a protest or seeding some social change, 
    // the friend group dynamics you’re jumping into might not be ~conducive~ to listening, empathy, or action.
    // If you go talk to people one-on-one instead, maybe the most approachable person from each friend group, you’d be able to better connect. But how will others perceive that? How do you avoid getting mixed into drama when the campus sees you pulling so many people aside to talk?

    if (strategy === 1) {
      // judgey people
      // solution is hi's + gum culture
      // Start saying hi to people in the halls. Genuinely.  (Popular non-bullies creating a status symbol, giving it to people lower on the hierarchy)

      script = `<strong>Go up to their table at the cafeteria...</strong> Hey y'all, I'm trying something!<br><br>
      Do you want to hand out gum to random people in your classes? It's a way to break down like the judgey people culture.<br><br>
      Gum is, like, *the* way people do nice things for each other here. So I thought everyone would feel more comfortable in school (I'm sure you've all been stressed by the social life here) without anyone having to go crazy or be forced to make new friends.<br><br>
      What do you think? [Optional: "here's two packs of gum!"" - the school would totally pay for this by the way, but you have to hide that the school is involved or this won't be seen as a cool thing.]`;
      explainText = "this will work bc..."


    } else if (strategy === 2) {
      // loud classes / harassment
      script = `<strong>Go up to their table at the cafeteria...</strong> Hey y'all, I'm trying something!<br><br>
      Do you guys ever feel like the parties here get kind of icky? <br><br>
      Like, by the end of the night girls are making THAT kind of eye contact with their friends to be like, get me out of here?<br><br>
      In a lot of ways, this isn't really our problem, we're not the assholes, but you guys are some of the only people here that have, like, other people's respect.<br><br>
      If you guys called out that type of icky drunk bro talk around your friends, it could really stop and make a lot of girls feel safer.<br><br>
      I know that's a really hard conversation to have, but hey, I'm here putting myself out there, too. I think it's worth it.<br><br>
      Are you down?`;
      explainText = "this will work bc..."


    } else if (strategy === 3) {
      // competitiveness
      script = `<strong>Go up to their table at the cafeteria...</strong> Hey y'all, I'm trying something!<br><br>
      I know we all get stressed by the work grind here and the lowkey competition. I think we could all be less stressed if we made a really, really small change:
      gassing people up for non-grade achievements. Like, any time people are stressed about work, if we compliment their save in the hockey game, or their outfit, or even something cool they did on their assignment (like, genuinely compliment people), it would really help ease the stress.<br><br>
      And I know if you guys started doing it, other people would catch on and the culture here would get that much healthier.`;
      explainText = "this will work bc..."


    }
  }
    
  var newApproach = `
    <div class="copy-paste-element" id="address` + id +
    `">
  <div>
    <p>` + script +
  `</p>
  </div>
  <button class="copy-icon" onclick="copyText(event)">
    <svg class="svg2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect>
      <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
    </svg>
  </button>
</div>
<p id="explainer` + id +
`">` + // explainText +
`</p>`
    var strategyContents = document.createElement('div');
    strategyContents.innerHTML = newApproach;

    let l = null;
    if (l = document.getElementById("address" + id)) { // this line def doesn't do what it's supposed to
      l.remove();
      document.getElementById("explainer" + id).remove();
    }
    div.parentNode.parentNode.append(strategyContents);

    // add alert if strategy is zero to tell them to click one!
    // UX-ify button presses to make emojis fly out
    // add option to select people's vibes for more choices
}

    const closeButtons = document.getElementsByClassName('close-button');
for (let i = 0; i < closeButtons.length; i++) {
  let closeButton = closeButtons[i];
  closeButton.addEventListener('click', () => {
    const card = closeButton.closest('.lard');

    // Delete the lard element if found
    if (card) {
      card.remove();
    }
  });
}

    let strategy = 0;

    function type(n) {
      if (strategy === 0) {
        document.getElementById("not-chosen").style.display = "none";
        appendCard(document.getElementById("initBox1").textContent, idTracker);
        console.log(idTracker);
        appendCard(document.getElementById("initBox2").textContent, idTracker);
        console.log(idTracker);
        appendCard(document.getElementById("initBox3").textContent, idTracker);
        console.log(idTracker);


      }

      judgey = document.getElementById("judgey");
      loud = document.getElementById("loud");
      comp = document.getElementById("comp");

      collab = document.getElementById("collab");
      man = document.getElementById("mantoman");
      thanks = document.getElementById("thanks");

      strategy = n;
      if (n === 1) {
        judgey.style.backgroundColor = "hsl(351, 83%, 88%)";
        loud.style.backgroundColor = "white";
        comp.style.backgroundColor = "white";

        thanks.style.display = "block";
        man.style.display = "none";
        collab.style.display = "none";

      } else if (n === 2) {
        judgey.style.backgroundColor = "white";
        loud.style.backgroundColor = "hsl(42, 94%, 88%)";
        comp.style.backgroundColor = "white";

        man.style.display = "block";
        thanks.style.display = "none";
        collab.style.display = "none";

      } else if (n === 3) {
        judgey.style.backgroundColor = "white";
        loud.style.backgroundColor = "white";
        comp.style.backgroundColor = "hsl(234, 44%, 88%)"; 

        collab.style.display = "block";
        thanks.style.display = "none";
        man.style.display = "none";
      }
    }


var deskStates = Array(20).fill(null); // null, 'boredom', 'anxiety', 'disruption'
var deskStates2 = Array(20).fill(null); // null, 'boredom', 'anxiety', 'disruption'

window.onload = function() {

  var desksDiv = document.getElementsByClassName('deskrows');
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