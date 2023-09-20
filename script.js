'use strict';

const burger = document.querySelector('.burger');
const side = document.querySelector('.side');
const cancel = document.querySelector('.cancel');
const home = document.querySelector('.a');
const homeSec = document.querySelector('.oneY');
const about = document.querySelector('.b');
const aboutSec = document.querySelector('.oneM');
const services = document.querySelector('.c');
const servSec = document.querySelector('.twoM');
const test = document.querySelector('.d');
const reviews = document.querySelector('.e');
const testSec = document.querySelector('.threeM');
const contact = document.querySelector('.f');
const contactSec = document.querySelector('.fourM');
const contBtn1 = document.querySelector('button');
const contBtn2 = document.querySelector('.contact2');
const logo = document.querySelector('.logo');

burger.addEventListener('click', ()=> {
	side.classList.remove('hidden');
	side.classList.add('clicked');
});

cancel.addEventListener('click', ()=> {
	side.classList.add('hidden');
});
home.addEventListener('click', ()=>{
	homeSec.scrollIntoView({ behavior: 'smooth' });
	if(side.classList.contains('clicked')){
		side.classList.add('hidden');
		side.classList.remove('clicked');
	}
});
about.addEventListener('click', ()=>{
	aboutSec.scrollIntoView({ behavior: 'smooth' });
	if(side.classList.contains('clicked')){
		side.classList.add('hidden');
		side.classList.remove('clicked');
	}
});
services.addEventListener('click', ()=>{
	servSec.scrollIntoView({ behavior: 'smooth' });
	if(side.classList.contains('clicked')){
		side.classList.add('hidden');
		side.classList.remove('clicked');
	}
});
test.addEventListener('click', ()=>{
	testSec.scrollIntoView({ behavior: 'smooth' });
	if(side.classList.contains('clicked')){
		side.classList.add('hidden');
		side.classList.remove('clicked');
	}
});
reviews.addEventListener('click', ()=>{
	testSec.scrollIntoView({ behavior: 'smooth' });
	if(side.classList.contains('clicked')){
		side.classList.add('hidden');
		side.classList.remove('clicked');
	}
});
contact.addEventListener('click', ()=>{
	contactSec.scrollIntoView({ behavior: 'smooth' });
	if(side.classList.contains('clicked')){
		side.classList.add('hidden');
		side.classList.remove('clicked');
	}
});
contBtn1.addEventListener('click', ()=>{
	contactSec.scrollIntoView({ behavior: 'smooth' });
	if(side.classList.contains('clicked')){
		side.classList.add('hidden');
		side.classList.remove('clicked');
	}
});
contBtn2.addEventListener('click', ()=>{
	contactSec.scrollIntoView({ behavior: 'smooth' });
	if(side.classList.contains('clicked')){
		side.classList.add('hidden');
		side.classList.remove('clicked');
	}
});
logo.addEventListener('click', ()=> {
	logo.classList.toggle('logoClicked');
});
