// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// 間にviewを挟む
var view = Titanium.UI.createView();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	height: 32,
	width: 200,
	top: 80
});

var button1 = Titanium.UI.createButton({
	title: 'touch me',
	height: 32,
	width: 120,
	top:120
});

win1.add(label1);
win1.add(button1);

//win1.add(view);

button1.addEventListener('click', function(){
	Titanium.UI.createAlertDialog({
		title: 'タイトル',
		message: 'クリックされました'
	}).show();
});

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var imageView = Titanium.UI.createImageView ({
	image:	'./imageview.jpg'	
});

imageView.add(label2);
win2.add(imageView);


var win3 = Titanium.UI.createWindow({
	title: 'WebView Sample',
	backgroundColor: '#fff'
});

var tab3 = Titanium.UI.createTab({
	window: win3,
	title: 'WebView'
});

var webview1 = Titanium.UI.createWebView({
	url: 'http://www.nifty.com/'
});

win3.add(webview1);
//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);

// open tab group
tabGroup.open();
