{
    "version": 2,
    "name": "weather-app",
    "builds": [
       { "src": "index.js", "use": "@vercel/node" }
    ],
    "routes": [
       { "src": "/(.*)", "dest": "/index.js" }
    ]
 }
 