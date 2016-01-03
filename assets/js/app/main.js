

var player_move_right = function() {
        
    for (var i = 0; i < 10; i++) {
        
        current_x_axis();
        
        var new_x_axis = x_axis+10;
        
        
        $player.css({
            'transform' : 'translate3d(' + new_x_axis + 'px,0,0)'
        });
        
        
        
        console.log(x_axis);
    }
    
}



var current_x_axis = function() {

    x_axis = parseInt($player.css('transform').split(',')[4]);  
    
    console.log(x_axis);

}



$(function() {
  
  $player = $('#player');
  
  
  
  player_move_right();
                
});