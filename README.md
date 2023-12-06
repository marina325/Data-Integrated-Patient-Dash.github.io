# Medical Dashboarding - Quarter 2 Project

Bioengineering Students' GitHub
<br> Website link: https://data-integrated-patient-dash.github.io/

This is the section that Data Visualization will handle. 

## Current Plans
- Add a section where you are able to select any two (different) variables and subject them to analysis.<br>
- Add data querying sections in order to visualize specific time frames.


## Downloading and Running This Code (currently, *needs changing*)
In order to properly run this code, you must copy this repository into a local machine, and then change to the dashboard website directory. <br>Once you've changed into the correct directory (It will be named something similar to "Data-Integrated-Patient-Dash.github.io/dashboard-website").

 *** All code snippets are contained within single quotes, for instance: 'example code' ***

### NodeJS
Node JS is currently required to run the dashboard locally. <br> If NodeJS is not currently in your local system head to the following website https://nodejs.org/en/download and download the most current version of nodejs for your system.<br> 
NodeJS is required to run required javascript files.<br>

If you're running an IDE such as VSCode, restart it in order for nodejs to begin working. <br>

#### MacOS
Now, to install all required dependencies, run: 'make install' <br>

##### Running the Dashboard
Once everything is installed we can run 'make start' in order to run the dashboard with the patient data we currently have.

#### Windows
Now, to install all required dependencies, once in the correct directory("Data-Integrated-Patient-Dash.github.io") cd 'dashboard-website' then type 'npm install'. This should install all required dependencies <br>

##### Running the Dashboard 
Once everything is installed we can run 'npm start' in order to run the dashboard with the patient data we currently have.<br>


### Links to API
For more information, these are the links to the Oura API, where a good amount of our data is sourced from. 

Patient Readiness Data: https://cloud.ouraring.com/docs/readiness <br>
Patient Sleep Data: https://cloud.ouraring.com/docs/sleep <br>
Patient Activity Data: https://cloud.ouraring.com/docs/activity <br>
Patient Bedtime Data: https://cloud.ouraring.com/docs/bedtime <br>

