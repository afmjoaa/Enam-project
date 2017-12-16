var menu = document.getElementById('icon_menu');
var navigation = document.getElementById('nav');
var sideNavCover = document.getElementById('sidenav-cover');

menu.addEventListener('click', openDrawer);

sideNavCover.addEventListener('click', closeDrawer);

function closeDrawer() {
    navigation.style.width = "0";
	$(".side-nav-cover").hide();
}

function openDrawer() {
    navigation.style.width = "300px";
	$(".side-nav-cover").show();

}


