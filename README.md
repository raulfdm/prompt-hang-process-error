# prompts exit problem

Til the `prompts@2.4.2`, it isn't possible to "stop" the terminal without all pending questions finished.

This problem was described in [this issue](https://github.com/terkelg/prompts/issues/87) created in 2018.

## Problem

Once you have a running `prompt`, by forcing exit with `CTRL + C` or `CMD + C`, instead of interrupting the program, the lib ignores the signal and continues.

## Steps to reproduce

Once you fork this repository (or run it on Stackblitz):

1. npm install
2. run on the terminal `npm run cancel:off`
3. tries to stop it using `CTRL + C` or `CMD + C`

You'll see that once you hit the "exit" button, the code will continue to the next question.

## Workaround

`prompt` give us the option to pass a callback that will be triggered if the user tries to exist or cancel called `onCancel`.

There, we can pass a function that invokes `process.exit(1)` and then forces stop the program to continue.

## Steps to repro

1. npm install
2. run on the terminal `npm run cancel:on`
3. tries to stop it using `CTRL + C` or `CMD + C`

If you stop on the first question, you'll see that the program will stop. If you stop in the second question, the program will also stop and prevent the rest of the code from keeping running.
