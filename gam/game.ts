import CS5 from 'cs5';
const game = cs5.NewWindow<Promise>({
     width: 400,
     height: 400,
     run: [
    "cs5 window:test",
    "cs5 save --tested"
     ],
     cs5_devlog: daemonError<Promise>(function(error){
       new Error (error)
   }) 
})
game.onLoad = (function(game){
   game.ChangeTextWindow("Loading...")
   game.Welcome("CS5script x Heli Team presents the Games")
   game.Wait (18, (function(games, game){
   games.ChangeTextWindow("Host detected in clients")
   games.Info(match (game.host, "You") + " are host, the ping is " +game.ping (game.hostip)+ "ms, This server was created at " + game.sdate + "\n**Note**__\nThis server was using " + game.modes + " to protect this server")
})
})
