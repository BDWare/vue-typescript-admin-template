#!/bin/bash

perl -i -p0e 's/{placeholder:{}}/`cat runtime-config.json`/se' dist/js/config.*.js
