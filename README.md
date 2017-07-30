# View Current Users

Shows a list of ip addresses currenlty viewing the site

## Setup

You must have node installed to run the development environment and to build for distribution.  
Tested version: v8.2.1

- clone repo to local machine
- navigate to folder and run `yarn`
- alternatively you can use `npm install`

## Start

- run `npm start` to build a prod version and serve it from `localhost:8080`

## Dev

You can run the dev version with `npm run dev`. However this version does not get socket updates from the server.

## Architecture

Front end is built with React, using Redux for state management, Sagas for side effects and SocketIO for websocket connection. The back end is a NodeJS app built on top of Koa and SocketIO.

## Todo

- webpack bundling from the server with hot reloading would be nice
- SSR with route matching and state persistance would be nice
- DB? sessions? caching? permission?
