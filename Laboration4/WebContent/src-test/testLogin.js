"use strict";
/*	***************************************
 * 	Testfixtur:	Login
 *	TestSuite:	testLogin
 *	Version:	1.0 
 *  ***************************************/
	
	testLogin = TestCase("testLogin");
	
//testID 1.1
testLogin.prototype.testLoginId1dot1 = function(){
	var db = new Database();
	init.users = db.getUsers();
	init.loginUser("Erik", 1111);
	assertNotNull("testID 1.1: Wrong Password. Check init.loginUser. User should not be logged in!", init.currentUser);
	//Reset variables to init state befor next test in this suite
	db = null;
	init.currentUser = null;	
};
//testID 1.2
testLogin.prototype.testLoginId1dot2 = function(){	
	var db = new Database();
	init.users = db.getUsers();
	init.loginUser("Erik", 1222);
	assertSame("testID 1.2: User should be logged in. Test tests user: Erik & password: 2222. It's listed inte database!", "Erik", init.currentUser.fname);
	db = null;
	init.currentUser = null;
};
//testID 1.3 
testLogin.prototype.testLoginId1dot3 = function(){	 
	var db = new Database();
	init.users = db.getUsers();
	init.loginUser("");	
	assertNull("testID 1.3: Becaus params not is filled in when calling method init.currentUser should be Null!", init.currentUser);
	db = null;
	init.currentUser = null;

};
//testID 1.4 
testLogin.prototype.testLoginId1dot4 = function(){	 
	db = new Database();
	init.users = db.getUsers();
	init.loginUser("nisse", 2222);	
	assertNull("testID 1.4 User should not be logged in is not valid!!", init.currentUser);
	db = null;
	init.currentUser = null;
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
		

