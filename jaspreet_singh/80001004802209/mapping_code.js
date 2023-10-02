assigning algo

- get total seat number of a seatgroup
- for index,element in seatgroup.seat
	neweindex = (total + 1) - index
	new label = elements[newindex].label


document.getElementById('svg_seat_map').querySelectorAll('g.seatgroup')[0].querySelectorAll('g.template_item.seat')[0].querySelector('text').textContent

seatgroups.forEach((e,i) => {
	seats = e.querySelectorAll('g.template_item.seat')
  total = e.querySelectorAll('g.template_item.seat').length
	seats.forEach((seat,index) => {
		newindex = (total + 1) - index
		console.log(newindex)
		# oldlabel = seat.querySelector('text').textContent
		# newlabel = seats[newindex].querySelector('text').textContent
		# console.log(`${oldlabel} -> ${newlabel}`)
})
})


seatgroups = document.getElementById('svg_seat_map').querySelectorAll('g.seatgroup')
seatgroups.forEach((e,i) => {
	seats = e.querySelectorAll('g.template_item.seat')
  total = e.querySelectorAll('g.template_item.seat').length
	seats.forEach((seat,index) => {
		newindex = (total + 1) - (index+1)		
		oldlabel = seat.querySelector('text').textContent
		newlabel = seats[newindex -1].querySelector('text').textContent
		console.log(`${oldlabel} -> ${newlabel}`)
})
})

seatgroups = document.getElementById('svg_seat_map').querySelectorAll('g.seatgroup')
mappings = {}
seatgroups.forEach((e,i) => {
	rowname = e.querySelector('text').textContent
	mappings[rowname] = []
	seats = e.querySelectorAll('g.template_item.seat')
  total = e.querySelectorAll('g.template_item.seat').length
	seats.forEach((seat,index) => {
		newindex = (total + 1) - (index+1)		
		oldlabel = seat.querySelector('text').textContent
		newlabel = seats[newindex -1].querySelector('text').textContent
		mappings[rowname].push(`${rowname}${oldlabel} -> ${rowname}${newlabel}`)
})
})
	