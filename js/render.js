


const path = require('path')
const url = require('url')
const Insurl = url.format({
  pathname: path.join(__dirname,'../insert.html'),
  protocol: 'file:',
  slashes: true
})

const enav = new (require('electron-navigation'))({ 
  showAddTabButton: false ,
  newTabParams: [Insurl]
})


enav.newTab("https://www.steg.com.tn/fr/index.html" )
    
//setTimeout() is just used to show the effect.
setTimeout("enav.changeTab('cool wallpapers', 'srch')", 2000)
setTimeout("enav.back('srch')", 5000)

// open a local file, and use a custom icon
enav.newTab(Insurl, { 
  title: 'Insertion' ,
  id: "test",
  icon: 'default',
  close: true,
  readonlyUrl: true,
  contextMenu: true           
})

// create an unclosable tab that you can reference later with the id.
enav.newTab('youtube.com', {
  title: 'Watch Videos',
  icon: 'default',
  close: false,
  id: 'watchStuff'
})

setTimeout('enav.changeTab( "https://www.youtube.com/watch?v=3_s8-OIkhOc" , "watchStuff" );', 5000)





  