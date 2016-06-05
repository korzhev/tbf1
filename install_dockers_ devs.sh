#!/usr/bin/env bash
sudo docker pull redis
sudo docker run  --interactive --tty --rm --env CODE_PATH="$PWD" --volume "$PWD":/code --volume /var/run/docker.sock:/var/run/docker.sock --volume /tmp/cc:/tmp/cc codeclimate/codeclimate engines:install
sudo docker run -d --name telegram-redis -p 6379:6379 redis
nvm install
npm run redis
curl -L https://github.com/codeclimate/codeclimate/archive/master.tar.gz | tar xvz
cd codeclimate-* && sudo make install
cd ..
rm -rf codeclimate-*