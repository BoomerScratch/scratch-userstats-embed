function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
} // https://stackoverflow.com/a/901144
function start(ajaxResponse,messageCountJSON,otherData) {
var messageCount = messageCountJSON.count;
var userID = ajaxResponse.id;
var getUsername = ajaxResponse.username;
var isScratchTeamMember = ajaxResponse.scratchteam;
var joinDate = ajaxResponse.history.joined;
var pfpSRC = "https://uploads.scratch.mit.edu/users/avatars/" + userID + ".png";
var aboutMe = ajaxResponse.profile.bio;
var whatImWorkingOn = ajaxResponse.profile.status;
var Country = ajaxResponse.profile.country;
if (otherData.featured_project_data == null) {var featuredProjectData = null} else {
var featuredProjectLabelName = otherData.featured_project_label_name;
var featuredProjectData = otherData.featured_project_data;
var featuredProjectThumbnailURL = featuredProjectData.thumbnail_url;
var featuredProjectProjectID = featuredProjectData.id;
var featuredProjectTitle = featuredProjectData.title;
};
document.getElementById('status').parentNode.removeChild(document.getElementById('status'));
document.getElementById('status-image').parentNode.removeChild(document.getElementById('status-image'));
var elem = document.createElement('a');
elem.href = "https://scratch.mit.edu/users/" + getUsername;
elem.class = "user-icon";
elem.target = "_blank";
document.getElementsByTagName('body')[0].appendChild(elem);
var elem = document.createElement('img');
elem.width = 80;
elem.height = 80;
elem.src = pfpSRC;
document.getElementsByClassName('user-icon')[0].appendChild(elem);
var elem = document.createElement('h1');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = getUsername;
if (isScratchTeamMember) {
var elem = document.createElement('h2');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = "Scratch Team Member";
};
if (featuredProjectData == null == false) {
var elem = document.createElement('h3');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = featuredProjectLabelName;
var elem = document.createElement('a');
elem.href = "https://scratch.mit.edu/projects/" + featuredProjectProjectID;
elem.target = "_blank";
elem.class = "featuredProject";
document.getElementsByTagName('body')[0].appendChild(elem);
var elem = document.createElement('img');
elem.class = "autoResize";
elem.src = featuredProjectThumbnailURL;
document.getElementsByClassName('featuredProject')[0].appendChild(elem);
var elem = document.createElement('h4');
document.getElementsByClassName('featuredProject')[0].appendChild(elem);
elem.innerHTML = featuredProjectTitle;
};
var elem = document.createElement('h2');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = messageCount;
var elem = document.createElement('h3');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = "Unread messages";
var elem = document.createElement('h2');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = userID;
var elem = document.createElement('h3');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = "User ID";
var elem = document.createElement('h2');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = joinDate;
var elem = document.createElement('h3');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = "Date & time joined";
var elem = document.createElement('h2');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = "========About me========";
var elem = document.createElement('h3');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerHTML = aboutMe;
var elem = document.createElement('h2');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = "===================";
var elem = document.createElement('h2');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = "====What i'm working on====";
var elem = document.createElement('h3');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerHTML = whatImWorkingOn;
var elem = document.createElement('h2');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = "===================";
var elem = document.createElement('h2');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = Country;
var elem = document.createElement('h3');
document.getElementsByTagName('body')[0].appendChild(elem);
elem.innerText = "Country";
var elem = document.createElement('a');
elem.href = "https://boomerscratch.github.io/scratch-userstats-embed";
elem.target = "_blank";
elem.class = "BottomText1";
document.getElementsByTagName('body')[0].appendChild(elem);
var elem = document.createElement('h5');
document.getElementsByClassName('BottomText1')[0].appendChild(elem);
elem.innerText = "Scratch user embed by Boomer001";
var elem = document.createElement('a');
elem.href = "https://github.com/boomerscratch/scratch-userstats-embed";
elem.target = "_blank";
elem.class = "BottomText2";
document.getElementsByTagName('body')[0].appendChild(elem);
var elem = document.createElement('h5');
document.getElementsByClassName('BottomText2')[0].appendChild(elem);
elem.innerText = "Github";
}
function errorMessage(ajaxResponse){
document.getElementById('status').innerText = "Oops! Something went wrong! Status: " + ajaxResponse.status;
var elem = document.querySelector('img');
elem.src = "https://en.scratch-wiki.info/w/images/archive/20130716144246%21404_Image.png";
elem.removeAttribute('width');
elem.removeAttribute('height');
};
if (getParameterByName("user") == null) window.location.href = "https://boomerscratch.github.io/scratch-userstats-embed/embed?user=Boomer001"
var user = getParameterByName("user");
var getajaxresponse = $.ajax({type:"GET",url:"https://cors-anywhere.herokuapp.com/https://api.scratch.mit.edu/users/" + user,dataType:"json"});
getajaxresponse.done(function(){if (getajaxresponse.responseJSON.message == undefined) {
getajaxresponse = getajaxresponse.responseJSON
var getmessagecountjson = $.ajax({type:"GET",url:"https://cors-anywhere.herokuapp.com/https://api.scratch.mit.edu/users/" + user + "/messages/count",dataType:"json"});
getmessagecountjson.done(function(){
getmessagecountjson = getmessagecountjson.responseJSON
var getotherdata = $.ajax({type:"GET",url:"https://cors-anywhere.herokuapp.com/https://scratch.mit.edu/site-api/users/all/" + user,dataType:"json"});
getotherdata.done(function(){
getotherdata = getotherdata.responseJSON
start(getajaxresponse,getmessagecountjson,getotherdata)
})
})} else {errorMessage(getajaxresponse)}});
