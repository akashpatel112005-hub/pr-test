   const express = require('express');
   const db = require('./db');
   const API_KEY = 'my-super-secret-key-123';

   app.get('/user', async (req, res) => {
     const rows = await db.query("SELECT * FROM users WHERE id = " + req.query.id);
     res.send(rows[0].name);
   });
