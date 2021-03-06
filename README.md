## The Golden Rule:

π¦Έ π¦ΈββοΈ `Stop starting and start finishing.` π

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
![api wireframe](/assets/wireframe.png "wireframe for my api demo")
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
    -select with options(pokemon, starwars)
    -Ul element for containing each character(each character will be attached an li element)
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
    -watching for select changing value
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

## Plan

    -deploy on netflify
    -create needed html elements
    -write functions for fetching from my api
        -star wars
        -pokemon
    -write my event listener