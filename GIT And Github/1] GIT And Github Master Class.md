
#### `Bonus Class` : `5-1-25`

# GIT And Github Master Class -

### What we can learn?
- Q. What's GIT and Github?
- Q. How does version controling work?
- Q. How to handle big size of code or codebases? & how to push it on git?
- Q. How to big teams are colabration?
<br>

> NOTE* - All above Question are very sensual thing are required from you start beginning.
<br>

### Steps before learning anything we can understand problem statments -

E.g. Perspective through Coder -
#### As coder Problem 
- After at mid level project adding new code & adding new features. Project structure or line of code complexity increases.
- Increase folders, files, 500-600 loc & grow it.
- As the `complexity of the project` or `loc increases` its difficult to manage it.

#### What problem we can forcast or detecting?
- Our code is too big & segregate or separated it on multiple files.
- & What problem problem we can finds?
  - Tracking,
  - Code backup.
-  Below `Google Doc` history example is a same for code write by coder.

E.g. - Google Docs maintain linear history. What's benefit of maintain history?
       - Tracking (Whats changes past time)
       - Direct go that time & come current time.
       - It's very important thing for we can work on big size document.
<br>

##### 1st Problem : Understanding the problem Tracking
- History can easy to tracking of whats time to we can change code, for reword code, What past lines make bugs?
- Solution :

##### 2nd Problem : Backup
- Collaboration is one of them problem (Multiple peoples can't work on single PC).

 <br>

##### Solution : History Management
- Problem is - we can write code on "local machine" how to make history of it?
- For solving this type of problem we required one `System.`
- System that maintain history of local code.
- We can solve this type of problem through `VCS.`
- VCS(`Version Control System`) that system can  basically do versioning of your code or files.
- Versioning is nothing but a "maintaining history".
- VCS E.g. GIT, Subversion, Mercurial, Perforce... etc.


> NOTE* - <br>
> - GIT build by <b>Linus Torvalds,</b> is also build <b>Linux</b>.
> - Features - Its supoort Branching but Mercurial not supported branching.
>            - Linux have active contributors.
> - This reasons <b>GIT</b> in market.
> - Then <b>GIT</b> most popular one in the market.

<br>

```
Q. What is Network Simulation?
Q. How to makes your own VCS like GIT system?
Q. Project - Own ZOOM system
```

### GIT internal working -

- Q. How to use GIT?
  - On Terminal : step to open folder in VS Code
    - `mkdir hello-git`
    - `cd hello-git`
    - `code .`
  - Our project name or folder name is <b>"hello-git"</b>
  - Project(under files) currently not tracking?
    - All project in our <b>machine not tracking or version control</b> all by default.
 - `git init` :
   - its told to git for start <b>tracking or version controling</b> this project folder.
   - `git init` its <b>initialize git</b> in whole project.
 - After `git init` they gives msg `Initialized empty Git repository in C:/Users/s/Desktop/Web Dev Cohort/hello-git/.git/` & its start to track our project.
- `pwd` : Present working directory.

- Q. How GIT work of tracking?
  - GIT can make hidden folder is `.git`
  - `ls` not showing hidden folder, but `ls -a`(in mac) shows hidden folders.
  - `.git` is only file system.
  - `.git` : its stores all changes of our projects.
  - `U` : means `Untracked` bcz, "GIT by default can't track any file."
  - `A` : means `Index Added` individual file into a tracking.
    
- Q. How to told GIT for track on (untracked)files?
  - `git add<file name>` : `git add hello.txt` & on it show `U` to `A`.
  - In reality, more files are present in the file.
    - `git add .` : After `git add` all overs files & folders are start for tracking.
  - `cat hello.txt` : showa all content of file.
  - `.git/index` : in this file include what are tracking or not?
  - `.git status` : internally read git folder & visualize it on text format on screen.

> NOTE* -
> - `git init`, `git add .`, `git add file`, `git status` all can READ/WRITE of .git file.
> - All tracking are under our `.git` in local machine.

<br>

- Q. How to Commit files?
  - Before commit all files are in `staging area`.
  - All feature ready files goes to `Commit`. (E.g. Fully feature add like payment gatway integration)
  - `git commit -m "<msg>"` : `git commit -m "add v0 feature to hello"` after it create checkpoint automatic.
  - Commit is basically like `checkpoint(snapshot)`.
  - Every commit have separate `ID` or `HASH`.
  - `git log` : Display history info as `HASH` or `ID`, `Autor - Swapnil Kathale <swapnilkathale111@gmail.com>`, publish `Date - Wed Jan 8 05:37:51 2025`.
  - `M` : means `Modify` Changes under file.
  - `git diff` : Modification or showing difference between past commit & current commit.
    - git diff showing changes - <br>
      ```
      Hello World I am V0
      \ No newline at end of file
      +Hello World I am V1
      \ No newline at end of file
      ```

#### For understanding -
- Q. How to GIT tracking work? How to known git whats before & whats on current in `.git dir`?
  - `cd .git` : go to directory folder that 1 of them is "objects" folder.
  - `ls` : show all folders insides of .git.
  - `52f39be1255355b46d9303f6d0c90d49796ac371` : git commit id.
    - `cd .git/objects/` : then they show multiple folders `4b`,`52`, `5f`, `7c`, `ce`, `info`, `pack`.
    - `cd 52` : `52` is same number of commit id & insode it `f39be1255355b46d9303f6d0c90d49796ac371` is same folder
    - `cat f39be1255355b46d9303f6d0c90d49796ac371` : file is compress then not known what is that?
    - `git cat-file -p 52f39be1255355b46d9303f6d0c90d49796ac371` : its shows all content display on terminal. i.e. tree, parent, author, committer
    - `git cat-file -t 52f39be1255355b46d9303f6d0c90d49796ac371` : its shows a type i.e. commit.
    - - `git cat-file -s 52f39be1255355b46d9303f6d0c90d49796ac371` : its shows size i.e. 245.

- Every commit have reference of old or past commit. 
- (HEAD -> main) they are similar of `Linked List`.

<br>

#### GIT commands that used mostly -

- As "S/W Engineer 98%" we can use below 3 commands only.
  - 1] `git init`
  - 2] `git add .` : stage the file.
  - 3] `git commit -m "MESSAGE"`
