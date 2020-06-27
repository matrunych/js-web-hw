import StepanError from '/src/lib/errors.js'


export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    // TODO: check if this is a valid tag name
    const newElement = document.createElement(element);

    if (newElement instanceof HTMLUnknownElement){
      throw new StepanError("Tag name is Invalid");
    }

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static Component = class {
    constructor(parent) {

      // TODO: 1. Create StepanError class to define all framework errors
      //       2. throw an error if parent is null or undefined, or if it's not a valid DOM object

      if (parent == null ){
        throw new StepanError('Parent cannot be null');

      } else if (parent == undefined){
        throw new StepanError('Parent cannot be undefined');
      }
      
      if (!(parent.nodeType === 1)) {
        throw new StepanError('Parent is invalid DOM object');
      }


      this.parent = parent;
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}

