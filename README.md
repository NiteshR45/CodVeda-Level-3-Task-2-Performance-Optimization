# CodVeda Level 3 Task 2 - Performance Optimization

## Project Overview

This project is a GitHub User Search application developed as part of CodVeda Level 3 Task 2.

The objective of this task was to improve the performance of the web application and evaluate it using Google Lighthouse.

## Features

- Search GitHub users
- Fetch user information using GitHub REST API
- Display GitHub profile information
- Responsive user interface
- Optimized CSS
- Lighthouse performance testing

## Technologies Used

- HTML5
- CSS3
- JavaScript
- GitHub REST API
- Git
- GitHub
- Google Lighthouse

## Performance Optimization

The application was tested using Google Lighthouse before and after optimization.

### Before Optimization

| Metric | Result |
|---|---:|
| Performance | 100/100 |
| First Contentful Paint | 1.0 s |
| Largest Contentful Paint | 1.0 s |
| Total Blocking Time | 0 ms |
| Cumulative Layout Shift | 0 |
| Speed Index | 1.0 s |

### After Optimization

| Metric | Result |
|---|---:|
| Performance | 100/100 |
| First Contentful Paint | 0.8 s |
| Largest Contentful Paint | 1.0 s |
| Total Blocking Time | 0 ms |
| Cumulative Layout Shift | 0 |
| Speed Index | 0.8 s |

### Optimization Changes

- Added a minified CSS file (`style.min.css`).
- Updated the HTML file to load the minified stylesheet.
- Reviewed Lighthouse performance insights.
- Tested the application again after optimization.
- FCP improved from 1.0 s to 0.8 s.
- Speed Index improved from 1.0 s to 0.8 s.

## Project Structure

```text
REST-API/
├── index.html
├── script.js
├── style.css
├── style.min.css
└── README.md