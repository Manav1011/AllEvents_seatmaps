:A8\8*0\_:A15*:A_8/8*:A
:B8\8*0\_:B16*:B_8/8*:B
:C8\9*0\_:C15*:C_8/9*:C
:D8\10*0\_:D16*:D_8/10*:D
:E8\11*0\_:E15*:E_8/11*:E
:F8\11*0\_:F16*:F_8/11*:F
:G8\12*0\_:G15*:G_8/12*:G
:H8\12*0\_:H16*:H_8/12*:H
:J8\13*0\_:J15*:J_8/13*:J
:K8\13*0\_:K16*:K_8/13*:K
:L8\13*0\_:L15*:L_8/13*:L
:M8\13*0\_:M16*:M_8/13*:M
:N8\13*0\_:N15*:N_8/13*:N
:O8\14*0\_:O16*:O_8/14*:O
:P8\14*0\_:P15*:P_8/14*:P
:R8\14*0\_:R16*:R_8/14*:R
:S8\14*0\_:S15*:S_8/14*:S
:T8\4*__________0\:T2*____________2*:T8/__________4*:T



:AA23\1*22\1*21\1*20\1*19\1*18\1*17\1*16\1*AA:15\1*14\1*13\1*12\1*11\1*10\1*9\1*8\1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*0\1*:AA0/1*1/1*2/1*3/1*4/1*5/1*6/1*7/1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*15/1*:AA16/1*17/1*18/1*19/1*20/1*21/1*22/1*23/1*:AA
:BB23\_22\1*21\1*20\1*19\1*18\1*17\1*16\1*BB:15\1*14\1*13\1*12\1*11\1*10\1*9\1*8\1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*0\1*:BB0/1*1/1*2/1*3/1*4/1*5/1*6/1*7/1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*15/1*:BB16/1*17/1*18/1*19/1*20/1*21/1*22/1*_23/:BB
:CC23\1*22\1*21\1*20\1*19\1*18\1*17\1*16\1*CC:15\1*14\1*13\1*12\1*11\1*10\1*9\1*8\1*7\1*6\1*5\1*4\1*3\1*2\1*1\1*0\1*:CC0/1*1/1*2/1*3/1*4/1*5/1*6/1*7/1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*15/1*:CC16/1*17/1*18/1*19/1*20/1*21/1*22/1*23/1*:CC


:DD17\1*16\1*15\1*14\1*:DD13\1*12\1*11\1*10\1*9\1*8\1*7\1*:DD6\1*5\1*4\1*3\1*2\1*1\1*0\1*0/1*1/1*2/1*3/1*4/1*5/1*6/1*:DD7/1*8/1*9/1*10/1*11/1*12/1*13/1*:DD14/1*15/1*16/1*17/1*:DD
:EE18\1*17\1*16\1*15\1*:EE14\1*13\1*12\1*11\1*10\1*9\1*8\1*7\1*:EE6\1*5\1*4\1*3\1*2\1*1\1*0\1*0/1*1/1*2/1*3/1*4/1*5/1*6/1*:EE7/1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*:EE15/1*16/1*17/1*18/1*:EE
:FF18\1*17\1*16\1*15\1*:FF14\1*13\1*12\1*11\1*10\1*9\1*8\1*7\1*:FF6\1*5\1*4\1*3\1*2\1*1\1*0\1*0/1*1/1*2/1*3/1*4/1*5/1*6/1*:FF7/1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*:FF15/1*16/1*17/1*18/1*:FF
:GG18\1*17\1*16\1*15\1*14\1*13\1*12\1*11\1*10\1*9\1*8\1*7\1*6\1*5\1*4\1*3\1*2\_1\_0\_0/_1/_2/_3/1*4/1*5/1*6/1*7/1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*15/1*16/1*17/1*18/1*:GG
:HH18\1*17\1*16\1*15\1*14\1*13\1*12\1*11\1*10\1*9\1*8\1*7\1*6\1*5\1*4\1*3\1*2\_1\_0\_0/_1/_2/_3/1*4/1*5/1*6/1*7/1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*15/1*16/1*17/1*18/1*:HH
:JJ18\1*17\1*16\1*15\1*14\1*13\1*12\1*11\1*10\1*9\1*8\1*7\1*6\1*5\1*4\1*3\1*2\_1\_0\_0/_1/_2/_3/1*4/1*5/1*6/1*7/1*8/1*9/1*10/1*11/1*12/1*13/1*14/1*15/1*16/1*17/1*18/1*:JJ


