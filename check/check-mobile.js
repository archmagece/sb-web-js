/**
 * @author archmagece
 * @since 2017-01-25 09:41
 */

window._isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
function responsiveCall(desktopCall, mobileCall){
	if (window._isMobile) {
		if(mobileCall){
			mobileCall()
		}
	}else{
		if(desktopCall){
			desktopCall()
		}
	}
}
function checkUserAgent(agentName){
	if(new RegExp(agentName, "i").test(navigator.userAgent)){
		return true
	}else{
		return false
	}
}