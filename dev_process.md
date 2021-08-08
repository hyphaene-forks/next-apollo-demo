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

- Removing .next from git history by running the following command from the client folder
```
git rm -r --cached .next
```

## Upgrade 
### Client 

#### Next && React

From [this doc](https://nextjs.org/docs/upgrading)

```
npm install react@latest react-dom@latest
```

**Test n°2** : does the project still runs ?
=> OK

#### GrapqhQL

Context : 
1) the apollo version is **very outdated**, and since Next when from **4. to 11. major version**, we can expect the local structure not being adapted/compliant/compatible to the new packages APIs.
2) the original repo has **graphql declared as deps in the client folder**, and only uses a Query as GraqhQL feature.
So the query will be a good test to see if the upgrade is OK.


Decision : I can safely remove the current packages and follow the [official Apollo documentation](https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/).
I will temporarily mock the Name component ( which uses the query ), then make it work with the updated packages.

```
npm remove next-apollo apollo-client apollo-link-http graphql react-apollo
``` 

Observation: 
- After the packages being removed, I noticed the files where imports were declared as using those libs were not in error.
Conclusion: 
- it would be nice to add a linter, and a formatter, as best practices.

**Test n°3** : does the home page shows a generated firstName ? OK


### Server 

#### graphql

Context:
The server uses an old version of apollo-server-express.
It also exposes only one resolver, supporting one query.

Decision : 
Since I have only one query endpoint to expose, I will use official documentation to implement the graphql server.  

**test n°4** : Does the server expose the same API than before ? OK

## what next 

### TS

Now, there are features to implement, TypeScript is an optionnal tool to add.
since I'm a TS user, my next move is to add it to both client and server.

I will focus on TS for multiple reasons : 
- to avoid later refactoring on code i'll write from now, 
- to get rid of module.exports + require use on the server,

In general, for those kind of tools : The sooner the better.

#### Client :

Doc : [here](https://nextjs.org/docs/basic-features/typescript)

#### Server :