import React from 'react';
/*
* Every React app starts with importing React from react.
* this library contains mostly everything you need to to make react work.
* from creating class and using state.
* everything is found here and more
*/
import ReactDOM from 'react-dom';
/*
* ReactDom lets access the main html file normally placed in the public folder.
* and its that page that ultimate be rendered as a spa.
* and change's you make.
* any functions you create al will go through here up to the
* main page.
* normally
* like a tree with many branches all going down to the main trunk
*/
import './index.css';
import App from './App';
/*
* how react works is create Components that similair to class in java
* Which each contain a part of the html code including the to css file
and any function wich makes to Components work
 */
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    /*
    * The Components you the create you can call upon them placing there reference name in tags
    * like below and closing theme of.
    */
    <App />
    /*to access the main html page you have to acces the div element by id.
    * in this case 'root'
    */
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
