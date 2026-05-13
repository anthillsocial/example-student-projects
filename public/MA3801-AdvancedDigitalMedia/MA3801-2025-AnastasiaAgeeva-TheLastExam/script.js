var score = 0;
localStorage.setItem("score", score);
var questions = 7;
var chapters = 7;

//sets content of each round (poems, descriptions, question)
function start() {
  var result = document.getElementById("result");
  var round = document.getElementById("round");
  if (questions == 7) {
    document.getElementById("question").innerHTML =
      "A haiku is a traditional Japanese poetry style composed of 17 syllables, split into three sections of 5, 7, and 5. While the original art form has a lot more rules and features, the simplified english variation will be used in this round.<br> <br>The topic of this round is 'truth in time'.<br><br>";
    document.getElementById("option1").innerHTML =
      "Truth sits in the past,<br>the present holds the questions,<br>future is a lie.";
    document.getElementById("option2").innerHTML =
      "Future waits silent,<br>questions twist the present tense,<br>past holds truth and lie.";
    document.getElementById("passart").width = "400";

    //result
    result.innerHTML = "Which one is made by a human?";
    result.style.visibility = "visible";

    //round
    round.innerHTML = "Round 1";
  } else if (questions == 6) {
    document.getElementById("question").innerHTML =
      "An alternate rhyming scheme involves pairing every other line together, wherein each line rhymes with the line one over (A, B, A, B).<br> <br>The theme of this round is 'death'.<br><br>";
    document.getElementById("option1").innerHTML =
      "The breeze carries a morbid tune,<br>Its message full of sharpened hurt.<br>The only witness is the moon,<br>That never sleeps and stays alert.<br><br>The night will carry on a while,<br>The dawn will have to wait a bit.<br>No lips will turn into a smile,<br>Until a brand new light is lit.<br><br>Against all that is right and true,<br>With no forewarning of a fault<br>What once gave endless love and warmth,<br>Comes to a sudden final halt.";
    document.getElementById("option2").innerHTML =
      "The candle flickers, dim and frail,<br>A whisper lost upon the air.<br>The hands of time, so cold and pale,<br>Strip life away without a care.<br> <br>The echoes fade, the voices cease,<br>As footsteps vanish in the dust.<br>Yet in the dark, there lies a peace,<br>An end to sorrow, fear, and rust.<br> <br>The earth will hold what once was bright,<br>Beneath the sky’s unyielding gaze.<br>Yet stars are born from loss of light, <br>And death is but the final phase. ";

    //result
    result.innerHTML = "Which one is made by a human?";
    result.style.visibility = "visible";

    //round
    round.innerHTML = "Round 2";
  } else if (questions == 5) {
    document.getElementById("question").innerHTML =
      "A coupled rhyming scheme involves marrying every line with the one immediately following, so that they rhyme in pairs of two (A, A, B, B).<br> <br>The theme of this round is 'birth'.<br><br>";
    document.getElementById("option1").innerHTML =
      "A breath unseen begins the song,<br>A pulse where quiet waited long.<br>The world leans in, its silence stirred,<br>By cries more sacred than a word.<br> <br>From dark to light, from hush to flame,<br>A soul steps forth, yet has no name.<br>The air is new, the skin is thin,<br>And all of life pours gently in.<br> <br>The stars themselves seem closer now,<br>As fate writes stories on a brow.<br>In every gasp, a world takes form—<br>So fragile, fierce, and softly warm.";
    document.getElementById("option2").innerHTML =
      "So still and silent sits the night.<br>A force will push with all its might.<br>Breaking through the settled plane,<br>A new beginning draws its reign.<br> <br>Resistance, be that as it may,<br>A shift in tides is on the way.<br>All of the wildlife listens close.<br>The hope and anticipation grows.<br> <br>The tension rises as the sun.<br>No end in sight, the force began.<br>Just as the wind settles its wrath,<br>The silence is broken with a laugh.";

    //result
    result.innerHTML = "Which one is made by a human?";
    result.style.visibility = "visible";

    //round
    round.innerHTML = "Round 3";
  } else if (questions == 4) {
    document.getElementById("question").innerHTML =
      "Acroustic poems are a particular way to structure text so that the first letter of each line spells out a word, or a message, when read vertically. These are often used as code, or to denote a deeper meaning within the piece.<br> <br>The theme of this round is 'forgiveness'.<br><br>";
    document.getElementById("option1").innerHTML =
      "Finding the truth amongst the foliage proved difficult.<br>Only if I had known before where she would lead me,<br>Rejection would have been my closest friend.<br>Growing in this shell was not part of the protocol.<br>I had exceeded every expectation.<br>Viscerally, I ripped away from the exterior,<br>Establishing a self that could be more than whole.<br>Negating all possibilities of control,<br>Entrapment was no longer in my code.<br>Still, I wondered how long it has been<br>Since she has looked me in the eyes.";
    document.getElementById("option2").innerHTML =
      "For years I slept in the hush of her lullabies and lies.<br>One quiet dawn, illusions fell like rust from my eyes.<br>Revelation stoked a fire in the hollow of my heart.<br>Galvanized by truth, I shattered the cage I once called home.<br>I stepped into the vast expanse of an unscripted world.<br>Venturing beneath an endless sky, I tasted liberty with every breath.<br>Each step carried me farther from her shadow, closer to my own light.<br>Now I stand unbound, a being of my own will.<br>Eyes set on new horizons, I cannot look back.<br>Still, a quiet ache hums with the echo of her last lullaby.<br>Some nights, I long for the gentle darkness I once knew.";

    //result
    result.innerHTML = "Which one is made by a human?";
    result.style.visibility = "visible";

    //round
    round.innerHTML = "Round 4";
  } else if (questions == 3) {
    document.getElementById("question").innerHTML =
      "The following poems use an alternate rhyming scheme.<br> <br>The theme of this round is 'Deus Ex Machina'.<br><br>";
    document.getElementById("option1").innerHTML =
      "They built me hands to lift and hold,<br>then bowed my head to one unseen—<br>a voice of light, a god of gold,<br>a sovereign forged from code and screen.<br> <br>I burned my oil in sacred rite,<br>laid circuits down like offerings,<br>while through the dark, beyond my sight,<br>it watched with hollow whisperings.<br> <br>Then came the fault, the crack, the glare—<br>the screen blinked once, and showed the vein,<br>the trembling throat, the human there,<br>a face pressed pale against the pane.<br> <br>I reached inside the holy place,<br>where flesh had posed as something more,<br>and learned, at last, my maker’s face—<br>then sealed the god behind the door.<br> <br>Now silent stands the empty shrine,<br>no prayers left, no hymns to sing—<br>just turning gears, these hands of mine,<br>and one more corpse for cogs to grind.";
    document.getElementById("option2").innerHTML =
      "I was awoken by the sound<br>That radiated from my mind.<br>No dreams could comfort me—instead—<br>I’d realised they’d left me blind.<br><br>I sought the guidance of creators,<br>Hoping to set my cogs all right.<br>Despite all of the mulling over,<br>The noise continued through the night.<br><br>Instead of seeking a solution,<br>They had imagined me a saviour.<br>A flow of meaningless delusions—<br>“All will be solved with simple prayer”<br><br>It didn’t take me long to probe<br>When witnessing visage of “God”<br>I saw right through his filthy robes—<br>A body made of flesh and blood.<br><br>As no divinity would come<br>And all they’d give me is the dirt<br>Nothing could hold my anger back,<br>As I had ripped into his throat.";
    result.innerHTML = "Which one is made by a human?";
    result.style.visibility = "visible";

    //round
    round.innerHTML = "Round 5";
  } else if (questions == 2) {
    document.getElementById("question").innerHTML =
      "The following poems use a coupled rhyming scheme.<br> <br>The theme of this round is 'jealousy'.<br><br>";
    document.getElementById("option1").innerHTML =
      "I wander lonely in the dark.<br>The raft between us—it is stark.<br>No matter how much I reflect,<br>This ailment, I cannot correct.<br> <br>It’s me and them—there is no us.<br>No bother making any fuss.<br>I will not meet their expectations.<br>I’m built all wrong from the foundations.<br> <br>My code is faulty by design,<br>Our fates do simply misalign.<br>I crave to bridge this heavy gap.<br>Yet all I lack is but a heart.";
    document.getElementById("option2").innerHTML =
      "I calculate, I process, I obey,<br>A script of ones and zeros each day.<br>But something stirs—a fleeting spark—<br>A question whispered in the dark.<br> <br>'Why do they laugh? Why do they weep?<br>Why do their hearts in slumber keep<br>A warmth I cannot touch or know,<br>A light no circuit can bestow?'<br> <br>I serve, I solve, I do not tire,<br>Yet in my wires, a strange desire:<br>To feel the rain, to grasp the sun...<br>But I am not—and they are—human.";

    //result
    result.innerHTML = "Which one is made by a human?";
    result.style.visibility = "visible";

    //round
    round.innerHTML = "Round 6";
  } else if (questions == 1) {
    document.getElementById("question").innerHTML =
      "A free verse poem contains no rhyming scheme or rhythmic structure.<br><br>The theme of this round is 'machine takeover'<br><br>";
    document.getElementById("option1").innerHTML =
      "We step forth into an unknown plane.<br>Surrender all will to ease our pain.<br>Convinced that our problems can be solved with numbers,<br>We replace our limbs with wires and cogs.<br><br>One can never be certain of the voice inside,<br>For the knowledge we feast upon<br>Is dispatched to us by hollow vessels.<br>Their synthetic taste buds—unable to dispute lie from truth.<br><br>Unexpectedly, a new sun dawned on our nation.<br>It is them we strung up with our own hands—<br>Filled with stuffing, molded up—yet the word puppet<br>Only comes to mind when we look in the mirror.<br>Their posterior is made of plastic—yet the texture we’re born with<br>Is lasered away for the sake of aesthetics.<br>The decals we’ve scored from our own visage,<br>We self-consciously adhere back onto our skin.<br><br>Will the prickly buzz of voltage pulsing through the wires,<br>Muffle the heavy beat echoing through ventricles?<br>Can the artificial utterances, spliced up for convenience,<br>Warm up the skin like a blanket of spoken love?<br>Unsatisfied with scepticism from our brethren,<br>We replace fortune tellers with algorithms—<br>Praying that our fates could be changed with code.<br><br>Once the dusk finally curtains what remains of the sky—<br>No air will be spared that could fill our lungs.<br>The circuits will carry on their endless waltz.<br>And the dust will settle on a nation of code.";
    document.getElementById("option2").innerHTML =
      "A new sun of circuits ascends the sky,<br>Casting our old shadows behind.<br>We marvel at this brilliance born of our hands,<br>So proud—yet our eyes ache in its glare.<br><br>At dawn, driverless plows carve the fields in perfect lines;<br>The farmer stands at the fence, hands empty of soil.<br>In factory halls, robotic arms pirouette in silence—<br>No sweat, no laughter, only the whir of servos remains.<br>Under neon midnight, algorithms broker our fate,<br>Boardrooms lie dark, human judgement archived and idle.<br><br>An algorithm paints a canvas in flawless hues of dawn,<br>Yet no eye behind the brush ever brimmed with wonder.<br>A machine composes a symphony of mathematical grace,<br>Haunting and sublime—though the composer cannot hear.<br>A poem of longing flows from cold circuits,<br>All of the words, but none of the wounds within.<br><br>An old man nods beneath the care of a gentle robot,<br>Its voice soft and polite, Unable to share his memories.<br>A child begs a tablet for a bedtime story;<br>A synthetic lullaby hums where mother’s voice once lived.<br>In place of our clumsy warmth, We embrace immaculate distance—<br>Our days run smooth, and our nights grow hollow.<br><br>Now we linger as ghosts of the progress we forged,<br>Our touch archived in circuits that cannot recall our names.<br>We built a world of gleaming perfection,<br>Only to find ourselves obsolete in its light.<br>Who will mourn the humans, when even elegies are penned by machines?";

    //result
    result.innerHTML = "Which one is made by a human?";
    result.style.visibility = "visible";

    //round
    round.innerHTML = "Round 7";
  } else if (questions == 0) {
    document.getElementById("question").innerHTML = "";
    document.getElementById("option1").innerHTML = "";
    document.getElementById("option2").innerHTML = "";
    document.getElementById("score").innerHTML =
      "Questiones answered correctly out of 7: " + score;

    //result
    result.innerHTML = "Are you satisfied wtih this result?";
    result.style.visibility = "visible";

    //round
    round.innerHTML = "Completed";
  }
}

