import sqlite3
from sys import argv
from requests import get
from bs4 import BeautifulSoup

from selenium import webdriver

import pathlib
CURRENT_PATH = pathlib.Path().resolve()

db = sqlite3.connect('allegro_offers.db')
cursor = db.cursor()
URL = 'https://allegro.pl/kategoria/telefony-i-akcesoria'

#  id: "1",
# name: "Niebieski Smartfon MOTOROLA Moto E7 Power 4/64GB",
# img: "https://a.allegroimg.com/s180/11287d/e4c818ae4965b6101adc6b31bf8d/Niebieski-Smartfon-MOTOROLA-Moto-E7-Power-4-64GB",
# price: 499.0,

# https://assets.allegrostatic.com/metrum/placeholder/placeholder-20d85ed501.svg - not loaded imgs


# python scraping_data.py setup
if len(argv) > 1 and argv[1] == 'setup':
	cursor.execute('''CREATE TABLE offers (name TEXT, img TEXT, price REAL)''')
	quit()

# does not work
def get_page(URL):
  page = get(URL)
  bs = BeautifulSoup(page.content, 'html.parser')
  print(bs) # ... Please enable JS and disable any ad blocker ...
  return bs

def get_page_with_web_driver(URL):
  driver = webdriver.Chrome(f'{CURRENT_PATH}/chromedriver.exe')
  driver.get(URL)
  html = driver.page_source
  bs = BeautifulSoup(html, 'html.parser')
  return bs

parse_price = lambda price: price[:len(price) - len(' zł aktualna cena')]

def get_data_from_page(URL):
  bs = get_page_with_web_driver(URL)

  for offer in bs.find_all('article', class_='mx7m_1'):
    img = offer.find('img')['src']
    name = offer.find('div', class_='meqh_en').get_text().strip()
    price = offer.find('span', class_='_1svub _lf05o')['aria-label']
    price = parse_price(price)
    print(img, name, price)

    cursor.execute('INSERT INTO offers VALUES (?, ?, ?)', (name, img, price))
  db.commit()

get_data_from_page(URL)

db.close()