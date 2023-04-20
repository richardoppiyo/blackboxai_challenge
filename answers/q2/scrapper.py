# Install the libraries for web scraping i.e BeautifulSoup, requests, and urllib.
# Make a request to the url
# Get the required content
# Extract the  data

import requests
from bs4 import BeautifulSoup

# make a request from a given url
url = 'https://trial.com'
response = requests.get(url)

# parse content using beautifulsoup
soup = BeautifulSoup(response.content, 'html.parser')

# Get the required dataa
title = soup.title.text  #get the title
paragraph = soup.find_all('p', {'class': 'hello'}) #find all p tags with hthe given class name

print('Title:', title)
print('Paragraph:', paragraph)
