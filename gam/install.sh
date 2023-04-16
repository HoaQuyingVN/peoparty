cs5 ../ts-config.ts --install=game.ts --cs5=game.cs5
# ^----- CS5 Installer -----^
echo "Installed games, please wait a few minutes to move files games..."
cp $HOME/gam >> $HOME/client/games
sleep 3s
echo "Moved files games to client, Starting development to setup(Note: hostname will use if you create CNAME file)"
cs5 run:start development
cs5 ts-config:ext true
cs5 manager::web
cs5 devlog
echo "Setup complete, go to client and use $IP to connect with your server"
