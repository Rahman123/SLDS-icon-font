# SLDS-icon-font

The [Salesforce Lightning Design System (SLDS Icons)](https://www.lightningdesignsystem.com/resources/icons "SLDS"), created by [Salesforce](http://www.salesforce.com/), currently offers a very robust and flexible SVG icon system. However, there may be situations where an additional icon font set would enhance the design system.

Well, here it is.

This icon font set is based on the SLDS SVG set (version 0.10.1) and generated using [Icomoon](https://icomoon.io/ "Icomoon").

## Basic Usage
On an empty inline element, add the class name of the respective icon. The naming scheme goes like this: `sldsicon-[categoryName]-[fontName]`. After the `sldsicon` prefix, the naming convention is similar to the one located in the [SLDS docs](https://www.lightningdesignsystem.com/resources/icons "SLDS").

Example: `<i class="sldsicon-utility-add"></i>`.

## Caveats
The only caveat is with the SLDS `doctype` icons which use two layers. The markup to render those looks like this:

```
<span class="sldsicon-doctype-audio">
    <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
</span>
```

Check out [a demo](http://codescience.github.io/SLDS-icon-font/).

## Getting Started
There are a couple of options here:
* Clone the repo: `git clone https://github.com/CodeScience/SLDS-icon-font.git`
* Install with npm: `npm install`

## Contributing
1. `npm install`
2. `gulp`
3. `gulp serve`
4. Make your local edits and submit a pull request.

### Attribution
This icon font is being released as a redistribution of the original set of icons created by [Salesforce](http://www.salesforce.com/) for the [Salesforce Lightning Design System](http://lightningdesignsystem.com). As a redistribution of the original work in a new format, this work&mdash;provided free of charge by CodeScience&mdash;carries with it the same [CreativeCommons-Attribution-NoDerivatives](http://creativecommons.org/licenses/by-nd/4.0/) license as the original work.
