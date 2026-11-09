import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     'h1',
//     {id : 'heading'},
//     'Hello world from reacte Root'
// );

// console.log(heading);


const Parent = React.createElement(
    'div',
    {id : "parent"},
    
    [
        React.createElement('div',
            {id : 'child'},

            [
                React.createElement(
                'h1',
                {id : 'paragraph'},
                "hello this is nested paragraph" 
                ),

                React.createElement(
                'h2',
                {id : 'paragraph1.1'},
                "hello this is nested paragraph1.1"
                ),
            ]
        ),
        React.createElement('div',
            {id : 'child2'},

            [
                React.createElement(
                'h1',
                {id : 'paragraph2'},
                "hello this is nested paragraph2"
                ),

                React.createElement(
                'h2',
                {id : 'paragraph2.1'},
                "hello this is nested paragraph2.1"
                ),
            ]
        ),
    ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Parent);


const user = ["Amir", 25, "Developer"];

const [name, age, profession] = user;

console.log(`${name} is a ${age}-year-old ${profession}.`);