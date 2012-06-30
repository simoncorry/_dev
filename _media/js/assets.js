/* /// ASSETS /// */

/* Clouds */

$(document).ready(function() {
    /* Cloud Colors */
    cloud_colors = ['#eae6d8','#fff'];
 
    /* Cloud Small 1 */ 
    var cs_1 = new Raphael(document.getElementById('cloud-small-1'), 80, 45);
    var cs_1_stroke = cs_1.path('M 0 30 l 0 5 l 5 0 l 0 5 l 10 0 l 0 -5 l 5 0 l 0 5 l 5 0 l 0 5 l 15 0 l 0 -5 l 10 0 l 0 5 l 15 0 l 0 -10 l 10 0 l 0 -5 l 5 0 l 0 -5 l -5 0 l 0 -5 l -5 0 l 0 -10 l -5 0 l 0 -5 l -5 0 l 0 5 l -5 0 l 0 5 l -5 0 l 0 -5 l -5 0 l 0 -5 l -5 0 l 0 -5 l -10 0 l 0 5 l -5 0 l 0 5 l -5 0 l 0 5 l -10 0 l 0 5 l -5 0 l 0 10 l -5 0 l 0 5 z');
    cs_1_stroke.attr(
        {
            fill:cloud_colors[0],
            stroke:'none'
        }
    );
    var cs_1_inner = cs_1.path('M 5 30 l 0 5 l 10 0 l 0 -5 l 5 0 l 0 5 l 5 0 l 0 5 l 15 0 l 0 -5 l 10 0 l 0 5 l 15 0 l 0 -5 l 5 0 l 0 -5 l 5 0 l 0 -5 l -5 0 l 0 -5 l -5 0 l 0 -10 l -5 0 l 0 5 l -5 0 l 0 5 l -5 0 l 0 -5 l -5 0 l 0 -5 l -5 0 l 0 -5 l -10 0 l 0 10 l -10 0 l 0 5 l -10 0 l 0 10 z');
    cs_1_inner.attr(
        {
            fill:cloud_colors[1],
            stroke:'none'
        }
    );
    var cs_1_details_1 = cs_1.path('M 25 25 l 10 0 l 0 10 l -5 0 l 0 -5 l -5 0 l 0 -5 z');
    cs_1_details_1.attr(
        {
            fill:cloud_colors[0],
            stroke:'none'
        }
    );
    var cs_1_details_2 = cs_1.path('M 40 25 l 15 0 l 0 5 l 5 0 l 0 5 l -5 0 l 0 -5 l -15 0 l 0 -5 z');
    cs_1_details_2.attr(
        {
            fill:cloud_colors[0],
            stroke:'none'
        }
    );
    
    /* Cloud Small 2 */
    var cs_2 = new Raphael(document.getElementById('cloud-small-2'), 80, 50);
    var cs_2_stroke = cs_2.path('M 0 25 l 5 0 l 5 0 l  z'); 
    cs_2_stroke.attr(
        {
            fill:cloud_colors[0],
            stroke:'none'
        }
    );  
});  
  