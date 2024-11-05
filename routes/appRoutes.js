const express = require('express');
const appController = require('../controllers/appController'); // Make sure this path is correct

const router = express.Router();

// Define the route and connect it to appController.exampleAPI
router.get('/LLMexpand', appController.LLMexpand);
router.post('/uploadPDF', appController.uploadPDF);

module.exports = router;