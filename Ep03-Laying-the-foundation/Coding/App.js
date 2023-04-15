import React from 'react';
import ReactDOM from 'react-dom/client';

// const parent = React.createElement('h1', {id: 'parent'}, "Welcome to new React 🧙🏾‍♂️");

// React Element
// JSX => Babel transpiles it to React.createElement => React Element - JS object => HTML element(Render)
const jsxHeading = <h1 id="heading">Welcome to new React 🧙🏾‍♂️</h1>;
const jsxHeading1 = (       // writing in multiple lines made possible with '()' brackets
    <h1 id="heading">
        Welcome to new React 🧙🏾‍♂️
    </h1>
);

// React Functional Component
// method 1
const HeadingComponent = () => {
    return <h1>Namaste React</h1>;
};

//method 2
const HeadingComponent2 = () => <h1 className='heading'>Namaste React 🚀</h1>;


// Component Composition - adding a functional component into another functional component
const Title = () => (
    <h1>
        This is a JSX functional component Title
    </h1>
)

const Heading = () => {      
    return(     // different ways of using a functional component in another shown below
        <>     
            {Title()} 
            <>
                <Title />
            
            </>   
            <React.Fragment>
                <Title></Title>
                <h1>This is a Heading tag inside component</h1>
            </React.Fragment>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading />);