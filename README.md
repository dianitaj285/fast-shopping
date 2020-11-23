## Fast Shopping App

### Installation

* Run `yarn install` on both `client` and `server` folders.
* Create database using postgres and name it `fastShopping`. Try to use the credentials defined on `src/database/config/config.json`or modify accordingly.    
* Run `yarn migrate` and `yarn seed` to create the databse schema and putting some test data in it.
* You can also rollback the migration with `yarn rollback` or `yarn rollback-all` in case of issues.
* Now you can start the server with `yarn start` and then the client `yarn start`
