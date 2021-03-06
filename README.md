# Eggs-Of-Fortune
:gem: Have you ever been to a Chinese casino? Not? Then find the ethereum chip in one of the golden Eggs of Fortune.

## Rules of the game
The player makes a deposit and chooses a bet.
Purpose of the game: guess the casket with the etherium. 
When the player finishes the game, he withdraws the money.

#### Win
- x2

## Dependencies:
- "dc-webapi": "0.2.8"
- "pixi.js": "4.8.2"

## Quick start

Clone the sample game repository and start the DC-CLI in it:

```javascript
git clone --depth=1 https://github.com/MonoVarTon/Eggs-Of-Fortune ./eggs_of_fortune
cd ./eggs_of_fortune

yarn install & yarn start
```

## Table of Contents
- [File structure](#-file-structure)
  - [dapp.manifest.js](#dappmanifest)
  - [dapp.logic.js](#dapplogic)
  
## 📁 File structure
|name|description|
|---|---|
|`dapp.manifest.js`|Configuration file for the **bankroll app**|
|`dapp.logic.js`|The file contains the main logic and is a common file for the **bankroll app** and the client|

### dapp.manifest.js
The application manifest contains basic information about the application and the path to the files.

### dapp.logic.js
The file contains the main logic of the application. The file is shared between the client and server parts.
