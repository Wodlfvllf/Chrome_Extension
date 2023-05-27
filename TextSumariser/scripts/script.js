    

const API_URL = "http://localhost:8000/post_data";
// import { pageText } from './Text.js';
// const pdfjsLib = require('pdfjs-dist');

let pageText = "";

async function getSummarisedText(API_URL, payload)
{
    return await fetch(API_URL, {
        method : "POST",
        // mode : 'no-cors',
        headers :{
            "Content-Type":"application/json"
        },
        body : JSON.stringify(payload)
    }).then((data) => {
        return data.json()
        }).then((jsonData) => {
            console.log(jsonData);
            pageText += jsonData.summary_text;
            // console.log(pageText);
            // Step 1: Select the parent element
            const mainContainerElement = document.querySelector('main');
            const bodyElement = document.querySelector('body');

            // Create the outer div element
            const outerDivElement = document.createElement('div');
            outerDivElement.id = 'outerDiv';

            // Create the heading div element
            const headingDivElement = document.createElement('div');
            headingDivElement.id = 'headingDiv';
            headingDivElement.textContent = 'Summary';

            // Create the content div element
            const contentDivElement = document.createElement('div');
            contentDivElement.id = 'contentDiv';
            contentDivElement.textContent = pageText;

            // Append the heading div element to the outer div element
            outerDivElement.appendChild(headingDivElement);

            // Append the content div element to the outer div element
            outerDivElement.appendChild(contentDivElement);

            // Insert the outer div element as the first child of the main container element
            mainContainerElement.insertBefore(outerDivElement, mainContainerElement.firstChild);
                    
        })}

// var input_txt = pageText;

payload = {
    "url": "https://arxiv.org/pdf/1512.03385.pdf"
};

getSummarisedText(API_URL, payload)
// getHTMLContent()
// const mainContainer = document.querySelector('body > :first-child > main');
// var firstChild = document.body.firstChild;
// JavaScript code to insert div as the first child of the main container



