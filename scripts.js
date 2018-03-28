function drawTree (height) {
    for (var i = 1; i < height; i++) {
        var star = '*';
            for (var j = 1; j < i /* *2-1 ( zmienia wartość choinki o 2 gwiazdki*/; j++) {
                
                  star += '*';
             
    }
    console.log(star);
       
    }
}
// document.getElementById('tree').innerHTML = star;
    drawTree(10);