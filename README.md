# Personal Notes Manager
This is a REST API backend application that can be used to manage personal notes in a multi-user environment.

## Pre requirements

Install Node.js and MySQL 

- Nodejs environment
- Mysql server

## Getting started

- Installs all the dependencies for the project.

    `npm install`

- Start mysql server and create database called `personal_notes_database` in mysql server.

- Configure database properties in `config/database.js`

js

const mysql = require('mysql');

var pool      =    mysql.createPool({
    connectionLimit : 20, 
    host     : 'localhost',// Mysql host name
    user     : 'root', //Username for databse
    password : '', // Password for the databse
    database : 'personal_notes_database', //Databse name
    debug    :  false //Enable databse debug log
});

module.exports = pool;

- Import the `config/personal_notes_database.sql` to databse.

    `mysql -u username -p personal_notes_database < config/personal_notes_database.sql`

- Start the API server. Default port is `5000`
    `node app.js`


## How to use the APIs
APIs given by this application can be called for following purposes as shown below.


#### Add new note

`POST /new/{userId}`


| Name    | Type   | In   | Description                      |
|---------|--------|------|----------------------------------|
| userId  | string | path | Id of user who needs to add note |
| desc    | string | body | Content of the note              |

Ex: `localhost:5000/new/100`

Post body


{
    "desc": "My note description"
}


#### Update note

`PUT /update/{noteId}`


| Name    | Type   | In   | Description                      |
|---------|--------|------|----------------------------------|
| noteId  | string | path | Id of the note                   |
| desc    | string | body | Content of the updated note      |

Ex: `localhost:5000/update/2`

Post body


{
    "desc": "My note description"
}


#### Delete a note

`DELETE /delete/{noteId}`


| Name    | Type   | In   | Description                      |
|---------|--------|------|----------------------------------|
| noteId  | string | path | Id of the note                   |

Ex: `localhost:5000/delete/2`

#### Archive a note

`PUT /archive/{noteId}`


| Name    | Type   | In   | Description                      |
|---------|--------|------|----------------------------------|
| noteId  | string | path | Id of the note                   |


#### Unarchive a note

`PUT /unarchive/{noteId}`


| Name    | Type   | In   | Description                      |
|---------|--------|------|----------------------------------|
| noteId  | string | path | Id of the note                   |

Ex: `localhost:5000/unarchive/2`


#### List  notes (not archived) of a user 

`GET /view/{userId}`


| Name    | Type   | In   | Description                      |
|---------|--------|------|----------------------------------|
| userId  | string | path | Id of the user                   |

Returns array of notes

Ex: `localhost:5000/view/100`


#### List  archived notes of a user

`GET /viewarchived/{userId}`


| Name    | Type   | In   | Description                      |
|---------|--------|------|----------------------------------|
| userId  | string | path | Id of the user                   |

Returns array of notes

Ex: `localhost:5000/viewarchived/100`


## Technology used
Node.js , Expressjs, MySQL

reasons for using them :- 

Node.js has less learning curve and we can spinup up websever in few steps. And it has huge comminuty to support.
Express.js is powerful node js library to easily create http sever.
Since the database used here has a simple and predefined structure, MySQL is used here. MySQL provides tight clear schema for the data. Note app like this does not require NOSQL database as well.


## Further work

- Add proper authentication and authorisation michanism using JWT (login module)
- Implement unit testing ( `jest`)