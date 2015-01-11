"use strict";
//Will be replaced by a real dbClass. Just simulating!
function Database(){
	
	this.teams = [
    {
    	id:				1,
    	clubId:			1,
    	isActive:		true,
    	name:			"P09",
    	gender:			"male",
    	adminId:		1,				
    	secondAdminId:	2,
    }
	];
	
	
	this.SportClubs = [
	{
		isactive:		true,
	    name:			"Klubb # 1",
	    clubId:			1,
	    adminId:		1
	},
	{
		isactive: 		false,
		name:			"Club Inactivated",
		clubId:			2,
		adminId:		"",
	},
	{
		isactive: 		true,
		name:			"Club Activated",
		clubId:			3,
		adminId:		"",
	}
	];
	
	this.users = [
	{
		id:			1,
		clubId:		1,
		fname: 		"Erik",
		lname: 		"Eriksson",
		passWord: 	2222,
		eMail:		"erik@eriksson.se",
		isAdmin:	true,
	},
	{
		id:			2,
		clubId:		1,
		fname: 		"Anders",
		lname: 		"Andersson",
		passWord: 	1111,
		eMail:  	"erik@eriksson.se",
		isAdmin:	false,
	}
	];
	
	//Array populated with object created from constructor teamMembers()
	this.teamMembers = [
	{
	    id:			1,
	    clubId:		1,
	    fname: 		"Karl",
	    lname:		"Karlsson",
	    isActive:	true,
	}
	];
	
};
		
Database.prototype.getUsers = function(){
	return this.users;
};

Database.prototype.addEmail = function(eMail){
	var tools = new Tools();
	if(tools.validateEmail(eMail))
	{
		this.users.push({id: this.users.length + 1, eMail: eMail});
		return true;
	}
	else
	{
		return false;
	}	
};

Database.prototype.getClubs = function(){
	return this.SportClubs;
};

Database.prototype.getTeams = function(){
	return this.teams;
};

Database.prototype.addUser = function(fname, passWord){
	this.users.push({id: this.users.length + 1, fname: fname, passWord: passWord});
};

Database.prototype.popTeamMembers = function(teamMember){
	this.teamMembers.push(teamMember);
};

Database.prototype.getTeamMembers = function(){
	return this.teamMembers;
};

Database.prototype.setTeamAdmin = function(teamId, id){
	this.getTeams().forEach(function(team){
		if(teamId === team.id)
		{
			team.adminId = id;
		}
	});
};

Database.prototype.inactivateTeamMember = function(teamMember){
	if(confirm("Really?"))
	{
		teamMember.isActive = false;
		console.warn("You have deactivated," +teamMember);
		console.info(teamMember);
	}
	else
	{
		alert("Team Member was nos deactivated!");
	}
};

Database.prototype.setTeamSecondAdmin = function(teamId,userId){
	var team = this.getTeamById(teamId);
	team[0].secondAdminId = userId;
};


//function that inactivate club by id
Database.prototype.inactivateClub = function(id){
	this.getClubs().forEach(function(club){
		if(id === club.clubId)
		{
			club.isactive = false;
		}
	});
};

//userId is new admin of Club
Database.prototype.setClubAdmin = function(clubId, userId){
	this.getClubs().forEach(function(club){
		if(clubId === club.clubId)
		{
			club.adminId = userId;
		}
	});
};

//Get a team by it's id
Database.prototype.getTeamById = function(teamId){
	var teams = this.getTeams();
	var team = teams.filter(function(team){
		return teamId === team.id;
	});
	return team;
};

Database.prototype.inactivateTeam = function(teamObj){
	console.log(typeof teamObj);
	teamObj[0].isActive = false;
};
	
	