- We can use below commands 0.5%.
  - 1) `.git status` : shows stagging file (in green color) & file without stagging (in red color) (after file add in stage color of modified file shows red to green).
  - 2) `git log` : we use as debugging purpose.

- `cat(Linux)` : File contents that print on terminal.
- `git file` : Shows compressed file only(cat-compresed version)
- `git cat-file (-t)(-s)(-p)` -> `-t` for type e.g. commit, `-s` for size & `-p` for print content on terminal.

<br> 

- Q. Why `git add .` every time?
  -  After changing file or updated content of file then git treat as different file.(git have no any track of that file).
  -  Fresh changes file thats objects have no any track of git.
  -  You can include this on commit that reasons we everytime used `git add .`.
  
- Q. How hash created?
  - Codes files read -> Hash using SHA1 algorithm -> i.e. your `Commit Hash`

<br>

- Q. What is hash?
  -  Hash is algorithm that of using on any  `text` or `any file` or anything we can convert into string that `do not possible to dehash` after hash.
  -  Text -> hash -> string

- Q. Why GIT make unique identifier of any commit? 
  - GIT work same as hash i.e. `GIT read all of our files & creates its hash` & that hash as a commit massage.
  - That benefit is - in our file don't make changes then don't create its hash.
  - Thats make Unique identifier of any commit.

<br>
 
> `Research on Spotify 'MAYA'` topic 
 
<br>   

- Q. How to reset or back on history through GIT?
  - `git reset 52f39be` : Its back in history of git but changes still as it's present(It shows as modify or in stagging area).
    - If we use `git reset 52f39be` possible to going to present or revert back because stagging area is present.
  - `git reset --hard 52f39be` : Its back in history with all as it's in starting phase(without present of any new content for stagging).
    - If we use `git reset --hard 52f39be` then you can't back on present or revert to current before going in history.
  

<br>

> NOTE* - In short GIT commands <br>
> - GIT is VCS & its manage all change under `.git` folder.
> - `git init` -> Start for folder tracking.
> - `git add<filename>` -> Track individual file.
> - `git add .` -> Tracking all files in particular folder.
> - `.git status` -> Whats happening in changes(shows tracked & untracked files).
> - `git commit -m "<msg>"` -> Make commit of all tracking files.
> - `git log` -> Shows our history.
> - `git diff` -> Showing modification
> - `git log --oneline` -> All commits in one line.
> - `git reset <ID>` -> Possible back to history & revert to present with all stagging & without stagging present. 
> - `git reset --hard <ID>` -> Hard reset not possible to revert in present, it start from begining to from 'ID' commit. 
   

<br>


#### Collabration through GIT using `GITHUB` -
- It's simple we can share folder only.
- Problem with centralize as pendrive sharing device -
  - It's not easy to share folder & code with <i>pendrive</i>.
  - In same file with same changes which one to give 1st.
    - E.g. Same file like hello.txt change from both side that conflict which one is source of truth.
- We can need `one source of truth` & `one central place` which can act as a source of truth + one device that connect with internet & also work with remotely.
- That problem we can use solution as `GITHUB`.
- GITHUB is saying we can `PUSH` as well as `PULL` form both sides &
- `GITHUB` act as a central system. Which can also store our commits, also gives cloud backup, gives collabtative & provide UI to show all of things.
- GITHUB using GIT commands :
  - 1] `git init`
  - 2] `git add .`
  - 3] `git commit -m "changed to V2"`
  - 4] Whatever push & pull on github how to say : `git remote add origin https://github.com/swapnilk06/Web-Dev-Cohort-Practice.git`
  - 5] `git remote -v`



