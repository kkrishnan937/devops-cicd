const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const lastUpdated = new Date().toLocaleString();

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>DevOps Lab</title>
        <style>
            body {
                background: linear-gradient(135deg, #007bff, #00c6ff);
                color: white;
                font-family: 'Arial', sans-serif;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                text-align: center;
            }
            .box {
                background: rgba(0,0,0,0.2);
                border: 2px solid white;
                padding: 40px;
                border-radius: 15px;
                box-shadow: 0 0 20px rgba(0,0,0,0.3);
                animation: fadeIn 1s ease-in-out;
            }
            h1 { font-size: 3rem; margin-bottom: 20px; }
            p { font-size: 1.5rem; margin: 10px 0; }
            .status-dot {
                height: 12px;
                width: 12px;
                background-color: #90ee90;
                border-radius: 50%;
                display: inline-block;
                animation: pulse 1.5s infinite;
            }
            @keyframes pulse {
                0% { transform: scale(0.8); opacity: 0.6; }
                50% { transform: scale(1.2); opacity: 1; }
                100% { transform: scale(0.8); opacity: 0.6; }
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .timestamp { font-size: 0.9rem; opacity: 0.7; margin-top: 10px; }
        </style>
    </head>
    <body>
        <div class="box">
            <h1>DevOps CI/CD Pipeline 🚀</h1>
            <p>Build Status: <span class="status-dot"></span> Success</p>
            <p class="timestamp">Last updated: ${lastUpdated}</p>
        </div>
    </body>
    </html>`;

    res.send(html);
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Tutorial App running on http://localhost:3000');
});
