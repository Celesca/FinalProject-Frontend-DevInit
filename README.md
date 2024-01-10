<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <a href="https://github.com/Celesca/Celesca/blob/main/Project%20Picture/EraPlannerLogo.png">
    <img src="https://github.com/Celesca/Celesca/blob/main/Project%20Picture/EraPlannerLogo.PNG" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Era Planner</h3>

  <p align="center">
    Make your life easier by plan your life in this awesome web application!
    <br />
    <br />
    <a href="https://era-planner.vercel.app/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#design-prototype">Design Prototype</a></li>
    <li><a href="#test-report">Test Report</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
![Era Planner](https://github.com/Celesca/Celesca/blob/main/Project%20Picture/EraPlanner.PNG)

Era Planner is the Front-end project that have concept of managing daily life.
There are features to manage your events such as calendar, daily journal and to-do list.
The project was created using Next.js, Bootstrap and FullCalendar.js.
Unit Testing with Jest.js

There are several app features you can use:
* Calendar feature :
<br>Organize and plan the event in the calendar. They will alert you at the Home page 3 days before the event will occur.
* Daily Journal feature :
<br>Take a note from the story or lecture and review it in the future. Using the local storage to load and manage the journal data.
* To-do List feature:
<br>Forgot to do something you need to? Note some lists and do it to clear. Using the local storage to load and manage the to-do list data. 
* Alert feature:
<br>When you finally enter the home page. If you have some events that will going to occur in 3 days. It will start to alert.
<br>When you clicked the important button such as Delete Button, It will also generated the alert before the action.
* Light/Dark Mode feature:
<br>There is a theme switcher at the navbar. When toggle the button, the theme will be switch to its color theme.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Next][Next.js]][Next-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

First you need to setting up your locally folder.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is how to list things you need to use the software and how to install them via npm.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Following the guide from below through your terminal._

1. Clone the repo
   ```sh
   git clone https://github.com/Celesca/FinalProject-Frontend-DevInit
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Move to folder directory
   ```sh
   cd FinalProject-Frontend-DevInit
   ```
4. Run the project
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- UX/UI Design -->

## Design Prototype

Using Figma to design the prototype of this web application to follows and adjust them.
I have covered about Light and Dark Mode

Here is the link you can check in Figma design framework.




<!-- Test Report -->
## Test Report

### 1. Page Load and Rendering

#### Test Case 1:
- **Description:** Successfully loads and displays accurate information on the home page.

#### Test Case 2:
- **Description:** Successfully loads and displays the current calendar on the calendar page.

#### Test Case 3:
- **Description:** Loads and displays the daily journal page, presenting a form for writing entries.

### 2. User Interaction

#### Test Case 4:
- **Description:** Clicking on a To-Do List item opens the edit page for that item.

#### Test Case 5:
- **Description:** Adding a new activity in the calendar works correctly.

#### Test Case 6:
- **Description:** The To-Do search function within the application operates as expected.

### 3. Responsive Design

#### Test Case 7:
- **Description:** The home page displays correctly on mobile screen sizes.

#### Test Case 8:
- **Description:** The calendar page adapts appropriately to tablet screen sizes.

#### Test Case 9:
- **Description:** The daily journal page shows suitable rendering on large screens.

### 4. Specific Functional Testing

#### Test Case 10:
- **Description:** Successfully saves data in the daily journal form, and retrieval of that data works as intended.

#### Test Case 11:
- **Description:** Creation and deletion of items in the To-Do List function as expected.

#### Test Case 12:
- **Description:** Theme changes and user-specific settings are applied and saved correctly.

### 5. App Functionality

#### Test Case 13:
- **Description:** The functionality of notifications or reminders is tested and verified.


## Automate Testing using Jest.js
  - Automate Testing will cover "Page Load and Rendering" section in test cases. Because Jest.js can used for testing the rendering page.
  - You can run the following code to perform the unit testing in this projects.

```sh
npm test
```

## Manual Testing by using different persons.
  - Doing usability testing by choose 3 different people to asked them about how do you feel, dislike or like it?





<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Linkedin - [@sawit-koseeyaumporn]((https://www.linkedin.com/in/sawit-koseeyaumporn-418941256/)) - Sawit Koseeyaumporn

Project Link: [https://github.com/your_username/repo_name](https://github.com/Celesca/FinalProject-Frontend-DevInit)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
