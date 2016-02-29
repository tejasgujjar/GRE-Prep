$(document).ready(function()
{
	allEvents();
});
var wordArray;
if(localStorage["wordArrayLOC"] == undefined || localStorage["wordArrayLOC"] == null)
	{
		wordArray = ['affable','archaic','obselete','vapid','tarnish','burgeon','maverick','pertinent','forlorn','antagonistic','adverse','transmute','tyrannical','threadbare'];
	}
else
	{
		wordArray = JSON.parse(localStorage["wordArrayLOC"]);
	}
var globalCurrentWord = "";

function allEvents(){
	var the_height = ($(window).height() - $('#mainpage').find('[data-role="header"]').height() - 40);
	$('#mainpage').height($(window).height()).find('[data-role="content"]').height(the_height);
	
	$("#addMem_popupDialog").popup("close");
	$('#submitWord').unbind();
	$('#submitWord').bind('click',function(){
		addWord();
	});
	
	$('#contentDiv').unbind();
	$('#contentDiv').bind('click',function(){
		changeWord();
	});
}

function addWord(){
	var newWord = $('#newWord').val().toUpperCase();
	if(newWord != "")
	wordArray.push(newWord);
	localStorage["wordArrayLOC"] = JSON.stringify(wordArray);
	$("#addMem_popupDialog").popup("close");
	$('#newWord').val("");
}

function changeWord(){
	var randomNum = Math.floor(Math.random()*wordArray.length);
	var word = wordArray[randomNum];
	if(globalCurrentWord == word)
		{
			randomNum = Math.floor(Math.random() * (wordArray.length-1));
			word = wordArray[randomNum];
		}
	globalCurrentWord = word;
	$('#displayWord').text(globalCurrentWord.toUpperCase());
}