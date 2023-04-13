const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const hotelController = require('../controllers/hotelController');
const profileController = require('../controllers/profileController');


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/hotel', hotelController);
    app.use('/profile', profileController);


    // Global error handler
    
    // app.get('/error', (req, res, next) => {
    //     //next(new Error('propagating error'));
    //     throw new Error('propagating error');
    // });

    // app.use((err, req, res, next) => {
    //     console.log('Global error handling');
    //     console.log(err.message);
    //     res.redirect('/');
    // });
};