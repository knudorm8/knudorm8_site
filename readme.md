# Welcome to knudorm8_site GitHub page!

This is a repository of the student council of the eighth dormitory of the Taras Shevchenko National University of Kyiv.

# Contents

<!-- TOC -->
* [Welcome to knudorm8_site GitHub page!](#welcome-to-knudorm8site-github-page)
* [Contents](#contents)
* [Development rules](#development-rules)
* [Project structure](#project-structure)
  * [Abbreviations](#abbreviations)
  * [articles/](#articles)
  * [css/](#css)
  * [img/](#img)
  * [js/](#js)
* [Branch structure](#branch-structure)
* [Rules on writing CSS](#rules-on-writing-css)
  * [Methodology](#methodology)
  * [CSS class structure](#css-class-structure)
  * [Mobile-first approach](#mobile-first-approach)
  * [Responsive design](#responsive-design)
<!-- TOC -->

# Development rules

1. Update your project from GitHub before working
2. Use your own branches
3. Follow GitHub [commit best practices](https://gist.github.com/luismts/495d982e8c5b1a0ced4a57cf3d93cf60)
4. Push as least commits at the same time as possible
5. Always push your changes at the end of your work

# Project structure

## Abbreviations

| Abbreviation | Meaning              |
|--------------|----------------------|
| AVP          | article viewing page |
| LP           | landing page         |

## articles/

Contains articles to be displayed on the AVP (currently, index.html).

**Directory structure:**

| Directory        | Contents                                               |
|------------------|--------------------------------------------------------|
| general/         | general articles about dormitory                       |
| guides/          | guides on different aspects of living in the dormitory |
| self-governance/ | information about the self governance of the dormitory |

## css/

Contains CSS for the projects.

**Directory structure:**

| Directory | Contents                                                 |
|-----------|----------------------------------------------------------|
| AVP/      | css for AVP **AND** for the articles inside of articles/ |
| LP/       | css for LP                                               |

**Files that are not sorted into directories are used site-wide.**

## img/

Contains images used on the site.

| Directory | Contents                         |
|-----------|----------------------------------|
| AVP/      | images for articles in articles/ |
| LP/       | images for LP                    |

**Files that are not sorted into directories are used site-wide.**

## js/

Contains JavaScript for the site.

| File              | Purpose                                            |
|-------------------|----------------------------------------------------|
| articles.js       | Load articles depending on the hashtag of the link |
| contents-panel.js | Populate/show/hide contents panel on AVP           |
| panels.js         | Show/hide panels                                   |

# Branch structure

| Branch          | Purpose     | Additional info                                                                  |
|-----------------|-------------|----------------------------------------------------------------------------------|
| master          | deployment  | Used only for making the site available to public. No pushes are allowed here.   |
| develop         | development | Used for introducing small changes and merging branches before updating 'master' |
| navigationPanel | development | Used for development of the navigation panel for AVP                             |
| landing-page    | development | Used for development of LP                                                       |

# Rules on writing CSS

## Methodology

Our site uses [BEM CSS methodology](https://getbem.com/).

## CSS class structure

1. Size
2. Position
3. Display
4. Behaviour (e.g. user-select)
5. Content alignment (e.g. align-items, justify-content)
6. Content formatting (e.g. font-weight, background, border)
7. Effects (e.g. box-shadow)

## Mobile-first approach

We follow mobile-first approach, which means that we develop this site primarily for the mobile devices and then
adapt it to larger screens.

## Responsive design

We put media-queries in a single 'media.css' file in the according directory.

Currently, only two width points are used for responsive design:
- 789px
- 1366px
