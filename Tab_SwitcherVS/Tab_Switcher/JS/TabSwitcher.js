
var constants = {
    imageReferenceURL: "/Images/"
}, common = {
    bIsMobile: false
};

// configuration for tabs
function tabConfiguration() {
    this.tabName = []; // define all tab names in an array
    this.commonClass = ""; // define a common class to be applied to all tabs
    this.tabID = []; // define ids of the tabs
    this.tabClickRequestFunction = ""; // define click success function for all tabs
    this.customID = ""; // state main tab container that is defined in the HTML
    this.defaultTab = ""; // define the tab that needs to be default
}

// function to create Tabs
// @oConfigTab: Contains configuration object of variable tabConfiguration
function createTabs(oConfigTab) {
    var oShowSelectedTab = document.createElement("div"),
        oTabContainer = document.createElement("div"),
        oTabInput = document.createElement("input"),
        oTabList = document.createElement("ul"),
        oCollapseExpandimage = document.createElement("img"),
        iTabIndex = (!!oConfigTab.defaultTab) ? oConfigTab.tabName.indexOf(oConfigTab.defaultTab) : 0;

    oTabContainer.id = oConfigTab.customID + "_Container";
    oTabInput.setAttribute("class", "tabInput");
    oTabInput.setAttribute("type", "text");
    oTabInput.setAttribute("readonly", "readonly");
    oShowSelectedTab.appendChild(oTabInput);

    oCollapseExpandimage.setAttribute("src", constants.imageReferenceURL + "dropdown_arrow.png");
    oCollapseExpandimage.setAttribute("class", "tabDropdownImage");
    oShowSelectedTab.setAttribute("class", "tabInputBox");
    oShowSelectedTab.appendChild(oCollapseExpandimage);
    $(oShowSelectedTab).unbind("click").click(function (event) {
        toggleDropDownForTopNav(oConfigTab.customID, event);
    });
    oTabContainer.appendChild(oShowSelectedTab);
    oTabContainer.className = "tabsMainContainer";
    oTabList.className = "tabListContainer toggleTabsExpanded";

    for (var iCounter = 0; iCounter < oConfigTab.tabName.length; iCounter++) {
        var oTab = document.createElement("li");
        oTab.setAttribute("id", oConfigTab.tabID[iCounter]);

        var oSvgImage = document.createElement("img");
        oSvgImage.setAttribute("src", constants.imageReferenceURL + "tab-notch.png");
        oSvgImage.setAttribute("id", oConfigTab.tabID[iCounter] + "_Notch");

        oTab.setAttribute("class", "tabList");
        oSvgImage.setAttribute("class", "tabNotch");

        $(oTab).addClass(oConfigTab.commonClass);
        oTab.innerHTML = oConfigTab.tabName[iCounter];
        oTab.title = oConfigTab.tabName[iCounter];
        oTab.appendChild(oSvgImage);
        oTabList.appendChild(oTab);
    }
    oTabContainer.appendChild(oTabList);
    document.getElementById(oConfigTab.customID).appendChild(oTabContainer);
    $("." + oConfigTab.commonClass).click(function (event) {
        toggleDropDownForTopNav(oConfigTab.customID, event);
        selectTab(oConfigTab.customID, $(this).attr("id"), oConfigTab.commonClass, $(this).text());
        oConfigTab.tabClickRequestFunction($(this).attr("id"));
    });

    $("#" + oConfigTab.tabID[iTabIndex]).trigger("click");
}

// changes class to implement drop-down in tabs from mobile view
function toggleDropDownForTopNav(parentID, event) {
    var oListContainer = $("#" + parentID + " .tabListContainer");
    if (oListContainer.hasClass("toggleTabsCollapsed")) {
        oListContainer.removeClass("toggleTabsCollapsed").addClass("toggleTabsExpanded");
    } else {
        oListContainer.removeClass("toggleTabsExpanded").addClass("toggleTabsCollapsed");
    }
    event.stopPropagation();
}

// to select a new tab on click
// @sSelectedTabID: Tab id of the clicked tab
// @sTabGroupClass: Class of previously selected tab
function selectTab(parentID, sSelectedTabId, sTabGroupClass, sTabName) {
    $("." + sTabGroupClass).removeClass("selectedTab");
    $("#" + sSelectedTabId).addClass("selectedTab");
    $("#" + parentID + " .tabInput").val(sTabName);
    $("#" + parentID + " .tabNotch").hide();
    $("#" + sSelectedTabId + "_Notch").show();
}

// to check for tab & mobile view (<769px)
$(window).resize(function () {
    var bCurrentMobile = isScreenMobile();
    if (bCurrentMobile !== common.bIsMobile) {
        common.bIsMobile = bCurrentMobile;

        // In case the drop down is expanded, collapse it
        if (bCurrentMobile) {
            $(".tabsMainContainer ul").removeClass("toggleTabsExpanded").addClass("toggleTabsCollapsed");
        }
    }
});

// checks whether the device is mobile or not (in this case screen size <769px is considered mobile)
function isScreenMobile() {
    var bCurrentMobile = common.bIsMobile, iWidth;
    if (!!window.matchMedia) {
        if (window.matchMedia("screen and (max-width: 769px)").matches) {
            bCurrentMobile = true;
        } else {
            bCurrentMobile = false;
        }
    } else {
        iWidth = getWindowWidth();

        if (iWidth <= 769 && !common.bIsMobile) {
            bCurrentMobile = true;
        } else if (iWidth > 769 && common.bIsMobile) {
            bCurrentMobile = false;
        }
    }
    return bCurrentMobile;
}

// method to get width of browser including scrollbar if rendered
function getWindowWidth() {
    var sUserAgent = navigator.userAgent.toLowerCase(), iWidth;

    // Handling for Safari (Safari's navigator.userAgent does not contain the word 'Chrome', however Chrome's navigator does contain 'Safari'
    if (sUserAgent.indexOf("windows") >= 0 && sUserAgent.indexOf("safari") >= 0 && sUserAgent.indexOf("chrome") === -1) {
        iWidth = $(window).width();
    } else {
        // Using 'clientWidth' property for older browser versions
        iWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
    return iWidth;
}

// to collapse tab drop-down in mobile view on click of anywhere else in document
$(document).on("click", function () {
    $(".tabListContainer").removeClass("toggleTabsExpanded").addClass("toggleTabsCollapsed");
});

