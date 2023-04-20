# Epsisode 01 - Inception

## Theory

### 1. What is Emmet?
Emmet is a web-developers toolkit for boosting HTML and CSS code writing.
It can be added to our code editor which allows us to type shortcuts that are then expanded into small pieces of code.
It is used to create a HTML boilerplate code with '!' shortcut.

### 2. Difference between a library and framework?
Library is a set of functions and classes that can be used by the developer in any part of their code based on the neccessity.
Framework provides a structure in which all the operations and code has to happen.

The key difference between them is the "Inversion of control".
When we call a method from a library, we are in control. But in framework the control is inverted i.e. the framework calls us.

### 3. What is CDN? Why do we use it?
CDN (Content Delivery Network) is a group of geographically distributed servers that speed up the delivery of web content by bringing it closer to where users are.
We use CDN's since they provide low latency and high transfer speeds.

### 4. Why is React known as React?
React is know as React because it 'reacts' to changes made in the frontend by the user like clicking, submitting and typing.

### 5. what is cross origin in the script tag?
The cross origin in the script tag is used to indicate the browser that the script file needs to be loaded from different origin. 
For security reasons, by default the browsers allow only resources to be loaded from the same domain/origin, so to override this default setting we 
mention cross origin which allows browsers to make cross origin HTTP requests.

### 6. What is the difference between React and ReactDOM?
React is a Javascript library used to create beautiful user interfaces.

ReactDOM is a complimentary library to React which glues React to the Browser DOM

Whenever we use components, class, elements we use React and whenever we use methods like render() or findDOMNode() we're using ReactDOM.

### 7. what is difference between react.development.js and react.production.js files via cdn?
The react.development.js is the uncompressed and unminified version of react which is largely used for development purpose. It can be used to log errors to help developers in development process.

The react.production.js is the compressed and minified version of react which is optimized for production use. This version of library is smaller in size and loads our content faster than development version.

### 8. What are async and defer?
Async and Defer are different attributes that are used in script tags. 

Normally the browser parses the HTML line by line and when it encounters a script tag it stops the HTML parsing and starts loading the script code from required source. Once the necessary scripts are obtained it executes them line by line, after its execution it'll again start to parse the HTML.

When the ASYNC attribute is used with script tag, the HTML code parses line by line and when script tag is encountered it'll do the loading of script code asynchronously/ parallely while executing HTML. Once the script code is loaded fully it'll halt the parsing of HTML and execute the script code line by line, after its execution is completed browser will resume parsing HTML.

When the DEFER attribute is used with script tag, the HTML code parses line by line and when script tag is encountered it'll do the loading of script code asynchronously/ parallely while executing HTML. Even after the script code is loaded fully it'll still be parsing the HTML, only after HTML parsing is over browser starts executing the script code.
