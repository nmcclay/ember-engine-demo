## Installation

Setup is a bit more cumbersome than it would be in reality if each engine had its own repo.

### Install Engine A
```
cd engine-a
npm install
bower install
npm link
```

### Install Engine B
```
cd ../engine-b
npm install
bower install
npm link
```

### Install Main App
```
cd ../main-app
npm link engine-a
npm link engine-b
npm install
bower install
```

## Running

`ember serve`