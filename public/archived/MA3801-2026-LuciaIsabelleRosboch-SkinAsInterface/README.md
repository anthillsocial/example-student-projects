# The Skin as Interface: Systems of Control

<!-- ================= LIVE PROJECT ================= -->
## Live Project
The project can be accessed as a fully functional interactive website:

🌐 https://luciar05.github.io/ADMP_SkinDeep/

<!-- The deployed version preserves the intended interactive structure and allows real-time engagement with the FaceMesh scanning system. -->

<!-- ================= REPOSITORY ================= -->
## Repository
The full project, including source code and assets, is available on GitHub:

🔗 https://github.com/LuciaR05/ADMP_SkinDeep

<!-- ================= RUNNING LOCALLY ================= -->
## Running the Project
To view the project locally:

1. Clone or download the repository  
2. Open the project folder  
3. Run `index.html` in a browser (Chrome recommended)  
4. Allow camera access when prompted for the FaceMesh scan  

<!-- ================= DOCUMENTATION ================= -->
## Documentation
The repository includes:
- Full HTML, CSS, and JavaScript source files  
- FaceMesh integration (ml5.js)  
- Interface structure and interaction logic  
- Assets used within the project  

## Overview
This project is a scroll-based interactive website that explores skin as an interface shaped by digital surveillance, medical systems, and consumer culture.

Rather than presenting information passively, the website is designed as an active system that the user moves through. It simulates processes of observation, diagnosis, and recommendation, reflecting how skincare is encountered in contemporary digital environments.

## Concept
The project investigates how skin is no longer treated as a purely biological surface, but as something continuously analysed, measured, and optimised.

It draws on ideas of:
- surveillance and data capture
- medical classification and diagnosis
- consumer-driven self-improvement

The interface positions the user within these systems, encouraging interaction while subtly controlling how content is revealed.

## Structure
The website is organised into three main stages:

1. **Scan (Observation)**
   - Real-time face tracking using FaceMesh (ml5.js)
   - Generates simulated dermatological metrics
   - Displays floating “diagnostic” language across the face

2. **Medical (Classification)**
   - User records and diagnostic timeline
   - Interface mimics clinical authority
   - Frames normal skin variation as requiring intervention

3. **Commercial (Consumption)**
   - E-commerce inspired interface
   - Interactive product cards (click on each card to reveal layers)
   - Simulates recommendation systems and ongoing dependency

## Technologies Used
- HTML — structure and layout
- CSS — visual design and interface styling
- JavaScript — interactivity and system logic
- p5.js — canvas rendering
- ml5.js (FaceMesh) — real-time face tracking

## Key Features
- Real-time face scanning and landmark detection
- Dynamic “dermatology” data generation using noise functions
- Scroll-based interaction and content reveal
- Modal-based product system
- Layered card interactions (product → ingredients → system effect)
- Infinite pagination simulation

## Intent
The project aims to blur the line between interface and argument.

By interacting with the system, the user experiences how bodies are:
- observed
- interpreted
- commodified

rather than simply reading about these processes.

## Notes
- The dermatological metrics are intentionally inaccurate and generated artificially.
- The system is designed to appear authoritative while remaining constructed.
- Interaction is used as both a tool and a subject of critique.

---


# ReadMe Notes and Diary Log — skin as interface

---

### starting point
began with skincare + social media  

very visual… lots of references but nothing really happening  
felt too descriptive?? like i was just explaining instead of building something  

---

### early structure attempts
looked at scrollytelling (the pudding etc)  

tried splitting into multiple sections  
they worked on their own but together felt disconnected  

no clear system, just separate ideas  

---

### shift in thinking
started thinking about skin as an interface instead  

this changed everything a bit  
less about showing images, more about systems acting on the body  

---

### scan section (facemesh)
introduced facemesh  

first time the project felt “active”  
like it was doing something to the user  

added:
- tracking points
- dermatology panel
- floating text (negative skin language)

problem:
too chaotic at first  

later:
reduced amount of text  
slowed movement down  
made it feel more controlled / clinical  

also changed colours from green → softer tones  
green felt too technical, wanted something more subtle but still uncomfortable  

---

### medical section
originally had multiple patients  

didn’t work  
felt disconnected + broke immersion  

changed to one user (USER 38121)  

later:
structured it more like a timeline  
(detection → optimisation → dependency)

this made it feel more directed + less observational  

---

### structure change
at one point everything was still separate  

merged into one continuous scroll  

this helped a lot  
felt like one system instead of different parts  

realised:
adding more content wasn’t fixing it  
structure was the main issue  

---

### product / commercial section
built ecommerce-style interface  

inspired by sephora layout  

product cards:
- product view
- ingredients
- “system effect”

later:
changed interaction from hover → click  

hover felt too quick / passive  
click makes it slower + more deliberate  

also added pagination (goes up to 999)  
idea = no endpoint, just continuous system  

---

### visual problems / fixing things
earlier versions were messy  

- floating science images everywhere  
- too many elements overlapping  
- red accents were too strong  

later:
moved science images into a panel  
reduced red usage  
fixed spacing + typography  

realisation:
cohesion isn’t just visual  
when sections feel separate, the whole system breaks  

---

### general thoughts while making
kept thinking about control  

wanted user to feel like they’re in control  
but actually everything is structured for them  

---

### towards the end
project works best when it feels like a system  

scan → diagnosis → recommendation  

that progression feels clear  

BUT also…  

questioning if interaction just repeats the same logic  
like users might just go through it without really questioning anything  

---

### if i kept developing it
would make it more responsive  

face scan → actually feeds into other sections  

so it feels personalised  
but still no final solution (just loops)