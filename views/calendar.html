//This file is for the calendar
window.onload = function()
{
	var d = new Date();
	var name_month = ['January','February','March','April','May','June','July','August','September','October','November','December'];		
	var month = d.getMonth(); //current month
	var year = d.getFullYear(); //current year
	var today = d.getDate(); //current day
	var first_date = name_month[month] + " " + 1 + " " + year;
	var tmp = new Date(first_date).toDateString();
	var day_first = tmp.substring(0, 3); //mon
	var name_day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	var day_num = name_day.indexOf(day_first);
	var days = new Date(year, month+1, 0).getDate(); //total days in current month
	var calendar = get_calendar(day_num, days, d, today);
	document.getElementById("calendar-month-year").innerHTML = (name_month[month]+" "+year).bold();
	document.getElementById("calendar-dates").appendChild(calendar);
}

function get_calendar(day_num, days, d, today)
{
	var table = document.createElement('table');
	table.setAttribute('id', 'cal_table');
	table.setAttribute('name', d);
	var tr = document.createElement('tr');

	for(var c=0; c<=6; c++)
	{
		var td = document.createElement('td');

		td.innerHTML= "SMTWTFS"[c].bold();
		tr.appendChild(td);
	}
	table.appendChild(tr);

	tr = document.createElement('tr');
	var c;
	for(c=0; c<=6; c++)
	{
		if(c == day_num)
		{
			break;
		}
		var td = document.createElement('td');
		td.innerHTML = "";

		tr.appendChild(td);
	}

	var count = 1;
	for(; c<=6; c++)
	{
		var td = document.createElement('td');
		td.setAttribute('onclick', 'cell_date()');
		td.innerHTML = count;
		if(today == count)
			{
				td.style.backgroundColor = 'aqua';
				td.style.color = 'teal';
			}
		count++;
		tr.appendChild(td);
	}
	table.appendChild(tr);

	for(var r=3; 4<=6; r++)
	{
		tr = document.createElement('tr');
		for( var c=0; c<=6; c++)
		{
			if(count > days)
			{
				table.appendChild(tr);
				return table;
			}
			var td = document.createElement('td');
			td.setAttribute('onclick', 'cell_date()');
			td.innerHTML = count;
			if(today == count)
			{
				td.style.backgroundColor = 'aqua';
				td.style.color = 'teal';
			}
			count++;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}

cell_date = function()
{
  	confirm("No assignments are due on this date");
}

prev_month = function()
{
	var d = new Date();
	var cur_month = d.getMonth(); //current month
	var cur_year = d.getFullYear(); //current year
	var cur_today = d.getDate(); //current day

	var calendar = document.getElementById("cal_table");
	var dstr = calendar.getAttribute("name");
	var d = new Date(dstr);
	document.getElementById("calendar-dates").removeChild(calendar);
	d.setMonth(d.getMonth()-1);
	var name_month = ['January','February','March','April','May','June','July','August','September','October','November','December'];		
	var month = d.getMonth(); //current month
	var year = d.getFullYear(); //current year
	var today = d.getDate(); //current day
	var first_date = name_month[month] + " " + 1 + " " + year;
	var tmp = new Date(first_date).toDateString();
	var day_first = tmp.substring(0, 3); //mon
	var name_day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	var day_num = name_day.indexOf(day_first);

	if(cur_month != month || cur_year != year || cur_today != today)
	{
		cur_today = 0;
	}

	var days = new Date(year, month+1, 0).getDate(); //total days in current month
	calendar = get_calendar(day_num, days, d, cur_today);
	document.getElementById("calendar-month-year").innerHTML = (name_month[month]+" "+year).bold();
	document.getElementById("calendar-dates").appendChild(calendar);
}

next_month = function()
{
	var d = new Date();
	var cur_month = d.getMonth(); //current month
	var cur_year = d.getFullYear(); //current year
	var cur_today = d.getDate(); //current day

	var calendar = document.getElementById("cal_table");
	var dstr = calendar.getAttribute("name");
	var d = new Date(dstr);
	document.getElementById("calendar-dates").removeChild(calendar);
	d.setMonth(d.getMonth()+1);
	var name_month = ['January','February','March','April','May','June','July','August','September','October','November','December'];		
	var month = d.getMonth(); //current month
	var year = d.getFullYear(); //current year
	var today = d.getDate(); //current day
	var first_date = name_month[month] + " " + 1 + " " + year;
	var tmp = new Date(first_date).toDateString();
	var day_first = tmp.substring(0, 3); //mon
	var name_day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	var day_num = name_day.indexOf(day_first);

	if(cur_month != month || cur_year != year || cur_today != today)
	{
		cur_today = 0;
	}

	var days = new Date(year, month+1, 0).getDate(); //total days in current month
	calendar = get_calendar(day_num, days, d, cur_today);
	document.getElementById("calendar-month-year").innerHTML = (name_month[month]+" "+year).bold();
	document.getElementById("calendar-dates").appendChild(calendar);
}


//please note that the 'base' of this code came from the youtube chanel yusuf who gave a basic example on how
//to create a calendar. We expanded on it to make it interactive, added color, and changed the look
//this note is also in the calendar page as well
