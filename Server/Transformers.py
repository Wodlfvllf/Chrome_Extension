# import requests
# from bs4 import BeautifulSoup

# # Send a GET request to the website
# url = "https://betterprogramming.pub/build-a-music-recommendation-system-based-on-social-media-behavior-df7e1e26c67"
# response = requests.get(url)

# # Parse the HTML content using BeautifulSoup
# soup = BeautifulSoup(response.text, "html.parser")

# # Extract specific data from the webpage
# title = soup.title.text
# paragraphs = soup.find_all("p")

# # Print the extracted data
# print("Title:", title)
# print("Paragraphs:")
# for p in paragraphs:
#     print(p.text)

import requests
import PyPDF2
import io
import Huggingface

def urlParse(pdf_url):
    # Download the PDF file
    response = requests.get(pdf_url)
    response.raise_for_status()

    # Create a file-like object from the response content
    pdf_file = io.BytesIO(response.content)

    # Create a PDF reader object
    pdf_reader = PyPDF2.PdfReader(pdf_file)

    # Extract the text from each page
    data = []
    for page in pdf_reader.pages:
        text = page.extract_text()
        result = Huggingface.TextSummariser(text)
        if isinstance(result, list) and len(result) > 0:
            summary_text = result[0].get('summary_text', '')
            data.append(summary_text)

    res = " ".join(data)
    return res

# Example usage
# pdf_url = 'https://arxiv.org/pdf/2005.14419.pdf'
# result = urlParse(pdf_url)
# print(result['summary_text'])

