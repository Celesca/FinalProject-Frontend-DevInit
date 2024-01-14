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

![Era Planner Prototype](https://github.com/Celesca/Celesca/blob/main/Project%20Picture/EraPlannerPrototype.PNG)

Using Figma to design the prototype of this web application to follows and adjust them.
I have covered about Light and Dark Mode



Here is the link you can check in Figma design framework.

[EraPlanner Prototype](https://www.figma.com/file/r9VDViLPuaDHZ6vuGNi9hX/Personal-Manager?type=design&node-id=0%3A1&mode=dev)




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

## Manual Testing and Usability Test
  - Recording the testing and checked all the test cases.
  - Video : [FinalProject_DevInit](...)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Linkedin - [Sawit Koseeyaumporn](https://www.linkedin.com/in/sawit-koseeyaumporn-418941256/)

Project Link: [EraPlanner](https://github.com/Celesca/FinalProject-Frontend-DevInit)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
