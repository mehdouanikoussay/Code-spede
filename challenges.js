// challenges.js
const challenges = {
  javascript: {
    beginner: [
      { description: "Write a function that returns 'Hello World'", 
        solution: `function hello() {\n  return "Hello World";\n}` },
      { description: "Create a variable 'name' with your name", 
        solution: `let name = "YourName";` },
      { description: "Log 'Ready to code!' to console", 
        solution: `console.log("Ready to code!");` },
      { description: "Make an array with numbers 1 to 5", 
        solution: `let nums = [1, 2, 3, 4, 5];` },
      { description: "Write a for loop that logs 0 to 4", 
        solution: `for(let i = 0; i < 5; i++) {\n  console.log(i);\n}` }
    ],
    intermediate: [
      { description: "Write a function isEven(n) that returns true if even", 
        solution: `function isEven(n) {\n  return n % 2 === 0;\n}` },
      { description: "Double every number in [1,2,3,4] using map", 
        solution: `let doubled = [1,2,3,4].map(x => x * 2);` },
      { description: "Filter numbers greater than 10 from [5,12,8,15,3]", 
        solution: `let big = [5,12,8,15,3].filter(n => n > 10);` },
      { description: "Create a function add(a,b) with default b=10", 
        solution: `function add(a, b = 10) {\n  return a + b;\n}` },
      { description: "Reverse a string 'hello'", 
        solution: `let reversed = "hello".split("").reverse().join("");` }
    ],
    advanced: [
      { description: "Create a Promise that resolves after 1 second", 
        solution: `new Promise((resolve) => {\n  setTimeout(() => resolve("Done"), 1000);\n});` },
      { description: "Write async/await to fetch fake data", 
        solution: `async function getData() {\n  await new Promise(r => setTimeout(r, 500));\n  return "data";\n}` },
      { description: "Implement a simple debounce function", 
        solution: `function debounce(fn, delay) {\n  let t;\n  return (...args) => {\n    clearTimeout(t);\n    t = setTimeout(() => fn(...args), delay);\n  };\n}` },
      { description: "Flatten nested array [[1,2],[3,4]]", 
        solution: `let flat = [[1,2],[3,4]].flat();` },
      { description: "Create a class Person with name and greet()", 
        solution: `class Person {\n  constructor(name) { this.name = name; }\n  greet() { return "Hi, " + this.name; }\n}` }
    ]
  },

  html: {
    beginner: [
      { description: "Create a basic HTML page with title 'My Page'", solution: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n</body>\n</html>` },
      { description: "Add an h1 with text 'Welcome'", solution: `<h1>Welcome</h1>` },
      { description: "Create a paragraph with lorem text", solution: `<p>Lorem ipsum dolor sit amet.</p>` },
      { description: "Add an image with alt text", solution: `<img src="img.jpg" alt="description">` },
      { description: "Make a link to google.com", solution: `<a href="https://google.com">Google</a>` }
    ],
    intermediate: [
      { description: "Create a button with onclick alert", solution: `<button onclick="alert('Hi')">Click me</button>` },
      { description: "Make a form with name input and submit", solution: `<form>\n  <input type="text" placeholder="Name">\n  <button>Submit</button>\n</form>` },
      { description: "Add a div with class 'container'", solution: `<div class="container">\n  <!-- content -->\n</div>` },
      { description: "Create an unordered list with 3 items", solution: `<ul>\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n</ul>` },
      { description: "Add meta charset and viewport", solution: `<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">` }
    ],
    advanced: [
      { description: "Create a responsive flexbox container", solution: `<div style="display:flex; gap:20px; flex-wrap:wrap;">\n  <div style="flex:1; min-width:200px;">Box 1</div>\n  <div style="flex:1; min-width:200px;">Box 2</div>\n</div>` },
      { description: "Make a CSS grid with 3 columns", solution: `<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem;">\n  <div>1</div><div>2</div><div>3</div>\n</div>` },
      { description: "Add dark mode meta theme", solution: `<meta name="color-scheme" content="dark light">\n<meta name="theme-color" content="#1e1e1e">` },
      { description: "Create semantic article with header and footer", solution: `<article>\n  <header><h2>Title</h2></header>\n  <p>Content...</p>\n  <footer>By Me</footer>\n</article>` },
      { description: "Add SVG inline icon (simple square)", solution: `<svg width="50" height="50"><rect width="50" height="50" fill="#007acc"/></svg>` }
    ]
  },

  css: {
    beginner: [
      { description: "Center a div horizontally and vertically", solution: `display: flex;\njustify-content: center;\nalign-items: center;\nheight: 100vh;` },
      { description: "Make text red and bold", solution: `color: red;\nfont-weight: bold;` },
      { description: "Add 20px padding and rounded corners", solution: `padding: 20px;\nborder-radius: 10px;` },
      { description: "Set background to dark gray", solution: `background: #333;\ncolor: white;` },
      { description: "Hide an element", solution: `display: none;` }
    ],
    intermediate: [
      { description: "Create a hover effect that scales 1.1x", solution: `transition: transform 0.3s;\n&:hover { transform: scale(1.1); }` },
      { description: "Make a sticky header", solution: `position: sticky;\ntop: 0;\nbackground: #1e1e1e;\nz-index: 100;` },
      { description: "Add box shadow", solution: `box-shadow: 0 4px 20px rgba(0,0,0,0.3);` },
      { description: "Create responsive text (vw)", solution: `font-size: 5vw;` },
      { description: "Make a gradient background", solution: `background: linear-gradient(45deg, #007acc, #00d4aa);` }
    ],
    advanced: [
      { description: "Write a CSS animation bounce", solution: `@keyframes bounce {\n  0%,100% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n}\nanimation: bounce 2s infinite;` },
      { description: "Create a glassmorphism card", solution: `background: rgba(255,255,255,0.1);\nbackdrop-filter: blur(10px);\nborder: 1px solid rgba(255,255,255,0.2);` },
      { description: "Make a 3D flip card on hover", solution: `perspective: 1000px;\n&:hover > div { transform: rotateY(180deg); }\ntransition: 0.6s;\ntransform-style: preserve-3d;` },
      { description: "CSS-only tooltip", solution: `position: relative;\n&:hover::after {\n  content: attr(data-tip);\n  position: absolute;\n  bottom: 100%;\n  background: #333;\n  padding: 5px 10px;\n  border-radius: 4px;\n}` },
      { description: "Smooth scroll behavior", solution: `scroll-behavior: smooth;\nheight: 100vh;\noverflow-y: scroll;` }
    ]
  },

  python: {
    beginner: [
      { description: "Print 'Hello Python'", solution: `print("Hello Python")` },
      { description: "Create variable x = 100", solution: `x = 100` },
      { description: "Make a list with 1,2,3", solution: `nums = [1, 2, 3]` },
      { description: "Loop from 0 to 4 and print i", solution: `for i in range(5):\n    print(i)` },
      { description: "Define a function say_hi()", solution: `def say_hi():\n    print("Hi!")` }
    ],
    intermediate: [
      { description: "Write a function that returns square 2*x", solution: `def double(x):\n    return 2 * x` },
      { description: "List comprehension: squares of 1-5", solution: `squares = [x**2 for x in range(1,6)]` },
      { description: "Check if 'python' in string", solution: `if "python" in "I love python":\n    print("Yes")` },
      { description: "Read a name and print greeting", solution: `name = input("Name: ")\nprint(f"Hello {name}!")` },
      { description: "Lambda to add two numbers", solution: `add = lambda a, b: a + b` }
    ],
    advanced: [
      { description: "Generator for Fibonacci sequence", solution: `def fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b` },
      { description: "Decorator to time a function", solution: `import time\ndef timer(func):\n    def wrapper(*args):\n        s = time.time()\n        res = func(*args)\n        print(time.time() - s)\n        return res\n    return wrapper` },
      { description: "Context manager for file", solution: `with open("file.txt", "w") as f:\n    f.write("Hello")` },
      { description: "One-liner: read lines and strip", solution: `lines = [l.strip() for l in open("f.txt")]` },
      { description: "Class Counter with increment", solution: `class Counter:\n    def __init__(self): self.n = 0\n    def inc(self): self.n += 1\n    def get(self): return self.n` }
    ]
  }
};