x - 500
width - 2400
height -    

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
        [[7,14],[15,29],[30,37]],
        [[7,14],[15,30],[31,38]],
        [[6,14],[15,29],[30,38]],
        [[5,14],[15,30],[31,40]],
        [[4,14],[15,29],[30,40]],
        [[4,14],[15,30],[31,41]],
        [[3,14],[15,29],[30,41]],
        [[3,14],[15,30],[31,42]],
        [[2,14],[15,29],[30,42]],
        [[2,14],[15,30],[31,43]],
        [[2,14],[15,29],[30,42]],
        [[2,14],[15,30],[31,43]],
        [[2,14],[15,29],[30,42]],
        [[1,14],[15,30],[31,44]],
        [[1,14],[15,29],[30,43]],
        [[1,14],[15,30],[31,44]],
        [[1,14],[15,29],[30,43]],
        [[1,4 ],[15,16 ],[29,30 ],[41,44]],
        [[1,8],[9,24],[25,40],[41,48]],
        [[2,8],[9,24],[25,40],[41,47]],
        [[1,8],[9,24],[25,40],[41,48]],
        [[1,4],[10,16],[17,30],[31,37],[43,46]],
        [[1,4],[9,16],[17,30],[31,38],[43,46]],
        [[1,4],[9,16],[17,30],[31,38],[43,46]],
        [[1,16] ,[31,46]],
        [[1,16] ,[31,46]],
        [[1,16] ,[31,46]]
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

var seat_rows_names=["A", "B", "C", "D", "E", "F", "G", "H","J", "K", "L", "M","N","O","P","R","S","T","AA","BB","CC","DD","EE","FF","GG","HH","JJ"];
var loop_row_index=0;
$('#svg_seat_map').find('g.seatgroup').each(function(i,e){
    console.log(loop_row_index);    
    if(loop_row_index>27) return false;
    var block=false;
    if(loop_row_index <=2){
        $('.dropdown-colorselector li a').eq(0).click();
        $('#ticket_type_select')[0].selectedIndex=0;
    }else if(loop_row_index >2 && loop_row_index <= 5){
        $('.dropdown-colorselector li a').eq(1).click();
        $('#ticket_type_select')[0].selectedIndex=1;
    }else if(loop_row_index >6 && loop_row_index <= 8){
        $('.dropdown-colorselector li a').eq(2).click();
        $('#ticket_type_select')[0].selectedIndex=2;
    }else if(loop_row_index >8 && loop_row_index <= 12){
        $('.dropdown-colorselector li a').eq(3).click();
        $('#ticket_type_select')[0].selectedIndex=3;
    }else if(loop_row_index >12 && loop_row_index <= 17){
        $('.dropdown-colorselector li a').eq(4).click();
        $('#ticket_type_select')[0].selectedIndex=4;
    }else if(loop_row_index >17 && loop_row_index <= 20){
        $('.dropdown-colorselector li a').eq(5).click();
        $('#ticket_type_select')[0].selectedIndex=5;
    }else if(loop_row_index >20 && loop_row_index <= 26){
        $('.dropdown-colorselector li a').eq(6).click();
        $('#ticket_type_select')[0].selectedIndex=6 ;
    }else{
        block="false";
    }
    assign_row_seats($(e).attr("id"),seat_rows_names[i],loop_row_index);
    loop_row_index++;
})


<g xmlns="http://www.w3.org/2000/svg" id="stage-page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="matrix(1,0,0,1,0,130)"> <g id="STAGE" transform="translate(190.000000,-80)"> <path d="M219,1 L219,127.237745 C392.047061,144.412557 568.331834,153 747.854418,153 C927.376176,153 1103.42467,144.412636 1276,127.237989 L1276,1 L219,1 Z" id="Rectangle" stroke="#979797" stroke-width="2"></path> <text id="S-T-A-G-E" font-family="Roboto" font-size="60" font-weight="nomral" letter-spacing="2.181818" fill="#000000"> <tspan x="615.162288" y="100">S T A G E</tspan> </text> </g> </g>