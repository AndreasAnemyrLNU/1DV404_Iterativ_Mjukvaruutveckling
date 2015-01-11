function SportClub(clubName, clubAdminId){
	
	this.setClubAdminId = function(_clubAdminId){
		clubAdminId = _clubAdminId;
	};
	
	this.getClubAdminId = function(){
		return clubAdminId;
	};
	
	this.setName = function(_clubName){
		clubName = _clubName;
	};
	
	this.getName = function(){ 
		return name;
	};
};