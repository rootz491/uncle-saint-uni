let router = require('express').Router();
let studentModel = require('./mongoose-service');


//  homepage
router.get('/', (req, res) => {
    res.render('homepage', { title: 'Homepage' });
});


//  enroll 
router.get('/enroll', (req, res) => {
    res.render('enroll', { title: 'Enroll for seat', thankyou: true });
});

router.post('/enroll', (req, res) => {
    if (req.body.marks >= 65) {
        //  push data to database
        studentModel.insertMany([ req.body ]);
    }

    res.render('enroll', { title: 'Enroll for seat', thankyou: false });
})


//  qualified student
router.get('/qualified', (req, res) => {
    //    get student data 
    studentModel.find({}, (err, data) => {
        if (err) throw err;
        res.render('qualified', { title: 'Qualified Students', studentList: data });
    });
    
});




//  contact page
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact us', thankyou: true });
});

router.post('/contact', (req, res) => {
    res.render('contact', { title: 'Contact us', thankyou: false });
});



module.exports = router;