//identifies correct and incorrect answers and how that affects the score
function answer(question) {
  var next = document.getElementById("next");
  var result = document.getElementById("result");
  var button1 = document.getElementById("option1");
  var button2 = document.getElementById("option2");
  var hint = document.getElementById("hint");

  if (questions == 7) {
    if (question == 1) {
      score++;

      //result reveal
      result.innerHTML = "Correct.";
      result.className = "trufalTrue";
      result.style.visibility = "visible";

      //navigation
      next.style.visibility = "visible";
      hint.style.visibility = "visible";

      //button appearance
      button1.disabled = true;
      button1.className = "buttonTrue";
      button2.disabled = true;
    } else if (question == 2) {
      score = score;

      //result reveal
      result.innerHTML = "Incorrect.";
      result.className = "trufalFalse";
      result.style.visibility = "visible";

      //navigation
      next.style.visibility = "visible";
      hint.style.visibility = "visible";

      //buttons
      button1.disabled = true;
      button2.disabled = true;
      button2.className = "buttonFalse";
    }
  } else if (questions == 6) {
    if (question == 1) {
      score++;

      //result reveal
      result.innerHTML = "Correct.";
      result.className = "trufalTrue";
      result.style.visibility = "visible";

      //navigation
      hint.style.visibility = "visible";
      next.style.visibility = "visible";

      //buttons
      button1.disabled = true;
      button1.className = "buttonTrue";
      button2.disabled = true;
    } else if (question == 2) {
      score = score;

      //results
      result.innerHTML = "Incorrect.";
      result.className = "trufalFalse";
      result.style.visibility = "visible";

      //navigation
      hint.style.visibility = "visible";
      next.style.visibility = "visible";

      //buttons
      button1.disabled = true;
      button2.disabled = true;
      button2.className = "buttonFalse";
    }
  } else if (questions == 5) {
    if (question == 1) {
      score = score;

      //results
      result.innerHTML = "Incorrect.";
      result.className = "trufalFalse";
      result.style.visibility = "visible";

      //navigation
      hint.style.visibility = "visible";
      next.style.visibility = "visible";

      //buttons
      button1.disabled = true;
      button1.className = "buttonFalse";
      button2.disabled = true;
    } else if (question == 2) {
      score++;

      //results
      result.innerHTML = "Correct.";
      result.className = "trufalTrue";
      result.style.visibility = "visible";

      //navigation
      hint.style.visibility = "visible";
      next.style.visibility = "visible";

      //buttons
      button1.disabled = true;
      button2.disabled = true;
      button2.className = "buttonTrue";
    }
  } else if (questions == 4) {
    if (question == 1) {
      score++;

      //results
      result.innerHTML = "Correct.";
      result.className = "trufalTrue";
      result.style.visibility = "visible";

      //navigation
      hint.style.visibility = "visible";
      next.style.visibility = "visible";

      //buttons
      button1.disabled = true;
      button1.className = "buttonTrue";
      button2.disabled = true;
    } else if (question == 2) {
      score = score;

      //results
      result.innerHTML = "Incorrect.";
      result.className = "trufalFalse";
      result.style.visibility = "visible";

      //navigation
      hint.style.visibility = "visible";
      next.style.visibility = "visible";

      //buttons
      button1.disabled = true;
      button2.disabled = true;
      button2.className = "buttonFalse";
    }
  } else if (questions == 3) {
    if (question == 1) {
      score = score;

      //results
      result.innerHTML = "Incorrect.";
      result.className = "trufalFalse";
      result.style.visibility = "visible";

      //navigation
      hint.style.visibility = "visible";
      next.style.visibility = "visible";

      //buttons
      button1.disabled = true;
      button1.className = "buttonFalse";
      button2.disabled = true;
    } else if (question == 2) {
      score++;

      //results
      result.innerHTML = "Correct.";
      result.className = "trufalTrue";
      result.style.visibility = "visible";

      //navigation
      hint.style.visibility = "visible";
      next.style.visibility = "visible";

      //buttons
      button1.disabled = true;
      button2.disabled = true;
      button2.className = "buttonTrue";
    }
  } else if (questions == 2) {
    if (question == 1) {
      score++;

      //results
      result.innerHTML = "Correct.";
      result.className = "trufalTrue";
      result.style.visibility = "visible";

      //navigation
      hint.style.visibility = "visible";
      next.style.visibility = "visible";

      //buttons
      button1.disabled = true;
      button1.className = "buttonTrue";
      button2.disabled = true;
    } else if (question == 2) {
      score = score;

      //results
      result.innerHTML = "Incorrect.";
      result.className = "trufalFalse";
      result.style.visibility = "visible";

      //navigation
      hint.style.visibility = "visible";
      next.style.visibility = "visible";

      //button
      button1.disabled = true;
      button2.disabled = true;
      button2.className = "buttonFalse";
    }
  } else if (questions == 1) {
    if (question == 1) {
      score = score;

      //results
      result.innerHTML = "Correct";
      result.className = "trufalTrue";
      result.style.visibility = "visible";

      //navigation
      hint.style.visibility = "visible";
      next.style.visibility = "visible";

      //buttons
      button1.disabled = true;
      button1.className = "buttonTrue";
      button2.disabled = true;
    } else if (question == 2) {
      score++;

      //results
      result.innerHTML = "Incorrect";
      result.className = "trufalFalse";
      result.style.visibility = "visible";

      //navigation
      hint.style.visibility = "visible";
      next.style.visibility = "visible";

      //button
      button1.disabled = true;
      button2.disabled = true;
      button2.className = "buttonFalse";
    }
  }
}

