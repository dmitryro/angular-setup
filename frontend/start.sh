kill -9 $(lsof -t -i tcp:4201)
ps -ef | grep 'legendanalytics-frontend-ng10' | grep -v grep | awk '{print $2}' | xargs -r kill -9
ps -ef | grep 'yarn' | grep -v grep | awk '{print $2}' | xargs -r kill -9
ng serve --port 4201
