const Server = require('boardgame.io/server').Server;

const MyGame = {
  name: 'MyGame',
  setup: (ctx, setupData) => { },
  moves: {
    myMove: (G, ctx) => { },
  }
}

const server = Server({
  games: [MyGame],
});

const port = process.env.PORT || 8000

server.run(port, () => console.log("server running on %c", port));