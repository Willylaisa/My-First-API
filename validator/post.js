exports.createPostValidator = (req, res, next) => {
    req.check("title", "Please add a title").notEmpty()
    req.check("title", "Title must be between 3 and 180 characters")
    .isLength({
        min: 4,
        max: 179
    })
    req.check("body", "Please add some text").notEmpty()
    req.check("body", "Text must be between 50 and 7000 charcters")
    .isLength({
        min: 50,
        max: 6999
    })

    //check errors
    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map((mistake) => mistake.msg)[0]
        return res.status(422).json({
            error : firstError
        })
    }
    next()    
}