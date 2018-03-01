# front-end-interview
Front-end interview for a company in the marketing industry
## Execution Instructions
```bash
npm install
npm run build-css
npm start
```
then go to [localhost:3000](http://localhost:3000)
## Solution Explanation
The interview test is built using the [React](https://reactjs.org/) library, it is lightweight compare to popular frameworks, the project was scaffolded with *create-react-app* due to its simplicity at creation time.

For styling [sass](https://sass-lang.com/) was used, mostly because of the nesting of properties which make writing [BEM](https://en.bem.info/) rules easier, I found the other features unnecesary because webpack divided the css by itself.

The charts were included using [chart.js](http://www.chartjs.org/)

For the HTTP request I use the *axios* package.

Since the application didn't have too much shared stated, I stayed away from redux, (It will add unnecesary complexity) most of the state was handled by the internal state of the react components.

Finally [lodash](https://lodash.com/) was used to transform the Json data obtained for the stock component.

### Why did I pick the implemented components
#### 1) Presentation Component
The component you'll see when you start the application is the Presentation Component, I choose this because I felt it was the best way of navigate through the other implementations.

This component showcase animations and responsive design.

#### 2) Stock Values
The component was picked to show some AJAX communication, even when the sources are static json files stored in the public directory of this project, the format of the file is comming from [Alpha Vantage](https://www.alphavantage.co/) which allow me to present the transformation of data so it fits the needs of the application being built.

#### 3) Storage Information
This component is kind of similar to the previous one, but I picked it because it allow me to play a little bit more with the configurations of *chart.js* there are some more data transformation from the fetched data that was worth showing.

#### 4) Navigation Bar
The only reason I picked this component was because it is a very common requeriment across projects, and because I was able to reuse it in most of the demo components, also, the way I implement this allow me to explore the cloning of React components.

#### 5) Contact Form
**Work in progress**

### I18N
The functionallity of language switch was included for the complete application.

The way it was build was around of HTTP requests for the labels of the language selected, it was built this way to avoid having multiple languages in memory if just one was going to be used.

The function in [languageManager.js](https://github.com/slemus29/front-end-interview/blob/master/app/src/i18n/languageManager.js) fetch the json for the required language and returns a promise with a function that given a key returns the right label, or a default not found message, this function is propagated from the root component to its children explicitly, when the toggle is clicked the new function is propagated in the same way.