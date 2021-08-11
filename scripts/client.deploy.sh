#!/bin/bash

git push heroku-client `git subtree split --prefix client master`:master --force
