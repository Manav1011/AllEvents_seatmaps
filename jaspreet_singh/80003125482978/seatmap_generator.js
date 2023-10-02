:A1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*1*1/1*2/1*3/1*4/1*5/1*6/1*7/:A
:B1*11\1*10\1*9\1*8\:B1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*1*1/1*2/1*3/1*4/1*5/1*6/1*7/:B1*8/1*9/1*10/1*11/:B
:C1*11\1*10\1*9\1*8\:C1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*1*1/1*2/1*3/1*4/1*5/1*6/1*7/:C1*8/1*9/1*10/1*11/:C
:D1*11\1*10\1*9\1*8\:D1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*1*1/1*2/1*3/1*4/1*5/1*6/1*7/:D1*8/1*9/1*10/1*11/:D
:E1*11\1*10\1*9\1*8\:E1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*1*1/1*2/1*3/1*4/1*5/1*6/1*7/:E1*8/1*9/1*10/1*11/:E
:F1*11\1*10\1*9\1*8\:F1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*1*1/1*2/1*3/1*4/1*5/1*6/1*7/:F1*8/1*9/1*10/1*11/:F
:G1*12\1*11\1*10\1*9\1*8\:G1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*1*1/1*2/1*3/1*4/1*5/1*6/1*7/:G1*8/1*9/1*10/1*11/1*12/:G
:H1*14\1*13\1*12\1*11\1*10\1*9\1*8\:H1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*1*1/1*2/1*3/1*4/1*5/1*6/1*7/:H1*8/1*9/1*10/1*11/1*12/1*13/1*14/:H
:J1*15\1*14\1*13\1*12\1*11\1*10\1*9\1*8\:J1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*1*1/1*2/1*3/1*4/1*5/1*6/1*7/:J1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*15/:J
:K1*15\1*14\1*13\1*12\1*11\1*10\1*9\1*8\:K1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*1*1/1*2/1*3/1*4/1*5/1*6/1*7/:K1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*15/:K
:L1*15\1*14\1*13\1*12\1*11\1*10\1*9\1*8\:L1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*1*1/1*2/1*3/1*4/1*5/1*6/1*7/:L1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*15/:L
:M1*15\1*14\1*13\1*12\1*11\1*10\1*9\1*8\:M1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*1*1/1*2/1*3/1*4/1*5/1*6/1*7/:M1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*15/:M
:N1*15\1*14\1*13\1*12\1*11\1*10\1*9\1*8\:N1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*1*1/1*2/1*3/1*4/1*5/1*6/1*7/:N1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*15/:N
:O1*15\1*14\1*13\1*12\1*11\1*10\1*9\1*8\:O1*7\1*6\1*5\1*4\_3\_2\_1\__1/_2/_3/_4/_5/_6/_7/:O1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*15/:O
:P1*15\1*14\1*13\1*12\1*11\1*10\1*9\1*8\:P_7\_6\_5\_4\_3\_2\_1\__1/_2/_3/_4/_5/_6/_7/:P1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*15/:P

var select_row_seats=function(rowid) {
	var sarray = $('#'+rowid).find('.template_item.seat');
	var l = sarray.length;
	for (var i = 0; i < l; i++) {
		console.log(i)
		console.log(sarray[i]);
		aeseatMap.select_seat('#' + $(sarray[i]).attr('id'))
	}
}
function assign_seatnames_programatically(rownum){
    var row_seats = [
        [[5,19]],
        [[1,4],[5,19],[20,23]],
        [[1,4],[5,19],[20,23]],
        [[1,4],[5,19],[20,23]],
        [[1,4],[5,19],[20,23]],
        [[1,4],[5,19],[20,23]],
        [[1,5],[6,20],[21,25]],
        [[1,7],[8,22],[23,29]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],        
        [[1,8],[9,12],[24,31]],
        [[1,8],[24,31]]     
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
            seat.seatDomEl.data('status', 'available');
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
var seat_rows_names=["A","B", "C", "D", "E", "F","G","H","J","K","L","M","N","O","P"];
var loop_row_index=0;
$('#svg_seat_map').find('g.seatgroup').each(function(i,e){    
    if(loop_row_index>14) return false;    
    var block=false;
    if(loop_row_index==0){
        $('.dropdown-colorselector li a').eq(0).click();
        $('#ticket_type_select')[0].selectedIndex=3;
    }else if(loop_row_index>0 && loop_row_index<=4){
        $('.dropdown-colorselector li a').eq(1).click();
        $('#ticket_type_select')[0].selectedIndex=2;
    }else if(loop_row_index>4 && loop_row_index<=8){
        $('.dropdown-colorselector li a').eq(2).click();
        $('#ticket_type_select')[0].selectedIndex=1;
    }else if(loop_row_index>8 && loop_row_index<=12){
        $('.dropdown-colorselector li a').eq(4).click();
        $('#ticket_type_select')[0].selectedIndex=0;
    }else if(loop_row_index>12 && loop_row_index<=14){
        $('.dropdown-colorselector li a').eq(6).click();
        $('#ticket_type_select')[0].selectedIndex=4;
    }else{
        block="false";
    }
    assign_row_seats($(e).attr("id"),seat_rows_names[i],loop_row_index);
    loop_row_index++;
})


<g xmlns="http://www.w3.org/2000/svg" id="stage-page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="matrix(1,0,0,1,0,130)"> <g id="STAGE" transform="translate(190.000000,-80)"> <path d="M219,1 L219,127.237745 C392.047061,144.412557 568.331834,153 747.854418,153 C927.376176,153 1103.42467,144.412636 1276,127.237989 L1276,1 L219,1 Z" id="Rectangle" stroke="#979797" stroke-width="2"></path> <text id="S-T-A-G-E" font-family="Roboto" font-size="60" font-weight="nomral" letter-spacing="2.181818" fill="#000000"> <tspan x="615.162288" y="100">S T A G E</tspan> </text> </g> </g>