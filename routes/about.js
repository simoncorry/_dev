/*
 * --------------
 * GET About Page
 * --------------
 */

exports.page = function(req, res){
  res.render('about', { 
    title       : 'About',
    description : 'About Page',
    keywords    : '*** KEYWORDS ***',
    author      : 'Simon Corry' 
  });
/*
  res.render('post/bp_' + req.params.id , {
    title: req.params.title.replace(/_/g,' ')
  });
*/
};