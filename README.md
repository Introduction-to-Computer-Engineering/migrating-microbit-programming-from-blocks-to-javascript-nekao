# CPE 1040 - Introduction to Computer Engeneering

## Assignment: Migrating micro:bit Programming from Blocks to JavaScript

### 1. Summary

This assignment asks you to go through a [Intro to CS course with Blocks](https://makecode.microbit.org/courses/csintro) for the micro:bit, and write parallel programs using the JavaScript equivalent of the code in the course modules. This assignment is submitted through Github.

### 2. Requirements

#### 2.1 Section programs

1. The CS course is broken down into thematic sections. There are 5 sections + 1 midterm project + 5 sections + final project. Each section has 4 parts. You want the _Activity_ part, which contains the section's CS material and Blocks.

2. You need to write a _working_ JavaScript (JS) program for the micro:bit for each of these sections/projects, for a total of 12.  

3. For the non-project sections, you are required to use the JS equivalent of the material from the section. _**Note:** For these programs, you are allowed to look at the JS translation of Blocks programs._

4. For the midterm project, you are required to use the JS equivalent of the material from all 5 preceding sections.  _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._ (An aside: if you don't know how to read a statement like "you are not allowed to", the intended and preferred interpretation is "you can do whatever you want and won't be penalized by me, but, if you want to learn most effectively, I suggest that you do not resort to...".)

5. For the final project, you are required to use the JS equivalent of the material from all 10 preceding non-project sections. _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._

#### 2.2 Github commits & tags

1. Working in the Makecode browser environment, you cannot save the JS file of your program in a directory of your choosing. It is stored in an in-browser memory object and is not accessible. (A side note: there might be a Makecode app for Windows which might actually allow that, but there is nothing like that for Mac, to the best of knowledge.) So, you will need to copy the JS from Makecode to another editor (preferably, a code editor with syntax highlighting and code manipulation) and then save and commit it.

2. You need to commit the changes and additions to your assignment for each section or project. This means that there should be _at least_ 12 commits pushed to your remote assignment repository on Github when you are done. I advise you to have more than that, to get used to it.

2. You need to **tag** the final commit for each section. Tags are under _releases_ in the repository bar on the Github page of the assignment repository. The tag should be one of the following `v0.1`, `v0.2`, ..., `v0.12`, for each section, respectively. (Terminology clarification: the `git` command is `git tag`, but tags are counted as _releases_ on Github.)

3. You need to update the assignment repository [README.md](README.md) (this document, in the section [Tags](#tags)) with a short description of your section program or project, **before** you tag. You can do that directly on Github after you push your commits from your local repository.

#### 2.3 Project design

1. For each of the two projects, you need to include a design "document" in the [README.md](README.md) (this document, in the section [Designs](#designs)).

2. The design "document" should follow the _problem-solving tips_ in the [mini-project page](https://makecode.microbit.org/courses/csintro/miniproject).

3. The design "document" should have at least the following sections: Goal, Design process, and JS Language Constructs & Objects. Articulating clearly your engineering work is a key professional skill.

## Resources

### micro:bit 

1. [micro:bit lessons](https://makecode.microbit.org/lessons).

2. [micro:bit ideas](https://microbit.org/ideas/).

3. A list of some more [advanced projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects).

4. The [projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects) at the [awesome micro:bit list](https://github.com/carlosperate/awesome-microbit).

### Github

1. Github Tutorial for Beginners ([webpage](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)).

2. Github Basics for Mac and Windows ([video](https://www.youtube.com/watch?v=0fKg7e37bQE)).

3. git & Github Crash Course for Beginners ([video](https://www.youtube.com/watch?v=SWYqp7iY_Tc)).

4. Introduction to Github for Beginners ([video](https://www.youtube.com/watch?v=fQLK8Ib_SKk)).

5. About `git` ([webpage](https://git-scm.com/about)).

6. `git` [documentation](https://git-scm.com/doc) (webpage, book, videos, reference manual).

7. [Github markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### JavaScript

1. Technically, the language which is used side-by-side with Blocks in the Makecode environment is a subset of [TypeScript](https://makecode.com/language), which itself is a superset of JavaScript (technically, [ECMAScript](https://www.ecma-international.org/ecma-262/10.0/index.html#Title)), with some JS features not implemented in Makecode.

2. The limited [JavaScript mini-tutorial](https://makecode.microbit.org/javascript) in Makecode. Make sure you read it but that can't be your only reference.

3. Official [TypeScript documentation]():
   1. TypeScript in 5 min [tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). _**Highly recommended!** You will need to [download](https://www.typescriptlang.org/index.html#download-links) and install an integrated development envinronment (IDE). The two that I recommend are Visual Studio Code from Microsoft and WebStorm from JetBrains._
   2. The full documentation and reference is under _Handbook_. Bear in mind that you are drinking from the hose. Don't be surprised if not everything is presented in a strictly incremental manner.
   
4. In-browser TypeScript [playground](https://www.typescriptlang.org/play/index.html). Note that micro:bit specific code will not run, but you can still play. _Start making the distinction between a generic multi-purpose programming language (TypeScript) and functionality (packages, libraries, objects, etc.) that is specific to a particular device (micro:bit), though written in the same programming language._

5. A pretty good and very palatable JS tutorial with in-browser coding, by [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript).

6. Extensive and detailed [JS tutorial](https://javascript.info/), with some advanced material thrown in. _**I like this one!**

7. The most authoritative JS resource on the Web, including tutorials and reference, by [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

---

## Tags



### v0.1
This program forever displays a happy then briefly pauses then displays a sad face.
[Activity 1](1HappySadFace.js)

### v0.2
This program displays a happy face when A is pressed and displays a sad face when B is pressed. After A or B is pressed the screen is cleared.
[Activity 2](2HappyFaceSadFace.js)

### v0.3
This program is a score keeper. If A is pressed A gets a point. If B is pressed B gets a point. If A and B are pressed at the same time, they get a tie. When the players are done, they can shake the device to display the amount A wins, B wins, and the number of ties.
[Activity 3](3Scorekeeper.js)

### v0.4
This program is a game in which upon shaking it will randomly pick rock, paper, scissors, and human. When A is pressed a win is given to the user and when B is pressed a losses is given to the users. When both is pressed the program will display the total games and if user wins or losses.
[Activity 4](4RockPaperScissors.js)


### v0.5
This program displays a continues led that move across the device starting at the top right and restarting at the bottom left. It also will play a tone while device is shaking and button A is pressed.
[Activity 5](5TravilingLight.js)


### v0.6
This program is called Live Pet Game has several inputs that controls the game. The games stars with a happy face display which is the pet and 100 points of health. If user shakes device the program will run a randomly select a heath loss with a unique face change paired with the different loss of health. As well if the A button is pressed and held a continues health gain will happen and image of a small heart to a big heart will display until A is released.  If both A and B are pressed the program will display a light that goes down the screen, then display the health and a silly face. Whenever the pet’s health hit 0 points a skull will display, and the user will have to press B button to restart their pet's health to 100 point again.
[Mid-term](6LivePetGame.js)

### v0.7
There are three programs in this activity the first one Brightness Changes the Brightness of the leds. If A is pressed brightness will go down and if B is pressed the brightness will rise. the second pogrom Random Patterns Generators. In this program if A or Be is pressed it will use to different syntaxes to display random led displays. The last program Smile Animation displays a face that continues to display a neutral face then a silly face, switching back and forth.
[Activity 7](7SmileAnimation.js, 7RandomPatternsGenerator.js, 7Brightness.js)

### v0.8
This program is a coin flip game. By shaking the device, it will randomly display A or B, heads or Tails. after the game is played the user then can reset the scores by pressing A.
[Activity 8](8DoubleCoinFlipper.js)

### v0.9
This Program is atranslator. When A is pressed it equals 1 and When be is pressed it equills 0. If A and B are pressed it displays what every biantry number the user input with binary and it displays it in a decimals.
[Activity 9](9BinaryTransmogrifier.js)


### v0.10
This program send miscode between devices. if user Presses A it will send 0 and display the coinciding miscode led image. The same goes for the buttons B and AB just with their own unique number and coinciding image.
[Activity 10](10MorseCode.js)


### v0.11
Both programs use arrays. the first program GamePlay on star will count down then show a random word from the list. If user want to restart, they will just need to flip the device upside down then right side up and it will start over again. The second StaryNights when user presses A an array display a random twinkling display of leds. The last program TraversingArray has no functions is is just a good example how to wright an array. 
[Activity 11](11GamePlay.js, 11StarryNight.js, 11TraversingArray)


### v0.12
in this program the user must grow their plant. To grow the plant the user must hold down the A button to water it. as the plant grows it can be seen growing the led display. As is grows the brightness get brighter and when it losses its life it shrinks in size and the brightness dims. When user shakes are randomly chooses a decrease in health. If B is pressed it display health and after uses an array to choose a random word from the array to display. if health of plant reaches zero the plant dies, and user must press AB the restart program. This plant can also interact with other by sending 0,1,2 to the other user the numbers mean giving health or taking health.

## Designs

### Midterm project

#### A fun game that gives the user a fun pet to try and keep alive
**This program is called Live Pet Game has several inputs that controls the game. The games stars with a happy face display which is the pet and 100 points of health. If user shakes device the program will run a randomly select a heath loss with a unique face change paired with the different loss of health. As well if the A button is pressed and held a continues health gain will happen and image of a small heart to a big heart will display until A is released.  If both A and B are pressed the program will display a light that goes down the screen, then display the health and a silly face. Whenever the pet’s health hit 0 points a skull will display and the user will have to press B button to restart their pet's health to 100 point again. **

#### Design process

**I first tried to do this program with a plant but could not figure out how to display the growth of a plant. Do to that i did a pet. Fist i asked how it should gain and losses health. the answer of this was pressing A to feed and add health. As well I made the health decreases though the user shaking their pet. Heath is very important for the user to continue playing this game. This game lies heavy on the fact of user interactions including A button, AB button. b button restarts the program. The final program run perfectly**

#### JS Constructs & objects

****

### Final project

#### A fun game that allows the user to use several diffrent methods to grow their plants
**In this program the user must grow their plant. To grow the plant the user must hold down the A button to water it. as the plant grows it can be seen growing the led display. As is grows the brightness get brighter and when it losses its life it shrinks in size and the brightness dims. When user shakes are randomly chooses a decrease in health. If B is pressed it display health and after uses an array to choose a random word from the array to display. if health of plant reaches zero the plant dies, and user must press AB the restart program. This plant can also interact with other by sending 0,1,2 to the other user the numbers mean giving health or taking health. **

#### Design process

**I first tried to do this program within the midterm but could not figure out how to display the growth of a plant. after completing the rest of the activities i figured it out. i just needed to set the display led in and if statement that ties in this the health gain or losses. Fist i asked how it should gain and lose health. the answer of this was pressing A to water the plant and add health. As well I made the health decreases though the user shaking the device and other device communication. Heath is very important for the user to continue playing this game. This game lies heavy on the fact of user interactions including A button, B button, shaking, radio, face down, face down and A, and face down and B. AB button restarts the program. The final program run perfectly**

#### JS Constructs & objects

****.



