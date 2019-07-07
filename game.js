
// let maxGuesses = 3;
// let currentGuess = 0;
// const maxRange = 20;
// const playerHealth = 100;
// const playerAttack = 5 < 20;
// let attack = Math.floor(Math.random() * maxRange + 1);
// playerHealth = (playerHealth - randomNumber)



const attn = require('readline-sync');
let option
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

const breakLine = (length=2) => console.log(Array.from({length}, () => '\n').join(''))

const gameOver = () => {
  console.log("Things don't always go as planned.")
  option = attn.question( "Options:\n a: Try Again\n b: Give Up\n" );
  switch(option) {
    case "a":
      console.log("")
      console.log("")
      sleep(1000)
      console.log( "Back into the Fray" );
      sleep(3000)
      scenarioOne()
    break;
    case "b":
      console.log("")
      console.log("")
      console.log( "Thanks for playing!" );
      process.exit();
    default: 
      console.log( "You must not be fit for this." );
      gameOver()
    break;
  }
}

const hpBuff = () => {
  if (player1.health <= 100)
  player1.health = player1.health + 20 /100
}

const mpGain = () => {
  if (player1.mp < 100)
  player1.mp = player1.mp + 25
}

const expGain = () => {
  if ( player1.mp <= 100 )
  player1.attack = player1.attack + (enemy.exp)
}

let player1 = { attack: 20, mp: 100, health: 100 , magAtk: 40 }

let enemy = { name: "Phantasm", attack: 8, health: 50, exp: 1 } 

let combatEnd = () => {
  sleep(1000)
    console.log("")
    console.log("")
    console.log("")
    console.log(`You have slain the ${enemy.name}!`)
    breakLine()
    expGain()
    mpGain()
    console.log('You have gained ATK and MP')
    sleep(2000)
    console.log(player1)
}

const rest = () =>{
  if (player1.health <= 45) {
  hpBuff()
  mpGain()
  }
}

const enemyAttack = () => {
  if (player1.health <= 50, player1.health >= 70 ){
  return Math.floor(Math.random()*enemy.attack) + 5
} else { 
  console.log("Criit Hit!")
  return Math.floor(Math.random()*enemy.attack) + 17 }
}

let bolt = () => {
  return Math.floor(Math.random()*player1.magAtk) + 27
};

const primaryStrike = () => {
  return Math.floor(Math.random()*player1.attack) + 18
};

const combatPhase = () => {
  console.log(`Player 1 HP: ${player1.health}`)
  console.log(`Player 1 MP: ${player1.mp}`)
  breakLine()
  if (player1.health >= 0 && enemy.health >= 0) {
    console.log(enemy)
    console.log(player1.health)
    const comb = attn.question( `Options:\n a: Basic Attack 🗡️,\n b: Shock 🌩️,\n c: Heal 💉,\n` );
  switch(comb) {
    case "a":
      console.log("")
      console.log("")
      console.log( "Basic Attack!" );
      let damage = primaryStrike()
      console.log( `You hit the vile creature for ${damage} dmg`)
      enemy.health = enemy.health - damage
      if (enemy.health >=0) {
        let enemyA = enemyAttack()
        player1.health = player1.health - enemyA
        console.log(`the enemy has delt you ${enemyA} dmg`)
        combatPhase()
        sleep(1000)
        } else {combatEnd()}
      
    break;
    case "b":
      console.log("")
      console.log("")
      console.log( "Lightning bolts extend from your blade" );
      if (player1.mp <= 0){
        breakLine()
        console.log("Insufficient Rescources!")
        breakLine()
        let enemyA = enemyAttack()
        player1.health = player1.health - enemyA
        console.log(`the enemy has delt you ${enemyA} dmg`)
        combatPhase()
      }
      player1.mp = player1.mp - 20
      let shock = bolt();
      console.log(`The bolts strike for ${shock} dmg`)
      enemy.health = enemy.health - shock
      if (enemy.health >=0) {
      sleep(1000)
        let enemyA = enemyAttack()
        player1.health = player1.health - enemyA
        console.log(`the enemy has delt you ${enemyA} dmg`)
        combatPhase()
      } else {combatEnd()}
    break;
    case "c":
      if (player1.mp <= 0){
        breakLine()
        console.log("Insufficient Rescources!")
        breakLine()
        let enemyA = enemyAttack()
        player1.health = player1.health - enemyA
        console.log(`the enemy has delt you ${enemyA} dmg`)
        combatPhase()}
      if (player1.health >= 100){
        breakLine()
        console.log("You are at your max HP")
        combatPhase()
      } else {
      console.log("")
      console.log("")
      console.log( "A second wind, your vitality improves" );
      player1.health = player1.health + 50
      player1.mp = player1.mp - 30
      sleep(1000)
      let enemyA = enemyAttack()
      player1.health = player1.health - enemyA
      console.log(`the enemy has delt you ${enemyA} dmg`)
      combatPhase()
      }
    break;
    default: 
      console.log( "You must not be fit for this." );
      combatPhase()
}
   
if (player1.health <= 0 ){
  console.log("")
  console.log("------Game Over-------")
  console.log('\n\n\n')
  console.log("")
  console.log("")
  gameOver()
}
  
  }
}



