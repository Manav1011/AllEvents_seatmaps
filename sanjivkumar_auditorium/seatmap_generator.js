var seat_rows_names=["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M","N","O","P","Q","R","S","T","U","V","W"];

//printing all seat rows ids
var loop_row_index=0;
$('#svg_seat_map').find('g.seatgroup').each(function(i,e){
    loop_row_index++;
    console.log(loop_row_index);
    if(loop_row_index>23) return false;

    var block=false;
    //var block=true;
    
    if(loop_row_index<=8){        
        $('.dropdown-colorselector li a').eq(0).click();
        $('#ticket_type_select')[0].selectedIndex=0;        
    }else if(loop_row_index>8 && loop_row_index<=16){        
        $('.dropdown-colorselector li a').eq(1).click();
        $('#ticket_type_select')[0].selectedIndex=1;
    }else if(loop_row_index>16 && loop_row_index<=20){        
        $('.dropdown-colorselector li a').eq(2).click();
        $('#ticket_type_select')[0].selectedIndex=2;
    }else if(loop_row_index>20 && loop_row_index<=23){
        $('.dropdown-colorselector li a').eq(4).click();
        $('#ticket_type_select')[0].selectedIndex=3;
    }else{
        block="skip";
    }

    console.log($(e).attr("id"));
    console.log(seat_rows_names[i]);

    if(block==true){
        block_row_seats($(e).attr("id"),seat_rows_names[i]);
    }else if(block==false){
        assign_row_seats($(e).attr("id"),seat_rows_names[i]);    
    }else{
        console.log("Ignore the row..");
    }

})


function assign_row_seats(rowid,rowname){
	aeseatMap.deselect_all();
	$('#seatmaper_namer_row').val(rowname); 
	setTimeout(select_row_seats(rowid),300);
	setTimeout(aeseatMap.assign_seatnames(),500);
	setTimeout(aeseatMap.deselect_all(),200);
}


function block_row_seats(rowid,rowname){
	aeseatMap.deselect_all();
	$('#seatmaper_namer_row').val(rowname);
	setTimeout(select_row_seats(rowid),300);
	setTimeout(aeseatMap.assign_seatnames('blocked'),500);
	setTimeout(aeseatMap.deselect_all(),200);
}