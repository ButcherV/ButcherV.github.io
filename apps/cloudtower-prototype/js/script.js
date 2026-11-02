var waypoint = new Waypoint({
  element: document.getElementById('submenu'),
  handler: function(direction) {
      if (direction == "down") {
          document.getElementsByTagName("body")[0].classList.add("scrolled");
      } else if (direction == "up") {
          document.getElementsByTagName("body")[0].classList.remove("scrolled");
      }
  },
  context: document.getElementById('main-page'),
  offset: '-22'
})

function expandMainNav() {
    if (document.getElementById("main-nav").classList.contains('expanded') == false) {
        document.getElementById("main-nav").classList.add("expanded");
    } else {
        document.getElementById("main-nav").classList.remove("expanded");
    }
    closeSearchBox();
}

function focusSearchBox() {
    if (document.getElementById("search-box").classList.contains('focused') == false) {
        document.getElementById("search-box").classList.add("focused");
        document.getElementById("search-box").classList.remove("retained");
        document.getElementById("search-field").focus();
    }
    hideTitleScroll();
    closeMainNav();
}

function closeFloat() {
    closeMainNav();
    closeSearchBox();
    closeNewResourceMenu();
}

function closeMainNav() {
    document.getElementById("main-nav").classList.remove("expanded");
}

function closeSearchBox() {
    if (document.getElementById("search-field").value != '') {
        document.getElementById("search-box").classList.remove("focused");
        document.getElementById("search-box").classList.add("retained");
        document.getElementById("token").classList.remove("focused");
        hideTitleScroll();
    } else {
        document.getElementById("search-box").classList.remove("retained");
        document.getElementById("search-box").classList.remove("focused");
        document.getElementById("token").classList.remove("focused");
        document.getElementById("token").classList.remove("hide");
        recoverTitleScroll();
    }
}

function retainSearchBox() {
    if (document.getElementById("search-field").value != '') {
        document.getElementById("search-box").classList.remove("focused");
        document.getElementById("search-box").classList.add("retained");
        document.getElementById("token").classList.remove("focused");
        document.getElementById("search-field").blur();
        hideTitleScroll();
    }
}

function hideTitleScroll() {
    document.getElementById("flexCenter").classList.add("in-search-mode");
    document.getElementById("flexRight").classList.add("in-search-mode");
}

function recoverTitleScroll() {
    document.getElementById("flexCenter").classList.remove("in-search-mode");
    document.getElementById("flexRight").classList.remove("in-search-mode");
}

function deleteTag(event) {
    var keyCode = event.which || event.keyCode;
    if (keyCode == 8 || keyCode == 46) {
        if (document.getElementById("token").classList.contains('focused') == false && document.getElementById("search-field").value == '') {
            document.getElementById("token").classList.add("focused");
        } else if (document.getElementById("search-field").value == '') {
            document.getElementById("token").classList.add("hide");
        }
    }
    if (keyCode == 13) {
        retainSearchBox();
    }
    if (keyCode != 8 && keyCode != 46 && keyCode != 13) {
        if (document.getElementById("search-field").value == '') {
            document.getElementById("token").classList.remove("focused");
        }
    }
}

function openSearch(event) {
    var keyCode = event.which || event.keyCode;
    if (keyCode == 83) {
        focusSearchBox();
    }
}

function activatedNewResourceMenu() {
    document.getElementById("new-resource-menu").classList.add("activated");
}

function closeNewResourceMenu() {
    document.getElementById("new-resource-menu").classList.remove("activated");
}

function toggleNewResourceMenu() {
    if (document.getElementById("new-resource-menu").classList.contains('activated') == false) {
        activatedNewResourceMenu();
    } else {
        closeNewResourceMenu();
    }
}

const mainNav = document.getElementById('main-nav');
mainNav.addEventListener('click', (e) => {
  e.stopPropagation();
});

const searchBox = document.getElementById('search-box');
searchBox.addEventListener('click', (e) => {
  e.stopPropagation();
});

const newResourceMenu = document.getElementById('new-resource-menu');
newResourceMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});

function openImmersiveDialogBox() {
    closeNewResourceMenu();
    document.getElementById("dim").classList.remove("hide");
    document.getElementById("interface").classList.add("sink");
    document.getElementById("modal-immersive-dialog").classList.remove("hide");
}

function closeImmersiveDialogBox() {
    document.getElementById("dim").classList.add("hide");
    document.getElementById("interface").classList.remove("sink");
    document.getElementById("modal-immersive-dialog").classList.add("hide");
}
