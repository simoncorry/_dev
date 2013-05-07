/*
 * -------------
 * GET Home Page
 * -------------
 */

exports.page = function(req, res){
  res.render('index', { 
    title       : 'Home',
    description : 'Home Page',
    keywords    : '*** KEYWORDS ***',
    author      : 'Simon Corry' 
  });
};