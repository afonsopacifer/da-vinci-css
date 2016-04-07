# Contributing

1. Fork it!

2. Create your feature branch:
```sh
$ git checkout -b my-new-feature
```

3. Install all dependencies:
```sh
$ npm install
```

4. Create the references to the regression test:
```sh
$ cd node_modules/backstopjs
$ npm run reference
$ cd ../..
```
5. Create your feature:
<br><br>
![magic](img/magic.gif)

6. Run lint process:
```
$ grunt lint
```
7. Run the regression test:
```sh
$ cd node_modules/backstopjs
$ npm run test
$ cd ../..
```
8. Write your visual regression test **(Not mandatory)**

9. Commit your changes:
```
$ git commit -m 'Add some feature'
```

10. Push to the branch:
```
$ git push origin my-new-feature
```

11. Submit a pull request

**PS:** *After your pull request is merged, you can safely delete your branch.*

### [<-- Back](https://github.com/afonsopacifer/da-vinci-css/)
