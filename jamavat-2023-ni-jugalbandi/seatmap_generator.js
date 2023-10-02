:A11*______:A9*______:A11*:A
:B11*_____:B10*______:B11*:B
:C12*_____:C10*______:C12*:C
:D12*_____:D10*______:D12*:D
:E12*_____:E10*______:E12*:E
:F12*_____:F10*______:F12*:F
:G12*____:G11*______:G12*:G
:H12*____:H11*______:H12*:H
:J12*____:J11*______:J12*:J
:K12*____:K11*______:K12*:K
:L13*_-_-_:L12*_____:L13*:L
:M13*_-_-_:M12*_____:M13*:M
:N13*_-_-_:N12*_____:N13*:N
:P13*_-_-_:P12*_____:P13*:P
:Q13*___:Q13*_____:Q13*:Q
:R13*___:R13*_____:R13*:R
:S13*___:S13*_____:S13*:S
:T14*___:T13*_____:T14*:T
:U14*___:U13*_____:U14*:U
:V14*_--_:V14*____:V14*:V
:W14*__:W15*____:W14*:W
:X14*_____-__-______________:X14*:X
:Y14*_____-__-______________:Y14*:Y
:Z15*_____-__-______________:Z15*:Z


var seat_rows_names=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','VV','W','X','Y','Z','AA','BB','CC','DD','EE','FF','GG','HH','II','JJ','KK','LL'];
var loop_row_index=0;
$('#svg_seat_map').find('g.seatgroup').each(function(i,e){        
    var block=false;
    if(loop_row_index<2){
        block=true;
    }else if(loop_row_index>1 && loop_row_index<=8){
        $('.dropdown-colorselector li a').eq(3).click();
        $('#ticket_type_select')[0].selectedIndex=0;
    }else{
        $('.dropdown-colorselector li a').eq(4).click();
        $('#ticket_type_select')[0].selectedIndex=1;
    }
    
    if(block==true){
        block_row_seats($(e).attr("id"),seat_rows_names[i]);
    }else if(block==false){
        assign_row_seats($(e).attr("id"),seat_rows_names[i]);
    }else{
        console.log("Ignore the row..");
    }
    loop_row_index++;
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

<g xmlns="http://www.w3.org/2000/svg" id="stage-page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="matrix(1,0,0,1,80,130)"> <g id="STAGE" transform="translate(190.000000,-80)"> <path d="M219,1 L219,127.237745 C392.047061,144.412557 568.331834,153 747.854418,153 C927.376176,153 1103.42467,144.412636 1276,127.237989 L1276,1 L219,1 Z" id="Rectangle" stroke="#979797" stroke-width="2"></path> <text id="S-T-A-G-E" font-family="Roboto" font-size="60" font-weight="nomral" letter-spacing="2.181818" fill="#000000"> <tspan x="615.162288" y="100">S T A G E</tspan> </text> </g> </g>