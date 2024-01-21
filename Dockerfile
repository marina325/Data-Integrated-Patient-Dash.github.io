# For more information, please refer to https://aka.ms/vscode-docker-python
ARG BASE_CONTAINER=ucsdets/datahub-base-notebook:2022.3-stable

FROM $BASE_CONTAINER
EXPOSE 3000

WORKDIR /Data-Integrated-Patient-Dash.github.io

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1
# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1
USER root

# Copies the entirety of the current directory to the image, in order to access files later
COPY . .

# Install Node.js
RUN apt-get update && apt-get install -y curl \
    && curl -sL https://deb.nodesource.com/setup_current.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*


COPY requirements.txt ./

# Change to the dashboard-website directory and run npm install
WORKDIR /Data-Integrated-Patient-Dash.github.io/dashboard-website
RUN npm install

# Change back to the main directory
WORKDIR /Data-Integrated-Patient-Dash.github.io

# Install pip requirements
RUN pip install --no-cache-dir -r requirements.txt

WORKDIR /app
COPY . /app

# Creates a non-root user with an explicit UID and adds permission to access the /app folder
# For more info, please refer to https://aka.ms/vscode-docker-python-configure-containers

# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
# CMD ["python", "run.py"]
WORKDIR /Data-Integrated-Patient-Dash.github.io/dashboard-website
CMD ["npm","start"]