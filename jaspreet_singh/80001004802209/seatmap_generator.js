:A7*-__:A14*-__:A7*
:B7*-__:B14*-__:B7*
:C7*-__:C14*-__:C7*
:D7*-__:D14*-__:D7*
:E7*-__:E14*-__:E7*
:F7*-__:F14*-__:F7*
:G8*__:G15*__:G8*
:H8*__:H15*__:H8*
:I8*__:I15*__:I8*
:J8*__:J15*__:J8*
:K8*__:K15*__:K8*
:L8*__:L15*__:L8*
:M8*__:M3*________:M3*__:M8*
:N8*__:N3*________:N3*__:N8*


:O6*__:O15*__:O6*
:P8*__:P15*__:P8*
:Q8*__:Q15*__:Q8*
:R8*__:R15*__:R8*
:S8*__:S15*__:S8*
:T8*__:T15*__:T8*
:U8*__:U15*__:U8*
:V8*__:V15*__:V8*
:W8*__:W15*__:W8*
:X8*__:X15*__:X8*
:Y8*__:Y15*__:Y8*
:Z8*__:Z15*__:Z8*

// var select_row_seats=function(rowid) {
// 	var sarray = $('#'+rowid).find('.template_item.seat');
// 	var l = sarray.length;
// 	for (var i = 0; i < l; i++) {
// 		console.log(i)
// 		console.log(sarray[i]);
// 		aeseatMap.select_seat('#' + $(sarray[i]).attr('id'))
// 	}
// }
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
        [[2,8],[9,22],[24,30]],
        [[2,8],[9,22],[24,30]],
        [[2,8],[9,22],[24,30]],
        [[2,8],[9,22],[24,30]],
        [[2,8],[9,22],[24,30]],
        [[2,8],[9,22],[24,30]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,11],[21,23],[24,31]],
        [[1,8],[9,11],[21,23],[24,31]],
        [[3,8],[9,23],[24,29]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
        [[1,8],[9,23],[24,31]],
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
var seat_rows_names=["A","B", "C", "D", "E", "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var loop_row_index=0;
$('#svg_seat_map').find('g.seatgroup').each(function(i,e){    
    if(loop_row_index>25) return false;    
    var block=false;
    if(loop_row_index<=2){
        $('.dropdown-colorselector li a').eq(0).click();
        $('#ticket_type_select')[0].selectedIndex=5;
    }else if(loop_row_index>2 && loop_row_index<=7){
        $('.dropdown-colorselector li a').eq(1).click();
        $('#ticket_type_select')[0].selectedIndex=4;
    }else if(loop_row_index>7 && loop_row_index<=13){
        $('.dropdown-colorselector li a').eq(2).click();
        $('#ticket_type_select')[0].selectedIndex=3;
    }else if(loop_row_index>13 && loop_row_index<=18){
        $('.dropdown-colorselector li a').eq(4).click();
        $('#ticket_type_select')[0].selectedIndex=2;
    }else if(loop_row_index>18 && loop_row_index<=23){
        $('.dropdown-colorselector li a').eq(3).click();
        $('#ticket_type_select')[0].selectedIndex=1;
    }else if(loop_row_index>23 && loop_row_index<=25){
        $('.dropdown-colorselector li a').eq(5).click();
        $('#ticket_type_select')[0].selectedIndex=0;
    }else{
        block="false";
    }
    assign_row_seats($(e).attr("id"),seat_rows_names[i],loop_row_index);
    loop_row_index++;
})


<g xmlns="http://www.w3.org/2000/svg" id="stage-page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="matrix(1,0,0,1,0,130)"> <g id="STAGE" transform="translate(190.000000,-80)"> <path d="M219,1 L219,127.237745 C392.047061,144.412557 568.331834,153 747.854418,153 C927.376176,153 1103.42467,144.412636 1276,127.237989 L1276,1 L219,1 Z" id="Rectangle" stroke="#979797" stroke-width="2"></path> <text id="S-T-A-G-E" font-family="Roboto" font-size="60" font-weight="nomral" letter-spacing="2.181818" fill="#000000"> <tspan x="615.162288" y="100">S T A G E</tspan> </text> </g> </g>