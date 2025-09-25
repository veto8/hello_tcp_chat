# hello_tcp_chat
Example to build a TCP chat server with clients 

The Transmission Control Protocol (TCP) is a foundational communication standard within the Internet Protocol (IP) suite, operating at the transport layer (Layer 4) of the OSI model 

## Start Server
```
cd servers 
python3.13 -m venv env 
source env/bin/activate
./server.py
```

## Start Gateway
```
./gateway.py
```

## Client Access via Linux Command line
```
sudo  apt-get install netcat
nc 127.0.0.1 8888
```

## Start Docker to access via a browser
```
cd dockers
docker-compose update -d
```

### Access via Browser
* http://127.0.0.1:88/

