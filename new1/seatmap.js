:A4*__:A12*:A
:B4*__:B12*:B
:C4*__:C12*:C
:D4*__:D12*:D
:E4*__:E12*:E
:F4*__:F12*:F
:G4*__:G12*:G
:H4*__:H12*:H
:I4*__:I12*:I
:J4*__:J12*:J
:K4*__:K12*:K
:L4*__:L12*:L
:M4*__:M12*:M
:N4*__:N12*:N
:O4*__:O12*:O
:P4*__:P12*:P
_________:Q10*:Q
__________:R9*:R
__________:S9*:S
___________:T8*:T


:AA4*__:AA1*:A10*:AA
:BB4*__:BB1*:B10*:BB
:CC4*__:CC1*:C10*:CC
:DD4*__:DD1*:D10*:DD



const assign_seatnames_programatically = (rownum,status) =>{
    var row_seats = [
        [[1,12],[13,16]],    
        [[1,12],[13,16]],
        [[1,12],[13,16]],
        [[1,12],[13,16]],
        [[1,12],[13,16]],
        [[1,12],[13,16]],
        [[1,12],[13,16]],
        [[1,12],[13,16]],
        [[1,12],[13,16]],
        [[1,12],[13,16]],
        [[1,12],[13,16]],
        [[1,12],[13,16]],
        [[1,12],[13,16]],
        [[1,12],[13,16]],
        [[1,12],[13,16]],
        [[1,12],[13,16]],
        [[1,10]],
        [[1,9]],
        [[1,9]],
        [[1,8]],    
        [[1,10],[11,11],[12,15]],
        [[1,10],[11,11],[12,15]],
        [[1,10],[11,11],[12,15]],
        [[1,10],[11,11],[12,15]],
    ]

    var status = status || "available";
    var rowName = $('#seatmaper_namer_row').val();
    var start_from = $('#seatmaper_namer_start').val();
    var ticket_type_id = $('#ticket_type_select').val();
    var seatColor = $('#colorselector').val();
    var seatName = "";
    var current_row = row_seats[rownum];  
    var p = aeseatMap.selected_seats_object;
    console.log("before loop");
    let obj_array = []
    for (i in p) {
    console.log(i);
    obj_array.push(p[i]);
    }
    console.log("after loop");
    console.log(obj_array[0]);

    var currentObj = 0
    current_row.forEach(function(index,column){
        for(var i1=index[0]; i1<=index[1];i1++){
            console.log("I",i1);
            //generating unique key
            var seat_key = 'SID' + ticket_type_id + '_' + rowName + '_' + i1;
            seat_key.replace('__', '_');

            seatName = rowName + '' + i1;

            console.log(seat_key);

            var seat = aeseatMap.getSeatObject(obj_array[currentObj]);
            console.log("here")
            console.log(obj_array[currentObj])
            console.log("here")
            seat.set_text(i1);

            seat.seatDomEl.data('name', seatName);
            seat.seatDomEl.data('ticket_type_id', ticket_type_id);
            seat.seatDomEl.data('seatColor', seatColor);
            seat.seatDomEl.data('status', status);
            seat.seatDomEl.attr('id', seat_key);
            seat.set_seatColor(seatColor);
            currentObj++;
        }
    })
}


function assign_row_seats(rowid,rowname,currentrow){
	aeseatMap.deselect_all();
	$('#seatmaper_namer_row').val(rowname); 
	select_row_seats(rowid);
	assign_seatnames_programatically(currentrow);
	aeseatMap.deselect_all();
}

function block_row_seats(rowid,rowname,currentrow){
	aeseatMap.deselect_all();
	$('#seatmaper_namer_row').val(rowname);
	select_row_seats(rowid);
    assign_seatnames_programatically(currentrow,'blocked');	
	aeseatMap.deselect_all();
}

// blocked_seats = A,B,D,E,L,M,N,O,P,Q = 1,2,4,5,12,13,14,15,16,17
// ASSIGN = 3,6,7,8,9,10,11,18,19,20
var seat_rows_names=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","AA","BB","CC","DD"]
var loop_row_index=0;
$('#svg_seat_map').find('g.seatgroup').each(function(i,e){    
    if(loop_row_index>23) return false;    
    var block=false;
    if(loop_row_index == 2 || loop_row_index == 5 || loop_row_index == 6){
        $('.dropdown-colorselector li a').eq(1).click();
        $('#ticket_type_select')[0].selectedIndex=3;
    }else if(loop_row_index>6 && loop_row_index<=10){
        $('.dropdown-colorselector li a').eq(2).click();
        $('#ticket_type_select')[0].selectedIndex=2;
    }else if(loop_row_index>16 && loop_row_index<=19){
        $('.dropdown-colorselector li a').eq(4).click();
        $('#ticket_type_select')[0].selectedIndex=1;
    }else if(loop_row_index>19 && loop_row_index<=23){
        $('.dropdown-colorselector li a').eq(0).click();
        $('#ticket_type_select')[0].selectedIndex=0;
    }else{
        block=true;
    }
    
    if(block==true){
        block_row_seats($(e).attr("id"),seat_rows_names[i],loop_row_index);
    }else if(block==false){
        assign_row_seats($(e).attr("id"),seat_rows_names[i],loop_row_index);
    }else{
        console.log("Ignore the row..");
    }
    loop_row_index++;
})

