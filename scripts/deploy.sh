#!/bin/bash
set -e

SERVER="colmedikal@colmedikal.com"
REMOTE_DIR="~/colmed.colmedikal.com"

echo "→ Building..."
npm run build

echo "→ Packing dist/..."
tar -czf colmed-dist.tar.gz -C dist .

echo "→ Uploading..."
scp colmed-dist.tar.gz $SERVER:$REMOTE_DIR/

echo "→ Deploying on server..."
ssh $SERVER "cd $REMOTE_DIR && rm -rf dist && mkdir dist && tar -xzf colmed-dist.tar.gz -C dist && rm colmed-dist.tar.gz && touch tmp/restart.txt"

rm colmed-dist.tar.gz
echo "✓ Deploy complete → https://colmed.colmedikal.com"