const scenarioOne = () => {
  breakLine()         
  console.log( "The Path Ahead" );
  console.log( "After a hard day you walk to your car when suddenly, a magic portal opens in front of you. What do you want to do?" );
  const sceneOne = attn.question( "Options:\n a: I'd rather not,\n b: maybe have a look,\n c: I'm already in,\n" );
  
  
  switch(sceneOne) {
    case "a":
      console.log("")
      console.log("")
      console.log( "Your loss. There were probably cookies in there." );
      gameOver()
      break;
    case "b":
      console.log("")
      console.log("")
      console.log( "As you approach, the portal begins to draw you ever closer.\n In the blink of an eye, you fall into the abyss" );
      break;
    case "c":
      console.log("")
      console.log("")
      console.log( "The path ahead is filled with terrors. You look ahead without a care. Growth Mindset." );
      break;
    default: 
      console.log( "You must not be fit for this." );
      scenarioOne()
      break;
    }
    breakLine(4)
    console.log( "Gate 1: Awakening" );
    sleep(6000)
    breakLine()
    console.log( "As you pass the threshold, you notice that nothing seems right. \n this isnt your world." );
    console.log( "A creature lunges out at you from a nearby shadow" );
    console.log( "In your hand, a sword appears. \n Fight!\n" );
    combatPhase()
    breakLine()
    console.log( "This wasn't an easy fight. \n You feel stronger from the experience." );
    sleep(6000)
    breakLine()
    console.log("you catch your breath and continue forward. \n Looking around you notice:")
    scenarioTwo()
    sleep(6000)
    }
  
  
  
  function scenarioTwo() {
    const sceneTwo = attn.question( "a: worn tapestry,\nb: pile of bones,\nc: glowing bottle,\nd: nothing afoot. move on\n" );
    enemy = { name: "Skeleton Warrior", attack: 20, health: 78, exp: 3 } 
    switch(sceneTwo) {
      case "a":
      console.log("")
      console.log("")
      console.log( "The wind howls ahead as the hanging cloth flows against the wall" ) ;
      console.log( "The images of a jaguar king can be seen.\nRuling from his throne.")
      scenarioTwo()
    break;
    case "b":
      console.log("")
      console.log("")
      console.log( "You approach the bones cautiously. Can't let your guard down..." );
      sleep(8000)
      console.log("The bones! They rattle and form together with all the vigor of life.")
      sleep(5000)
      console.log("Fight!")
      combatPhase()
      console.log("That was tough!")
      scenarioThree()
      
    break;
    case "c":
      console.log("")
      console.log("")
      console.log( "A mysterious bottle sits atop a shelf" );
      console.log("glowing ominously in the darkness")
      console.log("Your mp increases")
      player1.mp = player1.mp + 30
      if (player1.health <= 60) {
      player1.health = player1.health + 25 
      console.log("Your health regenerates")
      console.log(player1.health)
      } else {scenarioTwo()}
      console.log(player1.health)
      scenarioTwo()
    break;
    
    case "d":
      console.log("")
      console.log("")
      console.log("Time to move")
      console.log("")
      console.log("")
      scenarioFour()
    break;

    default: 
      console.log( "Choose again." );
      scenarioTwo()
    break;
  }
}

function scenarioThree() {
  const sceneThree= attn.question( "a: worn tapestry,\nb: glowing bottle\nc: nothing afoot. move on\nd: Rest and gain your strength\n" );
  switch(sceneThree) {
    case "a":
      console.log("")
      console.log("")
      console.log( "The wind howls ahead as the hanging cloth flows against the wall" );
      console.log( "The images of a jaguar king can be seen.\nRuling from his throne.")
      scenarioThree()
    break;
    case "b":
      console.log("")
      console.log("")
      console.log( "A mysterious bottle sits atop a shelf" );
      console.log("glowing ominously in the darkness")
      if (player1.health <= 60){
      breakLine()
      sleep(1000)
      console.log("You pop it open and take a swig")
      player1.health = player1.health + 25
      scenarioThree() 
      } else {scenarioThree()}
    break;
    case "c":
      breakLine()
      console.log("Lets Go!")
      scenarioFour()
    break;
    case "d":
      breakLine()
      console.log("You find a dark crevasse to lay in\nYou close your eyes for rest...")
      sleep(4000)
      rest()
    default: 
      console.log( "Something else?." );
      scenarioThree()
    break;
  }
}


