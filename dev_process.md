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


**Decision** : I can safely remove the current packages and follow the [official Apollo documentation](https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/).
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


**test n°6** : check if the app still runs as usual :
- client : OK
- server : OK ( untouched)

#### Server :

Doc : [here](https://medium.com/@th.guibert/basic-apollo-express-graphql-api-with-typescript-2ee021dea2c)

**test n°6** : check if the app still runs as usual :
- client : OK ( untouched)
- server : OK

## Implement test tools

Now the stack need to welcome the tests toolboxes, so we can code while testing in the meantime.

Doc :
- https://frontend-digest.com/setting-up-testing-library-with-nextjs-a9702cbde32d
- https://dev.to/maciekgrzybek/setup-next-js-with-typescript-jest-and-react-testing-library-28g5
- https://imranhsayed.medium.com/using-cypress-with-next-js-for-end-to-end-testing-cypress-nextjs-example-af100609cf16

1) implement JEST + testing library on client
**test n°6** : add a working test OK

2) implement JEST on server side
**test n°7** :  add a working test OK

3) implement cypress on the client 
**test n°8** :  add a working test OK


## Dockerize the app

For this step, I will provide two images for both servers, a docker-compose file, instructions and a script to run / configure the project. 

The original idea was to get a base image ready for production, but I will start with a simple / working image, since the instructions from the official doc lead to an error on my machine.

Docs :

Client :
- https://nextjs.org/docs/deployment TRIED
- https://github.com/vercel/next.js/issues/121#issuecomment-624855104 OK


Server:
- https://itnext.io/lets-dockerize-a-nodejs-express-api-22700b4105e4
- https://stackoverflow.com/questions/64245723/how-to-use-host-network-config-using-docker-compose ( for network_mode )

The goal here was to achieve the requirement of having a docker compose being able to boot the app.
Disclaimer : The network_mode feature seems to be Linux only. I would adapt the file if other machines were to be targeted to run the app.

**test n°9**: can I run a docker image of the client and access to its content on localhost:3000 OK
**test n°10** can I run a docker image of the server and access to its content on localhost:5000 OK
**test n°11** can I run the app through the docker compose file and :
- have access to interface : OK
- have access to server : OK
- client can fetch data from server: OK

Observation :
- other than prod optimization, I could also set some volumes in order to work with the container while changing files from the host.
- this quick setup allows me to fullfill the docker requirement so I can focus on other requirements.
=> Requirements first, bonus after.

## Heroku

urls for project : 
- https://test-client-2021.herokuapp.com/ 
- https://test-api-2021.herokuapp.com/

Doc: 
- https://adampaxton.com/how-to-deploy-to-multiple-heroku-apps-from-the-same-git-repository/

### Card feature

Since the features i need to develop will not infer with the complexity of the deployment / dockerization process, I can start adding the Card feature in order to make some progress.

To achieve the full feature, we need to fetch data, and also handle pagination ( infinite scroll, load more).

I will **first implement data fetching** ( Part 1), **then adapt the code** to handle the previously described cases ( Part 2)

#### Part 1
Steps :

server :
1) create a function which returns an array of 2000 items 
2) create a resolver
3) create a typeDefs
4) get the resolver to return the list from 1)

Interface
1) Create a new page
2) Create a link to access the page
3) create a query to get the list
4) display the list 
    
Comments :
While doing part 1, I've checked the npm package suggested ( casual ), and the one which was already installed ( faker).

Since the faker doc & types can do the job, I'll stick with the faker package for now.
If those packages were to be part of the product for a real feature, it would be a good point to compare the size/features of the 2 packages, in order to make a choice based on optimization.

**Why use getStaticProps ?**
Since it is not specified if the list should be public or private data, I chose the most efficient method to get data.
getStaticProps will compile data at build time, allow content to be served much faster.

#### Part 2 : 
