
# module-boilerplate

This is a boilerplate to create new microfrontend using [single-spa](https://single-spa.js.org).


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VUE_APP_API_URL`



## Run Locally

Clone the project

```bash
  git clone https://git.edenfarm.id/project-version3/erp-dashboard/module-boilerplate.git
```

Go to the project directory

```bash
  cd module-boilerplate
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```


## Override Local to Dev server

Note that you may use whichever port you would like to. Go to https://localhost:8505/js/app.js and verify that you are able to load the file without any SSL problems. To solve SSL problems, see [these instructions](https://improveandrepeat.com/2016/09/allowing-self-signed-certificates-on-localhost-with-chrome-and-firefox/).

Now, go to https://v3-dashboard.edenfarm.tech/. In the browser console, run the following:

```js
localStorage.setItem('devtools', true);
```

Refresh the page. Click on the tan / beige rectangle:

![image](https://user-images.githubusercontent.com/5524384/75211359-e46b9280-5740-11ea-80bb-974846df414b.png)

Set an [import map override](https://github.com/joeldenning/import-map-overrides/) to `https://localhost:8505/js/app.js`.

![image](https://user-images.githubusercontent.com/5524384/75211553-7e333f80-5741-11ea-97d6-d3d86ffd1826.png)

Refresh the page. Your local code for this module will now be running on https://v3-dashboard.edenfarm.tech/. You may make changes locally and refresh the page to see them.

### All Modules Together

Run the root-config project locally:

```
cd root-config
yarn install
yarn start
```

Now follow the steps above for "Override Local to Dev server" for each of the modules you wish to work on.
