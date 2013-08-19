# Passport-NUSNET

[Passport](http://passportjs.org/) strategy for authenticating with [NUSNET](http://openid.nus.edu.sg/)
using OpenID 2.0.

This module lets you authenticate using NUSNET in your Node.js applications.
By plugging into Passport, NUSNET authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ cd node_modules
    $ git clone http://github.com/yjwong/passport-nusnet

## Usage

#### Configure Strategy

The NUSNET authentication strategy authenticates users using a NUSNET ID,
which is also an OpenID 2.0 identifier.  The strategy requires a `validate`
callback, which accepts this identifier and calls `done` providing a user.
Additionally, options can be supplied to specify a return URL and realm.

    passport.use(new NUSNETStrategy({
        returnURL: 'http://localhost:3000/auth/nusnet/return',
        realm: 'http://localhost:3000/'
      },
      function(identifier, done) {
        User.findByOpenID({ openId: identifier }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'nusnet'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/nusnet',
      passport.authenticate('nusnet'));

    app.get('/auth/nusnet/return', 
      passport.authenticate('nusnet', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [signon example](https://github.com/yjwong/passport-nusnet/tree/master/examples/signon).

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)
  - [Wong Yong Jie](http://github.com/yjwong)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
Copyright (c) 2013 Wong Yong Jie <[http://yjwong.name/](http://yjwong.name/)>
