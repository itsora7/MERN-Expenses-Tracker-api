# Transaction API

This api is for out react transaction app which is at `... link to react app repo ...`

... what this app is ...

## How to use

1. clone this project by running `git clone https://github.com/itsora7/MERN-Expenses-Tracker-api.git`
2. Run `cd MERN-Expenses-Tracker-api`
3. Run `npm i`
4. Run `npm run dev` . You must have `nodemon` install your system, otherwise run `npm i nodemon -g` to install globally

Now the project will be server at `http://localhost:8000`

# API

This api server will be have 2 api endpoints

1. User API
2. Transaction API

All the endpoint will follow the following path `{rooturl}/api/v1`

# User API

User api will use the following path `{rooturl}/api/v1/user`. This api will allow client to create user, login and more.

# Transaction API

User api will use the following path `{rooturl}/api/v1/transaction`. This api will allow client to do CRUD operation on transaction table.

| #   | PATH | METHOD | IS Private | DESCRIPTION                                                                                                        |
| --- | ---- | ------ | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| 1.  | `/`  | GET    | true       | allow user to fetch their own transcation only                                                                     |
| 2.  | `/`  | POST   | true       | allow user to POST new transcation, data should be send as `{}`                                                    |
| 3.  | `/`  | PUT    | true       | allow user to UPDATE their own transcation                                                                         |
| 4.  | `/`  | DELET  | true       | allow user to delete single or multiple of their transcation only. and client should send the data as `[id1, id2]` |
