const API_URL = "http://localhost:8000/post_data";
// import { pageText } from './Text.js';
// const pdfjsLib = require('pdfjs-dist');

// let pageText = '';

async function getSummarisedText(API_URL, payload)
{
    return await fetch(API_URL, {
        method : "POST",
        headers :{
            "Content-Type":"application/json"
        },
        body : JSON.stringify(payload)
    }).then((data) => {
        return data.json()
      }).then((jsonData) => {
        console.log(jsonData);
      })
}

// var input_txt = pageText;

payload = {
    "url": "https://arxiv.org/pdf/1512.03385.pdf"
};

getSummarisedText(API_URL, payload)
// getHTMLContent()