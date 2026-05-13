# MOVEMENT
A random 5-word sentence generator that pre-determines sentences from the start but gives the illusion of thinking.

The screen starts with 0s, before scrambling with random numbers to gradually reveal a sentence created by random assortments of words provided in a word bank. New sentences can be made by clicking on the screen.

Fundamentally, the art piece doesn't think for itself and might not even understand the sentences being provided. Yet, the movement created by the shuffling, appearing and disappearing of characters and numbers gives an illusion of intent and the processing of thought. 

My friends and I have also had plenty of fun trying to get profound or interesting sentences from the machine. In a sense, the machine has become its own entity to interact with, to entertain others. I also got desperate for sentences that I kept adding to the wordbanks, so I find it interesting how much more interesting it became after I added the scrambling function.

## INSPIRATION
I was very heavily inspired by the aesthetics of the [opening](https://youtu.be/Uf7Pn8GB_jI&t=11) for Ghost in the Shell (1995, Mamoru Oshii). This is a series that carefully incorporated cyberpunk aesthetics to consider technology's growing role in society. As this was released in a period where people were excited about technology, I thought it would be fun to borrow from these aesthetics to give life to my coded art piece.

## PROGRAMMING CHALLENGES
This project was really difficult to program at first, since there were a lot of systems I had to nail down to create the final project. Designing a canvas that could take a string and have each character gradually appear at a random order was difficult enough, but I had to add to that with scrambled digits that disappeared, all while making sure the letters looked right.

A lot of the work done was through arrays, which I had to keep referring back to the p5js documentation for to remind myself of how to use them effectively. While looking at other projects shown by a Google search, I also found out that p5js provided support for the creation of different classes. Since I learned a bit of object-oriented programming for Java earlier this year, I decided to transfer my knowledge to create a more organised solution for this project, wherein each line of characters was an instance of a singular class that contained methods for scrambling, replacing characters, and so on.

To add some further polishing, I also read ahead in the documentation to incorporate sounds and music to the project, which I still struggle to do as I haven't memorised the functions needed to do so.

## CLOSING REMARKS
Overall, I'm satisfied how with this turned out. If I had more time, I would've loved to see if I could change this project so the whole window is accounted for instead of a small portion of the screen.

## SOUND CREDITS
Gothic Ambient Noise 1 Stereo C3 by Vanyamba -- https://freesound.org/s/529152/ -- License: Creative Commons 0

DrumReverbHit.wav by csproductions -- https://freesound.org/s/36829/ -- License: Creative Commons 0

Button-impact by gobbe57 -- https://freesound.org/s/746674/ -- License: Attribution 4.0

Keyboard Typing, Medium Speed Typing, Fast Typing, Single Buttons, Enter Button, Space Button.wav by ZvoolabAudio -- https://freesound.org/s/456191/ -- License: Creative Commons 0

- Angelo D.