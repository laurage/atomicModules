Combining the power of atomic css with class-modules

# Table of Contents

- [Start the app](#start-the-app)
- [Structure of the source folder](#structure-of-the-source-folder)
- [Why are there 3 types of buttons in the repo?](#why-are-there-3-types-of-buttons-in-the-repo)
- [Disregard Markup](#disregard-markup)
- [What's going on here?](#whats-going-on-here)
- [AtomicModules syntax](#atomicmodules-syntax)
- [Discussing CSS Modules](#discussing-css-modules)


# Start the app

In the terminal,
`git clone https://github.com/laurage/atomicModules.git`
`cd atomicModules`
`npm install`

and: 

`npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

# Structure of the source folder

```
src/
  assets/
    modules-js-marked-extended.js
    modules-js-marked.js
    modules-js.js
  components/
    ButtonJS/
      index.jsx
      style.css
    ButtonJSMarked/
      index.jsx
      style.css
    ButtonAtomicModules/
      index.jsx
      style.css
    ButtonTraditionalCSS/
      index.jsx
      style.css
  App.css
  App.js
```

# Why are there 3 types of buttons in the repo?

In the repo, 3 types of Buttons have been created, to show the logical progression from traditional CSS to Atomic Modules.

`ButtonTraditionalCSS` is a button which styling is entirely governed by HTML and CSS, no javascript interfacing between the two. It mixes a module (for the .button class) and atomic css (for the .bg-pink and .c-red classes). The button class module is created in a traditional way, by putting all of the css properties needed to create the button in the .button css class. 

In the inspector, this is what we can see:
`class="button bg-pink c-red"`


`ButtonJS` is a button that uses JS to create its module, which means that the module can be created with atomic css components. The rest of the element is built with direct atomic css (for the bg-pink and c-red classes)

In the inspector, this is what we can see:
`class="b-3 br-4 pa-2 bg-pink c-red"`

`ButtonAtomicModules` is a button that uses JS to create its module, which means that the module can be created with atomic css components. In addition, the empty classes `_button` and `_utilities`, added for markup, tell the developer what each module (here, the button module) are composed of when looking at the inspector.

In the inspector, this is what we can see:
`class="_button: b-3 br-4 pa-2 _utilities: bg-pink c-red"`

# Disregard Markup in the src folder

In the src folder, in order to encapsulate our css for each different type of button, we have pre-fixed each class with:
- 'c' > for ButtonTraditionalCSS
- 'j' > for ButtonJS
- '' > for ButtonAtomicModules

So for instance the className of ButtonTraditionalCSS are pre-fixed with `-c` to avoid them to bleed on the other button's styles:
```js
className="c-button c-bg-pink c-c-red"
```
When if we were exclusively using AtomicModules or even traditional atomic CSS, these classes would be written as: 
```js
className="button bg-pink c-red"
```

Please disregard these classes, as they wouldn' appear in a project where AtomicModules would be used throughout.

# What's going on here?

We think that both atomic CSS (such as Tachyons https://tachyons.io/ ) and reusable modules (such as classes that use BEM naming) have advantages and disadvantages.
We are trying to find a solution that brings the power of both atomic css and reusable modules, without their inconvenients.

What's good about atomic CSS:
- Fastens development by simply adding classes in your html
- Avoids having to look through the whole html to identify what could break by the change of a property’s class
- Avoids the ‘black box’ paradox: I have to go check in my stylesheet everytime I want to know what’s going on in my module 
- Keeps the stylesheet to a fixed length.
- Hard to create modules when no design guidelines, therefore atomic CSS is easier in a prototyping environment
- Facilitates working with a changing development team, as atomic classes are pre-defined
- Enforcing BEM systematically makes no sense: some components are just too specific and the class name is just there to serve as a hook for highly specific classes that aren’t re-used anywhere else. And if they are, they might break everything the minute one of the components changes.

What's good about reusable modules:
- Atomic css prevents from spotting when several elements have the exact same code, or when they have the same code apart from minor changes. Not dry + not great for readability and re-use
- Using components alerts the developer when designers have created too many variations of the same component. Designer’s work can be enhanced if the dev. and design team works collaboratively.

What would be the best of two worlds?

Atomic CSS with some reusable components that aren’t creating a black box effect + keeping css optimisation/performance + being able to look at the Inspector and understand exactly what/where to modify code in our code base to achieve the same effect than toggling classes in the Inspector does.

This is what we have tried to achieve with AtomicModules

# AtomicModules: Syntax
We're using React for our example, but we could use other frameworks.

ButtonAtomicModules.js

```js
import React from 'react'
import './styles.css'
import { button } from '../../assets/modules'

const ButtonAtomicModules = ({children}) => (
    <button className={`${button} _utilities: bg-pink c-red pa-2`}>
        {children}        
    </button>
)

export default ButtonAtomicModules
```

modules.js

```js
export const button = "_button: b-3 br-4 pa-2"
```

styles.css

```css
.bg-pink {
  background-color: pink;
} 

.c-red {
  color: red;
} 

.pa-2 {
  padding: 20px;
} 

.b-3 {
  border: solid 3px;
}

.br-4 {
  border-radius: 4px;
}
```

In the inspector:
`
class="_button: b-3 br-4 pa-2 _utilities: bg-pink c-red pa-2"
`

# Discussing CSS modules

CSS modules, and why observing their use case helps us:

CSS modules harvest the power of JS and CSS to create encapsulated CSS classes that are attached to a JS object. (See explanation here: https://www.javascriptstuff.com/what-are-css-modules/)

## Why it is not helpful for our purpose:

The power of CSS modules is that it encapsulates CSS. 
However, the point of AtomicModules is NOT to encapsulate the CSS for each component in just one file. Actually, the only time where we’d need encapsulated css would be if we had an html tag that wasn’t responding to atomic css (so probably smelly code that is not following design specs - which we should avoid; AND if we really needed an encapsulated class once in a while, we could just create a BEM class for that very purpose, clearly identified as custom and gathered in one file).

## Why it is helpful for our purpose:

CSS modules is moving away from the traditional html/css combination (classes written in the html markup that reference directly a CSS stylesheet) to JS objects that reference CSS classes. This is what is achieved with AtomicModules too.
Whether or not this impacts the performance of the code by adding a layer of JS between the html and the CSS, CSS modules seems to be an accepted concept, and therefore AtomicModules should be fine on that front too.
In addition, AtomicModules doesn’t create new CSS classes for each custom object, as everything is a module or atomic CSS, whereas CSS modules does, increasing the length of the CSS stylesheet.
