{
    "version": 2,
    "name": "weather-app",
    "builds": [
       { "src": "server.js", "use": "@vercel/node" }
    ],
    "routes": [
       { "src": "/(.*)", "dest": "/server.js" }
    ]
 }
 