function scenarioFour() {
  enemy = { name: "Ferocious Jaguar", attack: 24, health: 96, exp: 6 }
  sleep(2000)
  console.log("Gate 2: The Jaguar Warrior")
  sleep(6000)
  console.log("")
  console.log("Step by step\n You walk towards the cool breeze\n the sounds outside are familiar")
  sleep(6000)
  console.log("")
  console.log("You feel the humidity stick to your skin as bugs of all types flutter about.")
  console.log("Trees surround your every direction and behind;\nThe ruins of a lost temple")
  const sceneFour = attn.question( "a: staring monkey,\nb: overgrown path 💀\nc: something is shining in the bushes 💀\nd: inspect temple\n" );
  switch(sceneFour) {
    case "a":
      console.log("")
      console.log("")
      monk = attn.question( "Monkey:'Hello traveler. What brings you to this realm?'\n" );
      playerAnswer = monk
      sleep(2000)
      console.log(`"${monk} you say?!"\n "Good Luck!"`)
      console.log("Your magic pawer grows")
      sleep(4000)
      bolt = () => {
        return Math.floor(Math.random()*30) + 40
      };
      scenarioFive()
    break;
    case "b":
      console.log("")
      console.log("")
      console.log( "What a desolate pathway. Might as well check it out" );
      console.log("You walk towards the gate carefully watching your peripherals...")
      sleep(3000)
      console.log("In the trees!\nGet ready!")
      sleep(2000)
      combatPhase()
      scenarioSix()
    break;
    case "c":
      console.log("")
      console.log("")
      console.log("The glistening object captivates you\nIt draws you closer")
      console.log("As you kneel down to find the source of such brilliance...")
      sleep(3000)
      console.log("In the bushes!")
      combatPhase()
      scenarioSix()
    break;
    case "d":
      console.log("")
      console.log("")
      console.log("Roaming about the ruined temple brings you a sense of solace")
      console.log("A wonderfully carved stele catches your eye and")
      sleep(2000)
      console.log("You Gain Knowledge Of The Jaguar")
      player1.attack = player1.attack + 3
      console.log(`Your attack is now ${player1.attack}`)
      scenarioFive()
    default: 
      console.log( "That is not a choice." );
      scenarioFour()
    break;
  }
}
                                                                                  
function scenarioFive() {
  console.log("")
  const sceneFive = attn.question( "a: staring monkey,\nb: overgrown path 💀\nc: something in the bushes 💀\nd: inspect temple\n" );
  switch(sceneFive) {
    case "a":
      console.log("")
      console.log("")
      console.log("Monkey:'You again? Begon!'\n")
      scenarioFive()
    break;
    case "b":
      console.log("")
      console.log("")
      console.log( "What a desolate pathway. Might as well check it out" );
      console.log("You walk towards the gate carefully watching your peripherals...")
      sleep(3000)
      console.log("In the trees!\nGet ready!")
      sleep(2000)
      combatPhase()
      scenarioSix()
    break;
    case "c":
      console.log("")
      console.log("")
      console.log("The glistening object captivates you\nIt draws you closer")
      console.log("As you kneel down to find the source of such brilliance...")
      sleep(3000)
      console.log("In the bushes!")
      combatPhase()
      scenarioSix()
    break;
    case "d":
      console.log("")
      console.log("")
      console.log("The path ahead seems blocked.\nPerhaps next time")
      scenarioFive()
    break;
    default: 
      console.log( "Choose wisely." );
      scenarioFive()
      break;
  }
}

