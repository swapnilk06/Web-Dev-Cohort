#### Revision Timeline - [1:34:0 min]


# Chapter-0

## What in that chapter-0?
- Intro
- Architecture 
	- What is building?
	- How to handle code execution?
	- What are required for installation?
- Move to actual project setup

<br>

## We build - Leetlab (product inspired by leetcode)

### Tech Stack using -
- Backend
	- Node-js
	- Express-js
	- Postgres
	- Prisma
	- judge0 i.e. 3rd party for code execution (install using docker) --> inside your system

- Frontend
	- JS
	- React-js/Vite
	- Tailwind-css
	- Diasy-ui
	- Zustand (for global state management)
	- Zod and React-Hook-Forms


<br>


### In Backend side
- Whats are in that API Routes?
- Inside API Route we are handle -
	- Authentication
	- Problem Management(Proper & CRUD operation related to problem)
	- Code Execution
	- Submission
	- Playlist

### How our platform work?
- User/Admin
  - Admin
		- Admin can create the problems (testcases, codesnippets, referenced-solution)
		- On judge0(going to validate each question with testcases) execute & validate
		- Save in db (after validate all testcases then store in db)
	- User
		- get the problems
		- execute code (loop through each test cases & execute the code) --> if fails then stop
		- Save submission to db (after all test cases are passed)
		- Track problems solved
		- Store individual test case results
		- Fetch submission with test cases(showing to user)

<!-- Chapter-0 (Intro & Platform work) END -->


<br>


## Setup & Installation
Steps -
1] Create folder - leetlab
2] Project divide into 2 folders part -
	- backend (1stly backend approch)
	- frontend


File/Folder Structure -
```
Practice - Building a LeetCode Clone - Part 1/
│── leetlab/            
│   │── backend
│   └── frontend
└── What in that.md
```

<br>

## Backend setup
Steps -

1] Move to backend/ -
```sh
cd backend
```

2] For node JS project initialize (related JS)
```sh
npm init --y
```

3] Change `package.json` to below 
- For latest ES6 features
"type": "commonjs" => to => "type": "module"  

in that create - `backend/package.json`

package.json
```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "src/index.js",
  "scripts": {
    "dev": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "description": ""
  
}
```

4] Globally install `nodemon`
That help to do not need to restart backend sever every time.
```sh
npm i -g nodemon
```

File/Folder Structure -
```
Practice - Building a LeetCode Clone - Part 1/
│── leetlab/            
│   │── backend/
│		│		│── node_modules
│		│		│── package-lock.json
│		│		└── package.json
│   └── frontend
└── What in that.md
```

<br>

### Install Dependencies (basic)

1-1] Install prior dependency is --> `express`
```sh
npm i express
```

### Setup Express JS backend sever in `index.js`

in that create - `backend/src/index.js`

> [!NOTE]
> - Do not write port no. directly (do not hardcode)

```js
import express from "express";

const app = express();

app.listen(8080, () =>{
	console.log("Server is running on port 8080");
})
```

File/Folder Structure -
```
Practice - Building a LeetCode Clone - Part 1/
│── leetlab/            
│   │── backend/
│		│		│── node_modules
│		│		│── src/
│		│		│		└── index.js
│		│		│── package-lock.json
│		│		└── package.json
│   └── frontend
└── What in that.md
```

### Port no. without directly hardcode -

in that create - `backend/.env`

.env
```env
PORT=8080
```

1-2] Install dependency for using .env --> `dotenv`
```sh
npm i dotenv
```

1-3] Configure `dotenv` in that - `backend/src/index.js`

`index.js`
```js
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(process.env.PORT, () =>{
	console.log("Server is running on port 8080");
})
```

1-4] Run 

```sh
npm run dev
```

File/Folder Structure -
```
Practice - Building a LeetCode Clone - Part 1/
│── leetlab/            
│   │── backend/
│		│		│── node_modules
│		│		│── src/
│		│		│		└── index.js
│		│		│── .env
│		│		│── package-lock.json
│		│		└── package.json
│		│── frontend
│		└──.gitignore
└── What in that.md
```


<!-- Basic Setup run successfully END -->


------

<br>

-------

# Chapter-1

### Make route realted `Authentication` (that not judge 0)

