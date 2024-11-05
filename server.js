const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const appRoutes = require('./routes/appRoutes'); // Import the router

const app = express();
app.use(express.json());

// Use the imported routes with a base path
app.use('/api', appRoutes);  // Use appRoutes here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));