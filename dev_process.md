## First, let's install and run

First step is to download the projet, install the dependencies, and check on the files in order to get as much as infos on the context, in order to make the most appropriate decisions, about installation ( in case of errors ) for example, and further enhancements.

This project is composed of two folders, so as long as the projet is not dockerized, i'll have to manually start two servers to run the projet completely.
It also shows that it does not posess :
- any kind of context on what the projects is about.
- any information relative to how install or run the project.
- any kind of DB, meaning that as soon as both servers are up and running, the project should work as expected, but also that it is most likely to not posess any kind of data persistency.

We need to ensure the project is running before any meaningful modification, so we can work on a proper basis.

**Test n°1** : does the project run when installed and 'npm started' ?
- [the front](http://localhost:3000) :  OK
- [the back](http://localhost:5000) :  OK

While making this test and the installation, I've added some early documentation to fix partially the lack of initial doc.

## gitignore

When installing and running the frontend, I noticed files from client/.next were watched by git.
The project already contains a gitignore, but I have deleted the main gitignore in order to create a specific file in each folder.

