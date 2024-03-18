# Table of Contents

1. [Chart4Blind](#Chart4Blind)
2. [Features](#features)
3. [Screenshots](#screenshots)
4. [Project Setup-Guide](#project-setup-guide)
5. [Usage as developer](#usage-as-developer)
6. [Distribute](#distribute)
7. [Running Tests](#running-tests)

# Chart4Blind
The code for the ACM IUI 2024 conference paper "Chart4Blind: An Intelligent Interface for Chart Accessibility Conversion" [Chart4Blind - Arxiv](https://arxiv.org/abs/2403.06693)
In a world driven by data visualization, ensuring the inclusive accessibility of charts for Blind and Visually Impaired (BVI) individuals
remains a significant challenge. Charts are usually presented as raster graphics without textual and visual metadata needed for an
equivalent exploration experience for BVI people. Additionally, converting these charts into accessible formats requires considerable
effort from sighted individuals. Digitizing charts with metadata extraction is just one aspect of the issue; transforming it into accessible
modalities, such as tactile graphics, presents another difficulty. To address these disparities, we propose Chart4Blind, an intelligent
user interface that converts bitmap image representations of line charts into universally accessible formats. Chart4Blind achieves
this transformation by generating Scalable Vector Graphics (SVG), Comma-Separated Values (CSV), and alternative text exports, all
comply with established accessibility standards. Through interviews and a formal user study, we demonstrate that even inexperienced
sighted users can make charts accessible in an average of 4 minutes using Chart4Blind, achieving a System Usability Scale rating of
90%. In comparison to existing approaches, Chart4Blind provides a comprehensive solution, generating end-to-end accessible SVGs
suitable for assistive technologies such as embossed prints (papers and laser cut), 2D tactile displays, and screen readers.


## Features

- A user is provided tools to convert an input image of a Line Chart
- Manual Input of Data Points on Chart
- Automatic Input of Data Points on Chart (With additional backend)
- SVG and CSV output
- OCR tool for Labels, Axis and descriptions entry
- Guided tour
- snackbar for feedback
- SVG and CSV stored on server as training data if consent given (With additional backend)

## Screenshots
<img src="./public/1.png" width="700" alt="Editor with manual tool" />
<img src="./public/2.png" width="700" alt="Editor in SVG preview" />
<img src="./public/3.png" width="700" alt="Interactive Tutorial"/>
<img src="./public/4.png" width="700" alt="AI tool"/>
<img src="./public/10.png" width="500" alt="Printable, accessible output 2" />
<img src="./public/11.png" width="500" alt="Accessible output"/>

## Project Setup-Guide
IMPORTANT: For automatic detection to work, a LineFormer equivalent backend must be running that accepts images [LineFormer](https://github.com/TheJaeLal/LineFormer). 
See axiosRequests.ts in the api folder. Alter this interface, and possibly the proxy in package.json, to provide the required data to the tool.

Clone this project into a directory of choice:
Download and install **node** and **npm** through their website [NodeJS](https://nodejs.org/en/download/)
or other means. 
Then, run the command
```bash
  npm install
```
from the project root to install dependencies.

## Usage as Developer
To run this project locally (dev move), run the command:
```bash
  npm start
```
This will open the browser with the running dev instance.

## Distribute
To build this project run 
```bash
  npm run build
```

## Running Tests
To run all tests, run the following command
```bash
  npm run test
```
This creates a coverage directory with an icov-report. 
View this report by opening the index.html file created in the coverage directory.