- Before Authentication we need some space for store the data, JWT tokens, Cookies...
- We required `Prisma`

1] Install `Prisma` 
```sh
npm i prisma
```

2] Install Prisma related thing i.e. `Prisma Client`
```sh
npm i @prisma/client
```

3] Initialize `Prisma App`
- Prisma related configuration they are done through it.
```sh
npx prisma init
```

File/Folder Structure -
```
Practice - Building a LeetCode Clone - Part 1/
│── leetlab/            
│   │── backend/
│		│		│── node_modules
│		│		│── prisma/
│		│		│		└── schema.prisma
│		│		│── src/
│		│		│		└── index.js
│		│		│── .env
│		│		│── package-lock.json
│		│		└── package.json
│		│── frontend
│		└──.gitignore
└── What in that.md
```

> [!NOTE]
> - Enviroment variable already added in `.env` file 
> - remove comments from that file.


- In that actual prisma related connection link is visible 
```env
PORT=8080

DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

4] Install `Docker`


5] 2 ways RUN postgres - 
1) Docker -> Images --> search postgres -> run
2) Programmer way RUN command in terminal --> 

locally install docker 
```sh
docker run --name leetlab -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres
```

- In `.env` add below 
```env
PORT=8080

DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/postgres"
```

> [!NOTE]
> - `-d` : docker mode run in detach mode.
> - What is application run attach mode & detach mode?
>	- run in 2 mode 
> - attach mode : terminal when run that are in attach mode
>	- detach mode : free the terminal & run in background


#### Initialize `Prisma client`

1] Make `libs` folder under --> `backend/src/`
- Make `prisma client` in that.

2] Make `db.js` under --> `backend/src/libs/`

> [!NOTE]
> - We start work in `NextJS` in that come with `prisma client`.
> - prisma client not easily avialable in db

3] Go to `schema.prisma` under --> `backend/prisma/`
- Make basic model with name, email, id(should generated automatically)

- `ASSIGNMENT` -> Enhance user can upload there image also (suggest cloudenary)

- add to in `schema.prisma`
```
enum UserRole {
  ADMIN
  USER
}