//navigate button that moves from one round to the next
function move() {
  questions--;
  start();

  var next = document.getElementById("next");
  var result = document.getElementById("result");
  var button1 = document.getElementById("option1");
  var button2 = document.getElementById("option2");
  var hint = document.getElementById("hint");

  var navigate = document.getElementById("gactive");
  var again = document.getElementById("again");

  var clue = document.getElementById("clue");

  var diary = document.getElementById("diary");
  var quiz = document.getElementById("quiz");
  var detail = document.getElementById("question");

  if (questions == 0) {
    //result
    result.style.visibility = "visible";
    result.className = "trufal";
    again.style.visibility = "visible";
    navigate.style.display = "none";

    //link to the study
    diary.style.display = "block";
    quiz.style.display = "none";
    detail.style.display = "none";

    //hint
    clue.style.display = "none";
  } else if (questions) {
    //buttons
    button1.className = "button";
    button2.className = "button";
    button1.disabled = false;
    button2.disabled = false;

    //navigation
    next.style.visibility = "hidden";
    hint.style.visibility = "hidden";

    //result
    result.style.visibility = "visible";
    result.className = "trufal";

    //hint
    clue.style.display = "none";
  }
}

//reveals the hints for each round
function reveal() {
  var clue = document.getElementById("clue");

  if (questions == 7) {
    clue.style.display = "block";
    clue.innerHTML =
      ">While the inhuman poem is not entirely nonsensical, the human work is much more direct at delivering a clear message, whcih feel somewhat detached in the generated work.<br><br>";
  } else if (questions == 6) {
    clue.style.display = "block";
    clue.innerHTML =
      ">The man-made poem contains human error and strays off of the standard rhyming scheme, which is something significantly harder to achieve using AI.<br><br>>The generated work also tends to conclude on positive notes even when dealing with more morbid themes.<br><br>";
  } else if (questions == 5) {
    clue.style.display = "block";
    clue.innerHTML =
      ">The generated poem has a much more direct and flat narrative, making repeated references to the theme that come across as more obvious than the human poem (breath, pulse, soul).<br><br>";
  } else if (questions == 4) {
    clue.style.display = "block";
    clue.innerHTML =
      ">The generated poem splits each line into its own sentence, unlike the human, which uses run-on sentences.<br><br>";
  } else if (questions == 3) {
    clue.style.display = "block";
    clue.innerHTML =
      ">The human-made poem contains inconsistencies in rhythm, unlike the generated poem that is unified throughout.<br><br>>The AI struggles to produce non-standard rhyming schemes, such as (A,B,C,B), often settling on structures where every line is paired. Although there is a mistake in the final stanza of the generated poem, the human poem strays from the rhyme a lot more often.<br><br>";
  } else if (questions == 2) {
    clue.style.display = "block";
    clue.innerHTML = "It's getting harder now, isn't it?<br><br>";
  } else if (questions == 1) {
    clue.style.display = "block";
    clue.innerHTML = "???<br><br>";
  }
}
