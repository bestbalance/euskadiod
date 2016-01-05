/**
 * @author alex
 * http://stackoverflow.com/questions/18739436/how-to-create-a-link-for-all-mobile-devices-that-opens-google-maps-with-a-route
 */
var ua = navigator.userAgent.toLowerCase(),
    plat = navigator.platform,
    protocol = '',
    a,
    href;

$.browser.device = ua.match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera/i) ? ua.match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera/i)[0] : false;

if ($.browser.device) {
	switch ($.browser.device) {
		case 'iphone':
		case 'ipad':
		case 'ipod':
			function iOSversion(){
				if (/iP(hone|od|ad)/.test(navigator.platform)) {
					// supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
					var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
					return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
				}
			}
			
			var ver = iOSversion() || [0];
			
			if (ver[0] >= 6) {
				protocol = 'maps://';
			}
			else {
				protocol = 'http://maps.google.com/maps';
			}
			break;
			
		case 'android':
		default:
			protocol = 'http://maps.google.com/maps';
			break;
	}
} else{
	protocol = 'http://maps.google.com/maps';
}
