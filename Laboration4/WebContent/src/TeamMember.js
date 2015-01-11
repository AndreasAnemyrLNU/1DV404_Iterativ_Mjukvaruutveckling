"use strict";

function TeamMember(_id, _fname, _lname, _clubId, _teamId){
	this.id = _id;
	this.fname = _fname;
	this.lname = _lname;
	this.clubId = _clubId;
	this.teamId = _teamId;
	this.isActive = true;
};

TeamMember.prototype.renderForm = function(){
	document.getElementById("fname").setAttribute(value, this.fname);
};