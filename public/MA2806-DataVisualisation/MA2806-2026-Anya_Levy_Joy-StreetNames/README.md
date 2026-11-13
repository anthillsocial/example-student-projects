MA2806 - Data Journalism and Visualisation
Group Project: Street Names

GitHub Pages: https://anya-alyssa.github.io/MA2806-GroupProject-StreetNames/
GitHub Repo: https://github.com/anya-alyssa/MA2806-GroupProject-StreetNames

Summary: This project explores gender in street naming across three areas in London: Streatham (South London), Edmonton (North London), and Newham (North London) by examining how streets are named, and how the choices reveal historical and cultural power structures. By systematically collecting and categorising street names according to gender and its associations our project exposes patterns of omission. Names linked to aristocracy or landowners allows us to identify how gendered recognition is operated differently across urban spaces. 
The visualisation is integral to our project’s impacts. Through the creation of detailed plotted maps that are interactive that translate raw data into an engaging experience. Using geographic coordinates each street name that are named is mapped onto our digital maps, allowing users to explore he patterns of gender representation. The zoom functionality enables both macro and micro perspectives: users can zoom out to understand broader spatial trends across Streatham, Edmonton, and Newham, as well as the geographical context or to zoom into individual streets and their specific naming history. 
Each plotted point of named street on the map is interactive. The icon was specifically designed by Levy using Canvas and it when hovered over shows information on the selected street. The street icons are colour coded red for female associated names, blue for male associated, so that users can identify easily. The colour system visually emphasises the disparities in representation.
Focusing on everyday geography our project draws attention to how mundane objects or details also suffer from systematic inequalities. Street names are markers that most people never pay attention to, but they are cultural artefacts and the absence of women in the cities historical narrative is worrisome. 
Ultimately the projects are about the relationship between the environment and power. It meant to make viewers consider the space around them and question whose history is being overlooked. To open a discussion on urban landscapes and fostering community and challenging patriarchal structure. 


Description of dataset - Anya:
    The dataset we used was derived from the Ordnance Survey 'Open Names' dataset, found on the gov.uk website. This dataset is a "comprehensive dataset of place names, road numbers and postcodes for Great Britain" (Ordnance Survey, 2025).
        Authors: Ordnance Survey
        Source: Ordnance Survey Open Names on data.gov.uk
        Publication date: 16 April 2025
        Format: CSV files
    
    From this dataset, subsets were created for our three chosen areas of Streatham (Anya), Edmonton (Levy), and Newham (Joy). This was done using the terminal commands*, that were taught by Tom Keene, to filter our specific location's street names, providing us with much smaller, more manageable datasets. We then manually sorted through and categorised our individual datasets into either: male, female, unisex, or unnamed. These were then manually plotted into the map on our website by finding the coordinates of each street and adding it to our dataset.

*terminal commands used:
cd '/Users/anya/Desktop/opname_csv_gb-2/data’ - (changes directory to data folder)
cat *.csv (combine all the data files into one long string of data)
cat *.csv | grep "SEARCHED NAME" - (searches for inputted name in all the data)
cat *.csv | grep "SEARCHEDNAME" > ~/Desktop/NAMEOFFILE.csv (puts it all into one file)
csvcut -c COLUMNS WANTED ~/Desktop/FILENAME.csv | csvgrep -c 2 -r SEARCHEDNAME| csvlook - (prints filtered columns to you in terminal)
csvcut -c COLUMNS WANTED ~/Desktop/FILENAME.csv | csvgrep -c 2 -r SEARCHEDNAME > ~/Desktop/NAMEOFFILE.csv - (puts filtered data all into one file)

Overview of design/technical/other challenges with descrtiption of how the project was collectively developed:
    Design: 
    - The use of contrasting colours to distinguish gender categories
    - The use of a simple and neutral website design with two standout colours
    - Minimal interface to not distract the user
    - Use of specific markers to the areas so it is easy to differetiate
    - Lowering the opacity of the markers to clearly see the density of the amount of markers in an area.

    Technical:
    - Maps implemented with leaflet.js and OpenStreetMap
    - Pulling the data from the original dataset to try and isolate just the locations needed
    - Also pulling only the relevent fields of the dataset
    - Loading the data through the JSON files
    - Adding cutom markers instead of the provided leaflet.js marker that could only be one colour (blue)

Group Description
    Group Members and Roles
    - Anya - Coding and project management
        - Coded the project (with help from Tom Keene's lecture notes and the leaflet.js resources)
        - Collected datasets using terminal commands
        - Sorted, researched, and added data for 'Streatham'
        - Wrote up all written content for Streatham findings
        - Made pie chart for Streatham
        - Ensured visual consistencey throughout the project
        - Formatted and cleaned up information cards 
        - Helped write data collection section and added key in introduction section
        - README file (except Summary section and othe members group description)

    - Levy - Visual design
        - Design the elements pop-ups (street name title,data collection pop-ups street name pop-ups, areas pop-ups, reference pop-ups)
        - Design Background
        - Design each area icons 
        - Sorted, researched, and added data for 'Edmonton'
        - Wrote up Edmonton findings

    - Joy - Copy Writer
        - Researched and added data for 'Newham'
        -Wrote up Newham and added a few details for Edmonton
        -Crafted written content across the project
        -Translates research into more accessible for viewer
        -Develops tone 
        -Writes copy for the readme file
        -Illustrate how racism is all over the UK

    We worked and communicated via a combination of in-person meetings (to check in on progress, make decisions and discuss issues) and a gorup chat made on Instagram (for regular updates, questions and general communication on the project). The workload was distributed as: coding would be handled primarily by Anya, write ups would be done by Joy, visual design and artwork would be done by Levy, and the data collection and plotting would be shared across all team members, each focusing on our dedicated area (though we were not confined to our roles and helped each other when needed). If conflict were to arise, minor problems would be resolved through a discussion, but any major concerns are to be taken to Tom Keene for advice.


 References: 
    Ordnance Survey (2025) OS Open Names. data.gov.uk. Ordnance Survey. Available at: https://www.data.gov.uk/dataset/4949c88e-89b7-49b5-a0cf-8a3a2a4dac9d/os-open-names1
    Newham Named streets:


 https://www.newhamrecorder.co.uk/lifestyle/21431189.stories-behind-newhams-road-names/
    A-Z names: 
https://streets.openalfa.co.uk/london-borough-of-tower-hamlets
By Postcode:
https://londonstreetguide.com/postcodes/
Diversity in naming (visual aid):
https://hackneynaminghub.commonplace.is/en-GB/map/map

