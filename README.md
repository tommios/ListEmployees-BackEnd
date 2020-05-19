## Node.js + MongoDB: User Authentication & Authorization with JWT

BackEnd part of the project ListEmployees.

Link to FrontEnd part [ListEmployees-FrontEnd](https://github.com/tommios/ListEmployees-FrontEnd/tree/dev-react-jwt-auth)

In the project directory, you can run:

### `node server.js`

#

#### These are the APIs we provide:

| Methods | Urls                 | Actions                            |
| ------- | -------------------- | ---------------------------------- |
| POST    | `/api/auth/signup`   | signup new account                 |
| POST    | `/api/auth/signin`   | login an account                   |
|         |                      |                                    |
| GET     | `/api/test/all`      | retrieve public content (TEST)     |
| GET     | `/api/test/user`     | access User’s content (TEST)       |
| GET     | `/api/test/mod`      | access Moderator’s content (TEST)  |
| GET     | `/api/test/admin`    | access Admin’s content (TEST)      |
|         |                      |                                    |
| POST    | `/api/employees/`    | create a new Employee              |
| GET     | `/api/employees/`    | retrieve all Employees             |
| GET     | `/api/employees/:id` | retrieve a single Employee with id |
| PATCH   | `/api/employees/:id` | update a Employee with id          |
| DELETE  | `/api/employees/:id` | delete a Employee with id          |
| DELETE  | `/api/employees/`    | delete all Employees               |

#

### Screenshots:

##### Login an legal account: POST /api/auth/signin

![Иллюстрация к проекту](https://github.com/tommios/ListEmployees-BackEnd/blob/dev-jwt-auth/image/01_Postman_signin.JPG)

#

##### Access protected resources: GET /api/employees/

![Иллюстрация к проекту](https://github.com/tommios/ListEmployees-BackEnd/blob/dev-jwt-auth/image/02_GET_with_token.JPG)

#

##### Access protected resource (without token):

![Иллюстрация к проекту](https://github.com/tommios/ListEmployees-BackEnd/blob/dev-jwt-auth/image/03_GET_without_token.JPG)

#

##### Collection Employees in MongoDB database:

![Иллюстрация к проекту](https://github.com/tommios/ListEmployees-BackEnd/blob/dev-jwt-auth/image/04_MongoDB.JPG)
