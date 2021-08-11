#!/bin/bash

git push heroku-api `git subtree split --prefix server master`:master --force

