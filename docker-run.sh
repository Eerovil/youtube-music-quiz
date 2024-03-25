#!/bin/sh

# Get env param
ENV=$1

# default env is dev
if [ -z "$ENV" ]; then
  ENV=dev
fi

docker build -t youtube-music-quiz:$ENV .

# Run the container
echo "Running container with branch: $ENV"

# Use hostname alias youtube-music-quiz-$ENV.
docker run -it youtube-music-quiz:$ENV --name youtube-music-quiz-$ENV --network tunnel
