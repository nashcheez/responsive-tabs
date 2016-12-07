# TabSwitcher
A responsive plugin to switch between tabs which changes to a visually aesthetic select drop down box on a mobile/tab.

**Attaching screenshots:**

*Desktop view:

![tabSwitcher desktop screenshot](https://cloud.githubusercontent.com/assets/2913308/20968317/eed7e5a0-bca9-11e6-8ca0-c5554bbb69a1.png)


*Mobile view:

![tabSwitcher mobile screenshot](https://cloud.githubusercontent.com/assets/2913308/20968316/ee019568-bca9-11e6-9d64-e8f40b878b28.png)


**Few features/implementations in the code:**

* The TabSwitcher application implements Tabs with separate mutually exclusive content. Only one tab is active at a time and therefore only the content related to the active tab is visible at any given time. Eg: http://liquidslider.com/

* On mobile the tabs become <select> drop down. The drop-down carries all the states from the tabs and vice versa. Eg: The active tab becomes the selected option, etc.

* The code for the tabs framework that is implemented is in the files TabSwitcher.js & TabSwitcher.css. To configure the tabs I have created another set of files which include GenerateTabs.js, GenerateTabs.css and RenderTabs.html.

* I have tried to maintain an object oriented architecture & implemented encapsulation, where all the global variables & functions are attributed to a single object in the GenerateTabs.js file.

* An option has been provided to configure the default tab. I have created specific properties to the configurable tab object wherein all the properties are properly documented as to what they do (including the success function that gets called on the click of a tab etc.). Also the selected tab retains its state on changing screen sizes.

*The application developed here is fully responsive. There's different layout for both desktop and mobile view. The mobile view resolution starts when the screen size is less than 769px as is the norm.

* I have provided comments wherever possible for a better understanding of the code.

* The application was developed on  macOS Sierra using Sublime Text 3 & Google Chrome. Also attached is a Visual Studio solution file for the Windows faithful. :)
