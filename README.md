### Answer the following questions clearly:

### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById, getElementsByClassName, and querySelector / querySelectorAll are four DOM methods are used to select elements in JavaScript, but they work differently. the difference are given bellow:

getElementById	
It's selector type:ID only
It returns 	Element or null	
It is the simplest and fastest.

getElementsByClassName
It's selector type: Class only.
It returns HTMLCollection	
Live, needs looping.

querySelector / querySelectorAll
It's selector type:	Any CSS selector.	
It returns First matching element.	
A little slower than getElementById but Very flexible.




### How do you create and insert a new element into the DOM?

Ans: To create and insert a new element into the dom the following steps are needed:

step-1: Create a new element

step-2:Set content or attributes

step-3:Insert it into the DOM

Example :

<!DOCTYPE html>
<html>
<head>
  <title>Create & Insert Element</title>
</head>
<body>
  <h1 id="heading">My Page</h1>
  <div id="container"></div>
  <button onclick="addElement()">Add Element</button>

  <script>
    function addElement() {
      // Step 1: Create a new element
      const newPara = document.createElement("p");

      // Step 2: Add text inside it
      newPara.innerText = "This is a new paragraph!";

      // Step 3: Insert it inside the container div
      document.getElementById("container").appendChild(newPara);
    }
  </script>
</body>
</html>



### What is Event Bubbling and how does it work?

Ans: Event bubbling is a way events propagate (move) through the DOM after being triggered.

When an event (like a click) happens on an element, it first runs the handler on that element.

Then, it "bubbles up" and triggers the same event handlers on ancestor elements (parent → grandparent → … → document).



### What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation in JavaScript is a technique where you attach a single event listener to a parent element to handle events for its child elements, instead of adding individual listeners to each child.

It works because of Event Bubbling → when an event is triggered on a child element, it bubbles (propagates) up through its ancestors, so the parent can "catch" it.

Example without delegation:

// Adding click event to each button individually
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('Button clicked:', button.textContent);
  });
});

Example with Event Delegation:

// Add one event listener to the parent container
document.getElementById('button-container').addEventListener('click', function(e) {
  if (e.target && e.target.classList.contains('btn')) {
    console.log('Button clicked:', e.target.textContent);
  }
});



### What is the difference between preventDefault() and stopPropagation() methods?

Answer: The difference between preventDefault() and stopPropagation() methods are as follows:

preventDefault() methods:

IT's Purpose: Stops the default browser action of an event.

It does not stop the event from bubbling up to parent elements.

Example: Preventing a form from submitting

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents the form from reloading the page
  console.log("Form submission prevented");
});



stopPropagation() methods :

It's Purpose: Stops the event from bubbling (going up to parent elements).

It does not prevent the default behavior.

Example: Stopping bubbling

document.getElementById("child").addEventListener("click", function (e) {
  e.stopPropagation(); // Prevent parent from knowing about the click
  console.log("Child clicked, but parent won't know");
});

document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent clicked");
});


