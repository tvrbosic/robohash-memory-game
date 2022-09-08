# RoboHash Memory Game
Memory game which generates cards using [RoboHash Web Service](https://robohash.org/).

Application was created with [React](https://reactjs.org/), backend is simulated with [Json Server](https://github.com/typicode/json-server)

## Usage
1. Clone repository: `git clone git@github.com:tvrbosic/robohash-memory-game.git`
2. Install npm packages: `cd robohash-memory-game && npm install`
3. Run json-server: `npx json-server --watch db.json --port 3001 --delay 300`
4. Run app: `npm start`

## npm packages used
- [Redux Toolkit ](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/en/main)
- [Json Server](https://github.com/typicode/json-server)
- [UUID](https://www.npmjs.com/package/uuid)
- [React Spinners](https://www.npmjs.com/package/react-spinners)

## Screenshot
![Memory Game Board Screenshot](/public/robohash-memory-game.png?raw=true "Memory Game Board Screenshot")

## Demonstrated skills
- Reusable components with css modules
- Custom hooks (input, http requests)
- Data fetching and posting (fetch, async/await promises, error handling)
- React hooks: useState, useEffect, useRef, useReducer
- Input validation
- CSS effects
- Responsive layout
- Redux Toolkit
- React Router
- React Portal