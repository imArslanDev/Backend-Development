export const api = (req, res) => {
    console.log("Home Page");
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome Home</title>
        <style>
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                background-color: #1e1e1e;
                color: #fefefe;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                padding: 20px;
            }
            .card {
                background: #2e2e2e;
                padding: 48px;
                border-radius: 16px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
                max-width: 480px;
                width: 100%;
                text-align: center;
            }
            h1 {
                font-size: 2.25rem;
                font-weight: 700;
                color: #fefefe;
                margin-bottom: 12px;
            }
            p {
                color: #f5f5f5ea;
                font-size: 1.1rem;
                line-height: 1.6;
                margin-bottom: 28px;
            }
            .btn {
                display: inline-block;
                background-color: #2563eb;
                color: #ffffff;
                padding: 12px 24px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 600;
                transition: background-color 0.2s ease;
            }
            .btn:hover {
                background-color: #1d4ed8;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Welcome Home! 👋</h1> 
            <p>Your application is running smoothly ✅</p>
            <a href="/api/readAllUser" class="btn">See All Users</a>
        </div>
    </body>
    </html>
    `);
};