// API's / Functions


exports.index_get = (req, res) => {
    //res.send("Welcome to Blog App");
    //res.render('home/index');  
    res.render('home/index', {message: "Welcome to Owlly App"})  
}

