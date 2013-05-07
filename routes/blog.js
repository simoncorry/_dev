/*
 * -------------
 * GET Blog Page
 * -------------
 */

exports.page = function(req, res){
  res.render('blog', { 
    title       : 'Blog',
    description : 'Blog Page',
    keywords    : '*** KEYWORDS ***',
    author      : 'Simon Corry' 
  });
/*
  res.render('post/bp_' + req.params.id , {
    title: req.params.title.replace(/_/g,' ')
  });
*/
};