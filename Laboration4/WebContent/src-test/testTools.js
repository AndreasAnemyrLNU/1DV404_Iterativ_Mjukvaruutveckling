"use strict";
/*	***************************************
 * 	Testfixtur:	Tools
 *	TestSuite:	testTools
 *	Version:	3.0 
 *  ***************************************/
	 
	testTools = TestCase("testTools");
	
//testID 3.1
testTools.prototype.testToolsId3dot1 = function(){
	var tools = new Tools();
	jstestdriver.console.log(typeof tools);
	if(!tools){
		fail("testId 3.1 Failed to initalize object from Tools");
	}
};
//testID 3.2
testTools.prototype.testToolsId3dot2 = function(){
	var tools = new Tools();
	assertTrue("testId 3.2: ",tools.validateEmail("test@test.se"));
};
//testID 3.3
testTools.prototype.testToolsId3dot3 = function(){
	var tools = new Tools();
	assertFalse("testId 3.3: ",tools.validateEmail(243564));
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
		

