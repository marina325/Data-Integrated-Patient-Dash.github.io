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
Creating a virtual environment and installing Python dependencies:<br>
In the main directory ("Data-Integrated-Patient-Dash.github.io"), type `source venv/Scripts/activate` in order to enter the virtual environment.<br>  You'll know because the left of your terminal should now have something like '(venv)'.<br>
From here type `pip install -r requirements.txt` in order to install all required Python dependencies. <br>

Cleaning, Prepping, Testing Data with Makefile:<br>
- To clean data, type `make clean`
- To prep data for plotting, type `make prep`
- To test data, type `make test-`

Now, to install all required JavaScript dependencies, type `make install` <br>

##### Running the Dashboard
Once everything is installed we can type `make start` in order to run the dashboard with the patient data we currently have. <br>

#### Windows
Creating a virtual environment and installing Python dependencies:<br>


In the main directory ("Data-Integrated-Patient-Dash.github.io"):<br> type `venv\Scripts\Activate.ps1` (if using powershell) or `venv\Scripts\Activate.bat` (if using cmd) <br>
If there is an issue running this code, you need to change your ExecutionPolicy. While this can be dangerous if done incorrectly, this guide will help you do it safely: <br>
- In your terminal, type `Set-ExecutionPolicy Unrestricted -Scope Process` in order to run your venv.
- Next, type `venv\Scripts\Activate.ps1` or `venv\Scripts\Activate.bat` in order to create your virtual environment.
- Finally, type `Set-ExecutionPolicy Default -Scope Process` to reset your ExecutionPolicy to default settings.
- You should be in the virtual environment. You'll know because the left of your terminal should now have something like '(venv)'. <br>
From here type `pip install -r requirements.txt` in order to install all required Python dependencies. <br>

Cleaning, Prepping, Testing Data:<br>
- To clean data, type `python run.py clean`
- To prep data for plotting, type `python run.py prep`
- To test data, type `python run.py test`

Now, to install all required JavaScript dependencies, once in the correct directory("Data-Integrated-Patient-Dash.github.io") type `cd dashboard-website` then `npm install`. This should install all required dependencies <br>

##### Running the Dashboard 
Once everything is installed we can type `npm start` in the terminal in order to run the dashboard with the patient data and plots we currently have.<br>


### Links to API
For more information, these are the links to the Oura API, where a good amount of our data is sourced from. 

Patient Readiness Data: https://cloud.ouraring.com/docs/readiness <br>
Patient Sleep Data: https://cloud.ouraring.com/docs/sleep <br>
Patient Activity Data: https://cloud.ouraring.com/docs/activity <br>
Patient Bedtime Data: https://cloud.ouraring.com/docs/bedtime <br>

