## AbtractAPI ##

This is the backend for Abstract

We have two API routes:
/api/uploadPDF
/api/expandLLM

uploadPDF takes in a PDF input, parses out the text, and saves it into our PostgreSQL database
expandLLM takes a substring from a research article, and expands the information based off the full content of the PDF stored in our database
