# Start the hub
java -jar selenium\bin\selenium-server-standalone-3.4.0.jar -role hub -host 127.0.0.1

# Start a node for each capability

# Chrome
java -jar selenium\bin\selenium-server-standalone-3.4.0.jar -role node -host 127.0.0.1 -nodeConfig selenium\conf\chrome.conf.json

# Firefox
java -jar selenium\bin\selenium-server-standalone-3.4.0.jar -role node -host 127.0.0.1 -nodeConfig selenium\conf\firefox.conf.json

# ie
set _JAVA_OPTIONS="-Dwebdriver.ie.driver=C:\external\find-a-rep\selenium\bin\IEDriverServer.exe"
java -Dwebdriver.ie.driver=C:\external\find-a-rep\selenium\bin\IEDriverServer.exe -jar selenium\bin\selenium-server-standalone-3.4.0.jar -role node -host 127.0.0.1 -nodeConfig selenium\conf\ie.conf.json

# Edge
java -jar selenium\bin\selenium-server-standalone-3.4.0.jar -role node -host 127.0.0.1 -nodeConfig selenium\conf\edge.conf.json
