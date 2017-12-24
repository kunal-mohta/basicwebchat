# basicwebchat

This is a basic web room functional over an local intranet, made using WebSockets and Node.js, for practice.

## Usage

*basicwebchat* works only on an local intranet, i.e. all the users should be connected to the same internet connection. (This is because I have implemented a local Node.js server that handles all the requests and responses)

Among all the users, one user has to act as the server and will have to follow these steps in order to host the local server :-

### Download Node.js
You will need Node.js and npm installed on your system. If you already have Node.js installed on your system, move to the next step.

To download Node.js using Terminal:

    sudo apt-get install nodejs
    
Or
Visit [nodejs.org](https://nodejs.org/en/) for more info about the installation.

### Install basicwebchat via npm
Install basicwebchat via [npm](https://www.npmjs.com/) (Node Package Manager)
Make sure that you are at the root directory of your system.
    
    npm install basicwebchat
    
If you didn't have any other previously installed node packages, then this command should create a `node_modules` folder in your root directory, but if you are already using Node.js and have other packages installed, then the `node_modules` folder already exists.

### Starting your local server

    cd node_modules/basicwebchat
    npm install
    node webchat.js

This will make your system a local server that will handle all the other clients using the chat room.

### Opening the chat room
In the `node_modules/basicwebchat` folder, you will find `index.html` file. Run this in your preferred web browser.

### How can others on the same internet connection join my chat room
There are 2 ways by which anyone on the same internet connection as the server can join the chat room:-

#### 1. Using locally downloaded HTML file
Follow the same steps as above, except [Starting your local server](#starting-your-local-server)
Instead, directly open the `index.html` file as mentioned in [Opening the chat room](#opening-the-chat-room).
This method works for users with laptops/pcs, but not for users on handhelds (mobiles,tables,etc.)

#### 2. Using locally hosted files by the user who made the server
The user who made the local Node.js server, can create another local server and host his/her system files. Files can be hosted using [NodeJS local server](http://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server), [Apache Server](https://httpd.apache.org/docs/trunk/getting-started.html), or any other server. (I personally prefer NodeJS server). Once the files are hosted, other users can run the ip address of the localserver, then navigate to the `node_modules/basicwebchat/` folder and run the `index.html` file.
This method works for users on both laptops/pcs and handhelds.

*Note:- The user who hosts his/her system files should be careful as other users can view all the content on his/her system that has been hosted over the local server*

#### 3. Cloning the github repository
The user can also clone [this](https://github.com/kunal-mohta/basicwebchat) github repository and directly run the `index.html` file. Again, this method only works for users on laptops/pcs.

### How to use the Chat Room
When you enter the chat room, i.e open the `index.html` file, it will ask you for your local internet ip address. If you don't know your ip, you can find it typing this in your terminal:-

    hostname -I
    
This will give an output something like:-

    192.168.x.x something something
    
You only need the `192.168.x.x` part.
Enter this when asked. (This remains same for all the users in the same chat room)

And you are done!

## Pointing out bugs/issues and suggesting possible improvements
This is a basic project made for practice and may contain bugs. You can open an issue in the github repository itself, or mail me your suggestions at `kunalmohta1818@gmail.com`
