[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/nashcheez/responsive-tabs">
    <img src="images/tabs-icon.png" alt="tabs-logo" width="80" height="80" />
  </a>

  <h3 align="center">Responsive Tabs</h3>

  <p align="center">
    Responsive Tabs is a plugin that helps switch between tabs on desktop and a select drop down on a mobile/tablet.
    <br />
    <br />
    <a href="https://nashcheez.github.io/responsive-tabs/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/nashcheez/responsive-tabs/issues">Report Bug</a>
    ·
    <a href="https://github.com/nashcheez/responsive-tabs/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [About the Project](#about-the-project)
    -   [Key Features](#key-features)
    -   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Installation](#installation)
-   [Usage](#usage)
    -   [API](#api)
-   [Roadmap](#roadmap)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

-   Desktop view

<a href="https://github.com/nashcheez/responsive-tabs">
  <img src="https://user-images.githubusercontent.com/2913308/62655109-f7726d00-b97e-11e9-8378-ca0c7b58d654.png" alt="tabs-logo" max-width="600px" />
</a>

-   Mobile view

<a href="https://github.com/nashcheez/responsive-tabs">
  <img src="https://user-images.githubusercontent.com/2913308/62655167-0f49f100-b97f-11e9-965d-41f0006b71c6.png" alt="tabs-logo" max-width="600px" />
</a>

Tabs are user interface elements that allow you to navigate between multiple documents in a single window. Regular implementations don't support responsiveness and tabs don't look polished on a mobile device. This plugin helps you to resolve that.

### Key Features

-   The Responsive Tabs application implements tabs with mutually exclusive content. Only one tab is active at a given time and the content corresponding to the active tab is only visible. Eg: http://liquidslider.com/

-   On mobile the tabs transform into a `<select>` drop down. The drop-down retains all the states from the desktop tabs and vice versa (e.g. The active tab becomes the selected option).

*   The app has an object oriented architecture implementing encapsulation and all the global variables & functions are attributed to a single `tabSwitcher` object in `generateTabs.js`.

-   The application developed here is fully responsive & the mobile view starts when the screen size is less than 769px.

### Built With

The application has been developed using HTML, CSS, JavaScript and jQuery.

For more information about jQuery, please visit the official docs.

-   [JQuery](https://jquery.com)

<!-- GETTING STARTED -->

## Getting Started

To run the application, just open `index.html` in your browser.

### Installation

1. Clone the repo

```sh
git clone https://github.com/nashcheez/responsive-tabs.git
```

2. Open `index.html`
    <!-- USAGE EXAMPLES -->

## Usage

The code for the tabs plugin is implemented in `tabSwitcher.js` & `tabSwitcher.css`. To configure the tabs, please look into the demo Ihat is available in `generateTabs.js` & `generateTabs.css`. Entry point for the application is in `index.html` at the root.

### API

A `tabConfiguration` option has been provided to configure the tabs. It includes the following API:

| API                     | Description                                            |
| ----------------------- | ------------------------------------------------------ |
| tabName                 | defines all the tab names in an array                  |
| commonClass             | state a common class that is to be applied to all tabs |
| tabID                   | unique ids of the tabs                                 |
| tabClickRequestFunction | click callback function for all tabs                   |
| customID                | main tab container that is defined in the HTML         |
| defaultTab              | defines the tab that needs to be default on page load  |

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/nashcheez/responsive-tabs/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

[@nashcheez](https://twitter.com/nashcheez) - nashcheez@gmail.com

Project Link: [https://github.com/nashcheez/responsive-tabs](https://github.com/nashcheez/responsive-tabs)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

-   [Game Of Thrones Posters For Pop Culture Characters](https://9gag.com/gag/aEzgVj9)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/nashcheez/responsive-tabs.svg?style=flat-square
[contributors-url]: https://github.com/nashcheez/responsive-tabs/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nashcheez/responsive-tabs.svg?style=flat-square
[forks-url]: https://github.com/nashcheez/responsive-tabs/network/members
[stars-shield]: https://img.shields.io/github/stars/nashcheez/responsive-tabs.svg?style=flat-square
[stars-url]: https://github.com/nashcheez/responsive-tabs/stargazers
[issues-shield]: https://img.shields.io/github/issues/nashcheez/responsive-tabs.svg?style=flat-square
[issues-url]: https://github.com/nashcheez/responsive-tabs/issues
[license-shield]: https://img.shields.io/github/license/nashcheez/responsive-tabs.svg?style=flat-square
[license-url]: https://github.com/nashcheez/responsive-tabs/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-blue.svg?style=flat-square&logo=linkedin&colorB=0077b5
[linkedin-url]: https://linkedin.com/in/nashcheez
