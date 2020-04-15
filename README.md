bgio-server-heroku-deploy

Clone this repo, run `npm install` . Use `npm run start` to run the start script which fires `node -r esm server.js`. Or use `heroku local web` once you have heroku installed.

You can also deploy to heroku, no changes needed, just make sure your Boardgame.io client application and this server application use the same Game object.

So for this simple server, here is what a simple client app might look like (using boardgame.io 0.39.7):

```js
import React from 'react'
import { Client, Lobby } from 'boardgame.io/react';
import { SocketIO } from "boardgame.io/multiplayer";

const MyGame = {
  name: 'MyGame',
  setup: (ctx, setupData) => { },
  moves: {
    myMove: (G, ctx) => { },
  }
}

const Board = (props) => {
  return <h1>{`Player-${props.playerID} client`}</h1>
}

const MyGameClient = Client({
  game: MyGame,
  board: Board,
  multiplayer: SocketIO({ server: 'https://your-heroku-app.herokuapp.com/' }),
  numPlayers: 2,
});

export const App = () => {
  return (
    <>
    <Lobby
      gameServer={`https://your-heroku-app.herokuapp.com/`}
      lobbyServer={`https://your-heroku-app.herokuapp.com/`}
      gameComponents={[{ game: MyGame, board: Board }]}
    />
  <MyGameClient gameID="gameid" playerID='0' />
  <MyGameClient gameID="gameid" playerID='1' />
  </>
  )
}
```