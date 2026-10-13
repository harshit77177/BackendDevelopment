# Experiment 07 & 08: ES6, DOM Manipulation, and Event Handling

Beginner-friendly JavaScript examples and a small interactive to-do list.

## Objective

Learn how to use modern JavaScript (ES6), select and update HTML elements with
the DOM, and respond to user actions with events.

After completing this experiment, you should be able to:

- Use `let`, `const`, arrow functions, template literals, and destructuring.
- Use spread and rest syntax, default parameters, classes, and modules.
- Read and update page content, attributes, styles, and elements with JavaScript.
- Listen for events and understand event bubbling and delegation.
- Build a small page where a user can add, complete, and delete tasks.

## Requirements

- A modern web browser such as Chrome, Firefox, or Edge.
- A code editor such as Visual Studio Code.
- Python 3 for starting a simple local web server. No packages need to be installed.

## Folder contents

```text
Exp 07 & 08/
├── index.html              Experiment home page
├── Part-A-ES6/              ES6 examples and JavaScript module
├── Part-B-DOM/              DOM selection and manipulation examples
├── Part-C-Events/           Browser event examples
└── To-Do-List/              Practical interactive exercise
```

## How to run

Part A uses JavaScript modules, so run the experiment through a local web server
instead of opening the HTML files directly.

1. Open the `Exp 07 & 08` folder in Visual Studio Code.
2. Open a terminal in this folder.
3. Start the server:

   **Windows (PowerShell):**

   ```powershell
   py -m http.server 8000
   ```

   **macOS or Linux:**

   ```bash
   python3 -m http.server 8000
   ```

   If `py` is not available on Windows, try `python -m http.server 8000`.

4. Open [http://localhost:8000](http://localhost:8000) in your browser.
5. Select a part from the experiment home page.
6. To stop the server, return to the terminal and press `Ctrl+C`.

Keep the terminal running while you use the pages. If port `8000` is already in
use, start the server with another port, for example `py -m http.server 8001`,
and open `http://localhost:8001`.

## Parts of the experiment

### Part A: ES6 features

Open [Part A](Part-A-ES6/). The page displays examples of:

- `var`, `let`, and `const`
- Arrow functions and template literals
- Array and object destructuring
- Spread and rest syntax
- Default parameters
- Classes, inheritance, and static methods
- Enhanced object literals
- Named and default `import` / `export`
- Promises and `async` / `await`

The examples appear on the page. The browser developer console also shows the
results. The `math.js` file is imported by `app.js`.

### Part B: DOM manipulation

Open [Part B](Part-B-DOM/), then try the buttons and input. This page demonstrates:

- Selecting elements by ID, class, tag, and CSS selector.
- Changing text with `textContent`, `innerText`, and `innerHTML`.
- Reading, setting, and removing HTML attributes.
- Updating styles and toggling CSS classes.
- Creating, inserting, and removing list items.
- Finding parent, child, and sibling elements.

The `innerHTML` example uses fixed, trusted text. Do not put user-entered text
into `innerHTML`; use `textContent` to display user input safely.

### Part C: event handling

Open [Part C](Part-C-Events/), then follow the prompts on the page. Try the
button and hover box, type in the input, submit the form, and click the inner
button with and without the stop-bubbling checkbox selected. Add and select an
Orange list item to see event delegation working for a newly created item.

The page demonstrates click, mouse, keyboard, input, and form events, as well as
`preventDefault()`, `stopPropagation()`, bubbling, and event delegation.

### Practical exercise: to-do list

Open the [To-Do List](To-Do-List/). Enter a task and choose **Add task** (or
press Enter). Use **Done** to mark it complete, **Undo** to change it back, and
**Delete** to remove it.

The task list is kept in memory for the current page. Reloading the page starts
a fresh list.

## Suggested procedure

1. Start the local server and open the experiment home page.
2. Open each part and try its examples.
3. Read the matching JavaScript file while using each page.
4. Change a small example value in the code, refresh the page, and observe the
   result.
5. Complete the to-do list exercise.

## Expected result

The ES6 page displays example results. The DOM and event pages respond to
buttons, input, and clicks. The to-do list lets you add tasks, mark them done,
undo completion, and delete them.

## Conclusion

This experiment demonstrates how ES6 makes JavaScript easier to write, how the
DOM lets JavaScript update a web page, and how events make the page respond to
the user. These ideas are useful foundations for building interactive web
applications.

## Troubleshooting

| Problem | What to try |
| --- | --- |
| Part A is blank or its examples do not load | Start the local server in the `Exp 07 & 08` folder and open the page through `http://localhost:8000`. |
| The browser says the address cannot be reached | Check that the server is still running in the terminal and that the port in the browser address matches the server command. |
| A button does not appear to work after editing | Check the browser console for errors, confirm the HTML `id` matches the JavaScript selector, and refresh the page. |
| `py` is not recognized on Windows | Try `python -m http.server 8000`. |

[Back to Laboratory Work](../)
