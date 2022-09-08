# RoboHash Memory Game
Memory game which generates cards using [RoboHash Web Service](https://robohash.org/).

Application was created with [React](https://reactjs.org/), backend is simulated with [Json Server](https://github.com/typicode/json-server)

## Usage
1. Clone repository: `git clone git@github.com:tvrbosic/robohash-memory-game.git`
2. Install npm packages: `cd robohash-memory-game && npm install`
3. Run json-server: `npx json-server --watch db.json --port 3001 --delay 300`
4. Run app: `npm start`

## Screenshots
![Memory Game Board Screenshot 1](/public/robohash-memory-game-1.png?raw=true "Memory Game Board Screenshot 1")
![Memory Game Board Screenshot 2](/public/robohash-memory-game-2.png?raw=true "Memory Game Board Screenshot 2")
![Memory Game Board Screenshot 3](/public/robohash-memory-game-3.png?raw=true "Memory Game Board Screenshot 3")

## npm packages used
- [Redux Toolkit ](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/en/main)
- [Json Server](https://github.com/typicode/json-server)
- [UUID](https://www.npmjs.com/package/uuid)
- [React Spinners](https://www.npmjs.com/package/react-spinners)

## Demonstrated skills
- Reusable components with CSS modules
- Custom hooks (input, http requests)
- Data fetching and posting (fetch, async/await promises, error handling)
- React hooks: useState, useEffect, useRef, useReducer, useCallback
- Input validation
- CSS effects
- Responsive layout
- Redux Toolkit
- React Router
- React Portal