function scenarioSix() {
  enemy = { name: "Raging Caimen", attack: 27, health: 111, exp: 8 }
  console.log("This fight was barely won")
  sleep(2000)
  console.log("You tumble down a slope without bearing")
  sleep(2000)
  console.log("The roaring of rampaging rapids draws evercloser")
  sleep(2000)
  console.log("SPLASH!")
  console.log("")
  console.log("")
  console.log("")
  console.log("Gate 2: The Rapids")
  sleep(5000)
  console.log("")
  console.log("Disoriented")
  sleep(6000)
  console.log("Slowly, you regain consciousness")
  hpBuff()
  mpGain()
  console.log("")
  sleep(2000)
  console.log("You come to amidst the crashing of waves.")
  sleep(3000)
  console.log("Think fast! Your being pulled by heavy current!\nAnd your headed for an angry caimen!")
  combatPhase()
  hpBuff()
  console.log("")
  console.log("")
  console.log("The damage is great!\nNever have you encountered and conquered such feats!")
  console.log("As you wrestle yourself from the jaws of the river beast,")
  console.log("you gain footing on a tree floating in the torrent")
  sleep(3000)
  console.log("")
  console.log("")
  console.log("drifing along")
  console.log("")
  console.log("")
  sleep(5000)
  console.log("")
  console.log("A thud and a bump")
  console.log("")
  sleep(2000)
  console.log("")
  console.log("")
  console.log("")
  console.log("The waters have calmed and the mist has settled.")
  console.log("Before you, an endless ocean of floating cities.")
  console.log("It's time to disembark from our trusty log and move forward.\nI'm sure this world will make sense sooner or later.")
  sleep(2000)
  console.log("")
  console.log("")
  console.log("")
  console.log("This land has many dangers. Be cautious traveler")
  enemy = { name: "Opportunistc Vagabond", attack: 35, health: 145, exp: 10 }
  const sceneSix = attn.question("Option:\na: head towards civilisation,\nb: meditate\nc: ominous cave\nd: plump berries\n" );
  switch(sceneSix) {
    case "a":
      console.log("")
      console.log("")
      console.log("You walk the beaten path\n Hoping to see any hint of sanity")
      console.log("Looking ahead you see the silhouette of a person.")
      console.log("")
      console.log("An old man?")
      sleep(3000)
      console.log("Avast!")
      sleep(2000) 
      console.log("It was a trap!")
      console.log("A vagabond surprises you with a strike!")
      player1.health = player1.health - 25
      console.log("")
      console.log(`The vagabond hit you for 25 dmg!\nYour health is ${player1.health}`)
      console.log("")
      console.log("Get ready for a fight!")
      combatPhase()
      scenarioEight()
    break;
    case "b":
      console.log("")
      console.log("")
      console.log("A shaded tree to rest.\nA balanced mind is a balanced body")
      rest()
      sleep(2000)
      scenarioSeven()
    break;
    case "c":
      console.log("")
      console.log("")
    break;
    case "d":
      console.log("")
      console.log("")
      console.log("Roaming about the ruined temple brings you a sense of solace")
      console.log("A wonderfully carved stele catches your eye and")
      sleep(2000)
      console.log("You Gain Knowledge Of The Jaguar")
      player1.attack = player1.attack + 5
      console.log(`Your attack is now ${player1.attack}`)
      scenarioFive()
    default: 
      console.log( "Think again." );
      scenarioSix()
    break;
  }
}


function scenarioSeven() {
  enemy = { name: "Opportunistc Vagabond", attack: 35, health: 145, exp: 10 }
  const sceneSix = attn.question("Option:\na: head towards civilisation 💀,\nb: meditate\nc: ominous cave 💀\nd: plump berries\n" );
  switch(sceneSix) {
    case "a":
      console.log("")
      console.log("")
      console.log("You walk the beaten path\n Hoping to see any hint of sanity")
      console.log("Looking ahead you see the silhouette of a person.")
      console.log("")
      console.log("An old man?")
      sleep(3000)
      console.log("Avast!")
      sleep(2000) 
      console.log("It was a trap!")
      console.log("A vagabond surprises you with a strike!")
      player1.health = player1.health - 25
      console.log("")
      console.log(`The vagabond hit you for 25 dmg!\nYour health is ${player1.health}`)
      console.log("")
      console.log("Get ready for a fight!")
      combatPhase()
      scenarioEight()
    break;
    case "b":
      console.log("")
      console.log("")
      console.log("A shaded tree to rest.\nA balanced mind is a balanced body")
      breakLine()
      console.log("You are fully rested")
      sleep(2000)
      scenarioSeven()
    break;
    case "c":
      console.log("")
      console.log("")
      console.log("The Cave of Wonders")
      breakLine()
      console.log("A murky cave stands before you\n\"ROAR\"\nA screach from the belly of some fiend perhaps")
      sleep(2000)
      scenarioCaves()
    break;
    case "d":
      breakLine()
      console.log("Your mouth waters as your eyes catch sight of some berries")
      breakLine()
      sleep(2000)
      console.log("Those berries were no good.\nYou Have Died Of Dissintery.")
      gameOver()
    break;
  }
}

scenarioOne()



// { name: "Zombie", attack: 13, health: 64, },
// { name: "Merfolk Warrior", attack: 20, health: 78, },
// { name: "Kraken", attack: 27, health: 96, },
// { name: "Lava Creature", attack: 30, health: 100, },
// { name: "Stone Golem", attack: 42, health: 120, },
// { name: "Aven Windrider", attack: 55, health: 134, },
// { name: "Falcon Man", attack: 62, health: 137, },
// { name: "Typhoon", attack: 90, health: 160, },
// { name: "Sand Wyrm", attack: 100, health: 190, },
// { name: "Litch King", attack: 100, health: 250, },