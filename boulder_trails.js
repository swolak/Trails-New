function GoogleMap(){
 
	this.initialize = function(){
		var map = showMap();
	}
	 
	var showMap = function(){
		var longmont		= 'http://data.opencolorado.org/storage/f/2013-04-05T222408/BikeRoutes.kmz';
		var boulder_city	= 'http://data.opencolorado.org/en/storage/f/2013-06-01T235943/KML_zip_20130601045314.kml';
		var boulder_county	= 'http://www.bouldercounty.org/gov/data/GISDLData/RegionalTrails.kmz';
		var louisville		= 'http://derecho.math.uwm.edu/misc/LouisvilleTrails.kmz';
		
		var boulder = new google.maps.LatLng(40.09173,-105.185852);
		
		var mapOptions = {
			zoom: 12,
			center: boulder,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		 
		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		
		var louisvilleLayer = new google.maps.KmlLayer({
    		url: louisville
		});
		louisvilleLayer.setMap(map);
		
		var boulderCityLayer = new google.maps.KmlLayer({
	    	url: boulder_city
		});
		boulderCityLayer.setMap(map);
	  
		var boulderCountyLayer = new google.maps.KmlLayer({
	    	url: boulder_county
		});
		boulderCountyLayer.setMap(map);
		var longmontLayer = new google.maps.KmlLayer({
	    	url: longmont
	  	});
		longmontLayer.setMap(map);
	
		return map;
	}
}
