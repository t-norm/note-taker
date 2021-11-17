//dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Express.js initialization
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//listener
app.listen(PORT, () => {
    console.log(`Server docked at port ${PORT}`);
});