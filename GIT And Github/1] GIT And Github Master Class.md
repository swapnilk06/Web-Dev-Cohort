
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
    
- Q. How to told GIT for track on (untracked)file?
- `git add<file name>` : `git add hello.txt` & on it show `U` to `A`.
- In reality, more files are present in the file.
  - `git add .` : After `git add` all overs files & folders are start for tracking.
- `cat hello.txt` : showa all content of file.
- in `.git/index` file include what are tracking or not?
- 
  
<br>

> NOTE* - <br>
> - `git init` -> Start for folder tracking.
> - `git add<filename>` -> track individual file.
> - `git add .` -> tracking all files in particular folder.
> - 

45 min





