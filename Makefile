install:
	npm install dashboard-website/
start:
	cd dashboard-website; npm start
clean:
	python3 run.py clean
prep:
	python3 run.py prep
test:
	python3 run.py test