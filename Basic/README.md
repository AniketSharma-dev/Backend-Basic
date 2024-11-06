# Backend Basic

## Getting Started

To start this project, you have two options:

1. **Using `npm start`**  
   Run the following command to start the project using Node.js:
   ```bash
   npm start
   ```
   This command will execute `node index.js`, starting the server. However, using `node` directly does not automatically reload the server if you make changes to the code. If you change anything, you'll need to stop and restart the server manually.

2. **Using `npx nodemon` for Auto-Reloading**  
   For a smoother development experience, you can use `nodemon` to automatically restart the server whenever you change the code:
   ```bash
   npm run monStart
   ```
   This command will run `npx nodemon index.js`, which is the recommended approach. With `nodemon`, the server will automatically reload on any file change, saving you from manually restarting each time.

**Note:** Using `nodemon` is a better approach for development, as it improves workflow and reduces repetitive manual tasks.

---

### Why `npm start` Works Without `run` While `npm run nodemonStart` Requires It

The `start` script is a special case in npm. You can simply type `npm start` without `run` because npm recognizes `start` as a default command. Other default scripts include `npm test` and `npm stop`, but **all custom scripts require `npm run`**.

### Summary of How to Run Each Script

*   **For default scripts**:
    ```bash
    npm start           # Runs "start": "node index.js"
    npm test            # If a test script is defined, you can run it like this
    ```

*   **For custom scripts** (like `"nodemonStart"`):
    ```bash
    npm run nodemonStart   # Runs "nodemonStart": "npx nodemon index.js"
    ```

If you want to avoid typing `run`, renaming `"nodemonStart"` to `"dev"` or `"start-dev"` (or similar) is another option, but you’d still need `npm run` unless you make it the default `start`.
