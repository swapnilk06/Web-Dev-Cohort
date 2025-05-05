#### Revision Timeline - [54 min]

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
Whats are in that API Routes?

#### Inside API Route we are handle -
- Authentication
- Problem Management(Proper & CRUD operation related to problem)
- Code Execution
- Submission
- Playlist

<br>

#### How our platform work?
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

<!-- Chapter-0 END -->


<br>




