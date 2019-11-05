![Gatekeeper](.github/logo.svg?sanitize=true "Gatekeeper logo")
# Gatekeeper API
Gatekeeper API is designed to run on Raspberry Pi, providing interface to control gates and simple user managment.
# Prerequisites
+ [Gatekeeper-CLI](https://github.com/alensnajder/gatekeeper-cli)
# Installation
Install dependencies
```
$ npm install
```
Run migrations
```
$ knex migrate:latest
```

Create a ```.env``` file and add required variables. For reference check [```.env.example```](https://github.com/alensnajder/gatekeeper-api/blob/master/.env.example).

For development environment use ```npm start```, for production environment use ```npm run serve```.

## Optional
+ Use process manager [PM2](https://github.com/Unitech/pm2)
+ Secure connection with SSL Certificate (e.g. [Let's Encrypt](https://letsencrypt.org/))
# License
```
Copyright (c) 2019 Alen Snajder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
