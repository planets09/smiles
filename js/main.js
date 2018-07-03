var dateandTimes = [	
	{
		day: 'Monday',
		time: '9:00 a.m. - 6:00 p.m.'
	},
	{
		day: 'Tuesday',
		time: 'CLOSED!'
	},
	{
		day: 'Wednesday',
		time: '9:30 a.m. - 4:30 p.m.'
	},
	{
		day: 'Thursday',
		time: '10:00 a.m. - 4:30 p.m.'
	},
	{
		day: 'Friday',
		time: '9:00 a.m. - 6:00 p.m.'
	},
	{
		day: 'Saturday',
		time: 'CLOSED!'
	},
	{
		day: 'Sunday',
		time: 'CLOSED!'
	}
];

//Get the relevant buttons from the DOM andplace them in a Node-array.
const buttons = document.querySelectorAll('BUTTON');
//Attach an event listener to each button that will display the
//correct text when clicked.
buttons.forEach((button, index) => {
//the addEventListener is looking for click and performs the anomynous function:
	button.addEventListener('click', () => {
		document.getElementById("hours").textContent = dateandTimes[index].time;
//Either it will be CLOSED or an empty string that represents open hours.
		const open = ( dateandTimes[index].time === 'CLOSED!' ) ? '' : 'OPEN NOW';
		document.getElementById("store").textContent = open;
	});
});

const callbutton = document.querySelector('#btn2');

callbutton.addEventListener('click', () => {
	callbutton.textContent = "510-666-0999";
});




