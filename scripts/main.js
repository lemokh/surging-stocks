$(document).ready(()=>{
	const demoIcons = ["fa-facebook","fa-apple","fa-windows","fa-google","fa-twitter","fa-yahoo","fa-btc","fa-yelp"];
	const urlDemo = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22FB%20AAPL%20MSFT%20GOOG%20TWTR%20YHOO%20GBTC%20YELP%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
 	
	// $.getJSON(urlDemo,(item) => {
	// 	const results = item.query.results.quote;
		
	// 	results.map((symbObj, i) => {
	// 		let str = symbObj.Name.toLowerCase();
	// 		let cS = str.charAt(0).toUpperCase() + str.slice(1); 
	// 		$('#stk' + i).children('.company-name').html(cS.substr(0, cS.indexOf(' ')).split(/[,!]\s*/));
	// 		let strSy = symbObj.Change.charAt(0);
	// 		let strFl = symbObj.Change.slice(1);
	// 		let numFl = +strFl;
	// 		let resFl = numFl.toFixed(2);
	// 		$('#stk' + i).children('.change').html(strSy + resFl + '%');
	// 		$('#stk' + i).children('.fa').addClass(demoIcons[i]);
	// 	});
	// });

	// $("#btn-search").click(() => {
	// 	const symbolName = $('#search-field').val();
		
	// 	const url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22' + symbolName + '%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
		
	// 	$.getJSON(url,(item) => {
	// 		const symbObj = item.query.results.quote;
	// 		for(let prop in symbObj){
	// 			if(symbObj.hasOwnProperty(prop) && !symbObj[prop]){
	// 					symbObj[prop] = "No Data";
	// 			}
	// 		}			
	// 		$('#mainSymbol').html(symbObj.Symbol.toUpperCase());
	// 		$('#companyName').html(symbObj.Name);
	// 		$('#AverageDailyVolume').html(symbObj.AverageDailyVolume);
	// 		$('#Volume').html(symbObj.Volume);
	// 		$('#PercentChange').html(symbObj.PercentChange);
	// 	});
	// });
});	