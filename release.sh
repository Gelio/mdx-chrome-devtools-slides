#!/bin/bash

npm run build:all

cd dist
tar -czf ../mdx-chrome-devtools-slides.tar.gz *
