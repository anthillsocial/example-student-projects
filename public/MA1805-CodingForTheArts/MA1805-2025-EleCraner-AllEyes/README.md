# Multiples
Blinking popped into my head as the perfect example of repetition, and the more I explored it, the more fascinating details I uncovered about this simple act we perform every moment.

Research into blinking patterns reveals a powerful connection to our thoughts and feelings. Our blink rate jumps during moments of excitement or anxiety. Some researchers even believe each of us has a unique 'blinkprint,' shaped by the rhythm and style of our blinks. It is a vivid reminder that our eyes truly offer a window into the soul.


## Design Choices

- I selected bold colours to breathe energy into the simple design.

- I designed the blinking pattern to highlight our shared humanity despite unique blinkprints, and to show that blinking serves a purpose beyond mere chance. 

- I allowed the eye pattern to shift with the window size, hinting at the countless eyes across the world. When the window is fully open, it suggests a sense of solidarity, even if it feels a little uncanny.

- I imagined that eye-tracking the mouse would add a playful, interactive twist.


## Debrief

- I enjoyed the coding part of this project a lot more because using a loop made drawing all the eyes more efficient. 

- I chose a simple design so I could concentrate on playful features—something I plan to consider in future projects. 

- I wanted to create a mouse-clicking multiplier for the blinking rate, but I struggled to implement it.

- I also wished to add features such as a clickable eye-blink effect, explore different blinking patterns, and change eye colors with each blink.

## References Used

- Used Throughout the code focused on atan2() and millis() - https://p5js.org/reference

- Animation Help - https://cratecode.com/info/p5js-animation-basics

## Study Notes 

This section is my study notes. I added explanations to the code to help me remember how and why it works. Please ignore this section…. unless it will help getting a better grade.


// A nested loop — it repeats, Sosay, cols = 5 and rows = 3, it would generate a 5×3 grid

     for (let x = 0; x < cols; x++) 
     for (let y = 0; y < rows; y++) 

// The offset depends on its grid position (x + y), eyes blink in a wave-like pattern instead of all at once.

      let blinkOffset = (x + y) * 100;

    
## Info 

- **millis()** returns the number of milliseconds since the program started.

- **sin() and cos()** return smooth, looping values between -1 and 1.

- variable storing how much the eye is closed at this point in the cycle: **let blinkAmount = 0;** - 0 → fully open, 1 → fully closed