
var deg2rad = function(deg){
  return deg * (Math.PI/180)
}

var getGeoAddresses = function(){
	return [{lat: 19.7932155, lon:73.17453854}, {lat: 13.63366955 , lon:75.50841796}]
}


var calculateDistanceFrom = function(lat, lon){
	
	var geoAddresses = getGeoAddresses();
	var R = 6371; // Radius of the earth in km
	var distance = [];
	
	for (var i=0; i< geoAddresses.length; i++){
		
		var latitude = geoAddresses[i].lat;
		var longitude = geoAddresses[i].lon;
		
		var dLat = deg2rad(latitude - lat);
		var dLon = deg2rad(longitude - lon);
		
 		var a = 
		    Math.sin(dLat/2) * Math.sin(dLat/2) +
		    Math.cos(deg2rad(lat)) * Math.cos(deg2rad(latitude)) * 
		    Math.sin(dLon/2) * Math.sin(dLon/2)
		    ;
			
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		
		var d = R * c; // Distance in Km
		
		distance.push( d );
	}
	
	return distance;
	
}
	


console.log(calculateDistanceFrom(37.09024,-95.71289100000001));


Latitude: 20°40′53″N   20.68144088
Longitude: 82°18′31″E   82.30854292
Distance: 917.4693 km  Bearing: 73.422°
Latitude: 17°32′42″N   17.54510776
Longitude: 77°30′49″E   77.51365587
Distance: 401.679 km  Bearing: 105.097°



