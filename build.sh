#!/bin/bash

cd original && npm run build

cd ..

cd with-babel-plugin && npm run build

