#Create an Express Middleware

This middleware function will parse incoming JSON. A succesful parse will be saved to req.body. It will then call the next function. If a parse is not succesful a message of "invalid json" will be returned.