model User {
  id String @id @default(uuid())
  name String?
  email String @unique
  image String?
  role UserRole @default(USER)
  password String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

```

4] RUN cmd - 
- Through that ready of `generated` prisma file
- 
```sh
npx prisma generate
```

5] add in `db.js` under --> `backend/src/libs/`
```js
import {PrismaClient} from "../generated/prisma/index.js";

// prisma best practices 

const globalForPrisma = globalThis;

export const db = globalForPrisma.prisma || new PrismaClient();

//  For optimize appln more & more
if(process.env.NODE_ENV !== "production") globalForPrisma.prisma = db
```
- In under db, all related prisma method & other access in that.
- We can use prima after that.


> [!NOTE]
> - Under `NodeJS` do not have access of window.
> - Have `GlobalThis` access only


6] Run cmd for `migrate the db` -
- migrate the new in db
```sh
npx prisma migrate dev
```

7] Commit message - 
`? Enter a name for the new migration: » usermodel added`
- new folder added --> `backend/prisma/migrations/`
- sql related code show under --> `prsima/migrations/...migration.sql`


8] RUN cmd -
- All changes are sync with db.
```sh
npx prisma db push
```

9] RUN cmd -
- Check program running
```sh
npm run dev
```

<br>


### Authentication related work

1] Update in that `index.js` --> `backend/src/index.js`
```js
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(express.json()); // accept json related body

// make 1st End point
app.get("/", (req, res)=>{
	res.send("Hello Guys welcome to leetlab🚩")
}) // home route


// Make 1st route of --> Authentication
app.use("/api/v1/auth", authRoutes);

app.listen(process.env.PORT, () =>{
	console.log("Server is running on port 8080");
})
```

2] Make folder `routes` in --> `src/routes/`
- All routes are in that folder.
- Make `auth.routes.js` route in that --> `src/routes/auth.routes.js`

3] Boiler plate code for set auth
- add in `auth.routes.js`
```js
import express from "express";


const authRoutes = express.Router();


export default authRoutes;
```

- update in `index.js`
```js
import authRoutes from "./routes/auth.routes.js";
```
> [!NOTE]
> - Whole thing required for RUN ...`.js`
> Precaution to RUN cmd (...leetlab/backend/) -
> - Check code running
	```sh
	npm run dev
	```


<br>


### Routes (Register, login, logout, check) 
- User can able to register in our platform
- Then login/logout
- Currenlty login

#### Add end-points that used in backend 
- Update in `auth.routes.js`
```js
import express from "express";

authRoutes.post("/register")

authRoutes.post("/login")

authRoutes.post("/logout")

authRoutes.get("/check")

export default authRoutes;
```

- Make folder`auth.controllers.js` in that --> `src/controllers/auth.controllers.js`


1] Install `bcryptjs`
- for hashing password & storie in db.
```sh
npm i bcryptjs
```

2] Add in `auth.controller.js`
```js
import bcrypt from "bcryptjs";

export const register = async (req, res) => {} // talking with db using async

export const login = async (req, res) => {}

export const logout = async (req, res) => {}

export const check = async (req, res) => {}
```

> [!NOTE]
> - `async` used for talk with db

> [!IMPORTANT]
> - ERROR RESOLVED - for running terminal (ERROR - TypeError: argument handler is required)
> - Update some boiler code 
> - Update in `auth.routes.js`
```js
import express from "express";
import { register, login, logout, check } from "../controllers/auth.controller.js";

const authRoutes = express.Router();

// end-points
authRoutes.post("/register", register)

authRoutes.post("/login", login)

authRoutes.post("/logout", logout)

authRoutes.get("/check", check)

export default authRoutes;
```
> - In terminal running 
	```sh
	npm run dev
	```
> Check in terminal after running `Server is running on port 8080`

<br>

#### Make `register` controller (all work related to register)
- We required 3 things from users: 
	- We need a email, password, user name
- Before register, we always check `user exist or not?`
- After it `hash the user password`
- Then `we create new user`


1] Install JWT & Cookie Parser
- RUN cmd
```sh
npm i jsonwebtoken cookie-parser
```

2] Go to `backend/env`
- Add secret thing for JWT
- sign in JWT token related of below code -
```js
const newUser = await db.user.create({
			data:{
				email,
				password: hashedPassword,
				name,
				role:UserRole.USER
			}
		}) 
```

3] Update in `auth.controller.js`
```js
import bcrypt from "bcryptjs";
import {db} from "../libs/db.js";
import {UserRole} from "../generated/prisma/index.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
	const {email , password , name} = req.body;

	try {
		const existingUser = await db.user.findUnique({
			where:{
				email
			}
		})

		if(existingUser){
			return res.status(400).json({
				error:"User already exists"
			})
		}

		const hashedPassword = await bcrypt.hash(password , 10);
		// Next step onboard user into db 

		const newUser = await db.user.create({
			data:{
				email,
				password: hashedPassword,
				name,
				role:UserRole.USER
			}
		}) 

		const token = jwt.sign({id:newUser.id}, process.env.jWT_SECRET , {
			expiresIn: "7d"
		})

		// for mongodb using we using --> id:newUser._id 

	} catch (error) {
		
	}
} // talking with db using async

export const login = async (req, res) => {}

export const logout = async (req, res) => {}

export const check = async (req, res) => {}

```

4] Go to terminal `gitbash` & RUN cmd -
```sh
openssl rand -hex 32
```
- That created random string e.g.
``` 
ba44048ae2d97ab69efc87806d7a8467cf21eecc00a993c8a4868ff33e051e0e
```

5] Update that with `.env`
- JWT token Sign in is done
```env
PORT=8080

DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/postgres"

JWT_SECRET = ba44048ae2d97ab69efc87806d7a8467cf21eecc00a993c8a4868ff33e051e0e
```

<br>


#### Configure `Cookie Parser` related things
- Configuration `Cookie Parser` for user information as a cookie storing in that.

1] Go to `index.js` & update in
```js
||
import cookieParser from "cookie-parser";
||
// as a miidlelware
app.use(cookieParser());
||
```




















> [!IMPORTANT]
> - `ERROR` : `ERROR RESOLVED in line "522"`
> - Whenever not write in index.js ==> TypeError: argument handler is required
