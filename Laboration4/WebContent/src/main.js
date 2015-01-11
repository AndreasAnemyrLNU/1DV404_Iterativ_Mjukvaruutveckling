"use strict";
var init = {
	
		currentUser: null,
		dbConnect: null,
		tools: null,
		users: null,	
			
		//********************************************************************
		run: function(userName, passWord){	
	
			
			
		this.addEvents();	
		this.tools = new Tools();
		this.dbConnect = new Database();

		this.users = this.dbConnect.getUsers();
			
		this.loginUser(userName, passWord);
		
		this.renderClubList();
										
		},
		//********************************************************************

		addEvents: function(){
			document.getElementById("addMail").addEventListener("click", this.newClubAdmin, false);
			document.getElementById("addTeamMember").addEventListener("click", this.addTeamMember, false);
			document.getElementById("inactivateTeamMember").addEventListener("click", this.inactivateTeamMember, false);
			document.getElementById("updateTeamMember").addEventListener("click", this.updateTeamMember, false);

		},
		
		updateTeamMember: function(){
			var id = prompt("Väl id på lagmedlem att uppdatera!");
			var teamMember = init.dbConnect.teamMembers[id];
			teamMember.renderForm();
		},
		
		inactivateTeamMember: function(){
			var id = prompt("id");
			var teamMembers = init.dbConnect.getTeamMembers();
			teamMembers = teamMembers.filter(function(teamMember){
				return teamMember.id === +id;
			
			});
		var teamMember = teamMembers[0];
		init.dbConnect.inactivateTeamMember(teamMember);
		},
		
		addTeamMember: function(){
			var id = prompt("id");
			var fname = prompt("fname");
			
			var teamMember = new TeamMember(id, fname);
			init.dbConnect.popTeamMembers(teamMember);
			console.log(init.dbConnect.getTeamMembers());
			
		},
		
		newClubAdmin: function(){		
			var email = prompt("Ange e-postadress");		
			if(init.tools.validateEmail(email)){
				init.dbConnect.addEmail(email);
			}
			else{
				alert("Ange en giltig e-postadress");
				init.newClubAdmin();
			};
					
		},
			
		loginUser: function(userName, passWord){		
			this.users.forEach(function(user){					
				if(user.fname === userName && user.passWord === +passWord)
				{
					init.currentUser = user;
				}
			});
		
		},
		
		renderClubList: function(){
			var clubs = this.dbConnect.getClubs();
			
			clubs.forEach(function(club){
				if(club.isactive)
				{
					var a = document.createElement("BUTTON");
					var clubName = club.name;		
					a.innerHTML += clubName + "</br>";
					document.body.appendChild(a);
				}
			});
			
		}
					
};
	
window.onload = function(){	
	while(init.currentUser === null){
		init.run(prompt("User(Erik)"), prompt("Pass(2222)"), true);
	}		
};


