# react-express-postgress-heroku

Demo >>  https://react-express-postgress.herokuapp.com/

*********

# Clone & Install

```
git clone https://github.com/yabeshan/react-express-postgress-heroku
cd react-express-postgress-heroku
# install server
npm install
# install client
cd client
npm install
cd ../
```

# Start only client for development SPA without API
```
npm run client
```
откройте SPA браузер по адресу http://localhost:3000/


# Start only server for development backend with API
```
# build client
npm run client:build
npm run server
```
откройте API браузер по адресу http://localhost:3100/


# Start both servers for development at the same time
```
npm run dev
```
откройте SPA в браузер по адресу http://localhost:3000/
откройте API браузер по адресу http://localhost:3100/
