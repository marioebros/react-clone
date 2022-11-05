/** @jsx createElement */
const createElement = (type, props, ...children) => {
  if (props === null) props = {};
  return { type, props, children };
};

/* Helper method for pretty VDOM display */
const prettyVDOM = (vdom) => JSON.stringify(vdom, null, 4);

/* Example #1: Simple text */
document.getElementById("one").textContent = prettyVDOM(
  <div>Hello World!</div>
);

/* Example #2: Simple nested list example */
document.getElementById("two").textContent = prettyVDOM(
  <ul className="some-list">
    <li className="some-list__item">One</li>
    <li className="some-list__item">Two</li>
  </ul>
);
