"use strict";
/*	***************************************
 * 	Testfixtur:	Database
 *	TestSuite:	testDatabase
 *	Version:	2.0 
 *  ***************************************/
	
	testDatabase = TestCase("testDatabase");
	
//testID 2.1
testDatabase.prototype.testDatabaseId2dot1 = function(){
	var db = new Database();
	assertTrue("Failed initalize new object of Database", Boolean(db));
	db = null;
};
//testID 2.2
testDatabase.prototype.testDatabaseId2dot2 = function(){
	var db = new Database();
	db.addEmail("test@test.se");
	assertEquals("testID: 2.2 A valid \"test@test.se\" failed to add but is valid", 
				"test@test.se", db.users[db.users.length -1].eMail);
	db = null;
};
//testID 2.3 
testDatabase.prototype.testDatabaseId2dot3 = function(){	 
	var db = new Database(); 
	assertFalse("testID 2.3: Fail! 1234 is not a valid eMail.", db.addEmail(1234));
	db = null;
};
//testID 2.4 
testDatabase.prototype.testDatabaseId2dot4 = function(){	 
	var db = new Database(); 
	assertFalse("testId 2.4.1: Failed because an invalid adress was added", db.addEmail(1234));
	assertTrue("testId 2.4.2: Failed to add eMail \"test@test.se\"", db.addEmail("test@test.se"));
	db = null;
};
//testID 2.5
testDatabase.prototype.testDatabaseId2dot5 = function(){
	var db = new Database();
	db.setClubAdmin(999, "asdf");
	clubs = db.getClubs();
	clubs.forEach(function(club){
		if(club.clubId === 999){
			jstestdriver.console.log(typeof club.clubId);
			//if(typeof club.adminId === number)
			//{
				//fail("testId 2.5 Endast typen number accepteras som parameter!");
			//}
		}
	});
};
//testID 2.6
testDatabase.prototype.testDatabaseId2dot6 = function(){
	var db = new Database();
	var preLengthOfUsersArray = db.getUsers().length;
	db.addUser("test", 9999);
	var postLengthOfUsersArray = db.getUsers().length;
	if(postLengthOfUsersArray - preLengthOfUsersArray !== 1)
	{
		fail("testId 2.6: Failed to add a user in users array in Database");
	}
	db = null;
};
//testID 2.7
testDatabase.prototype.testDatabaseId2dot7 = function(){
	var db = new Database();
	var teams = db.getTeams();
	if(!teams.isArray)
	{
		fail("testId 2.7: Failed to get an array of teams");
	}
	db = null;
};
//testID 2.8
testDatabase.prototype.testDatabaseId2dot8 = function(){
	var db = new Database();
	if(!db.getTeamById)
	{
		fail("testId 2.8: Method getTeamById() has not been implemented yet!");
	};
	db = null;
};
//testID 2.9
testDatabase.prototype.testDatabaseId2dot9 = function(){
	var db = new Database();
	if(!db.inactivateTeam)
	{
		fail("testId 2.9: Method inactivateTeam has not been implemented yet!");
	};
	db = null;
};
//testID 2.11
testDatabase.prototype.testDatabaseId2dot11 = function(){
	var db = new Database();
	if(!db.setTeamSecondAdmin)
	{
		fail("testId 2.11: Methos setTeamSecondAdmin has not been implemented yet!");
	}
	db = null;
};
//testID 2.12
testDatabase.prototype.testDatabaseId2dot12 = function(){
	var db = new Database();
	if(!db.popTeamMembers)
	{
		fail("testId 2.12: Method popTeamMembers has not been implemented yet!");
	}
	db = null;
};
//testID 2.13
testDatabase.prototype.testDatabaseId2dot13 = function(){
	var db = new Database();
	if(!db.getTeamMembers)
	{
		fail("testId 2.13: Method popTeamMembers has not been implemented yet!");
	}
	db = null;
};
//testID 2.14
testDatabase.prototype.testDatabase2dot14 = function(){
	var db = new Database();
	if(!db.inactivateTeamMember(teamMember))
	{
		fail("testId 2.14: Method iniactivateTeamMember has not yet been implemented!");
	};
};





//Available asserts for jsTestDriver
//fail([msg])
//assertTrue([msg], actual)
//assertFalse([msg], actual)
//assertEquals([msg], expected, actual)
//assertSame([msg], expected, actual)
//assertNotSame([msg], expected, actual)
//assertNull([msg], actual)
//assertNotNull([msg], actual)
		

