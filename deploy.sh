#!/bin/bash

git fetch origin
git switch -c gh-pages origin/gh-pages
git merge main --no-edit

npx webpack

git add dist -f
git commit -m "Deployment commit"

git subtree push --prefix dist origin gh-pages

git checkout main