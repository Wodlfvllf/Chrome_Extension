const pdfjsLib = require('pdfjs-dist');

// let pageText = '';
pdfjsLib.getDocument('https://arxiv.org/pdf/2005.14419.pdf').promise.then(pdf => 
{
    const numPages = pdf.numPages;
    const extractPromises = [];

    for (let i = 1; i <= numPages; i++) {
      extractPromises.push(
        pdf.getPage(i).then(page => {
          return page.getTextContent().then(content => {
            content.items.forEach(item => {
              pageText += item.str + ' ';
            });
          });
        })
      );
    }

    // Wait for all promises to resolve
    Promise.all(extractPromises)
      .then(() => {
        console.log(pageText);
      })
      .catch(error => {
        console.error('Error extracting text:', error);
      });
}
);

// let exportedPageText;

// export function exportPageText(pageText) {
//   exportedPageText = pageText;
// }
