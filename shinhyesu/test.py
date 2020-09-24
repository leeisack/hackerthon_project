import requests
import pandas as pd
from bs4 import BeautifulSoup
import json

# url만 변경해서 크롤링하기
url = r'https://map.naver.com/v5/api/search?caller=pcweb&query=%EA%B4%91%EC%A3%BC%20%ED%98%B8%ED%85%94&type=all&searchCoord=126.58447265625001;35.160898088930104&page=1&displayCount=100&isPlaceRecommendationReplace=true&lang=ko'

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
text = soup.text

json_text = json.loads(text)
result = json_text['result']['place']['list']

location_dict = {
    'display' : [],
    'address' : [],
    'x' : [],
    'y' : []
}

display = []
address = []
x = [] 
y = []

for r in result :
    display.append(r['display'])
    address.append(r['address'])
    x.append(r['x'])
    y.append(r['y'])

location_dict['display'] += display
location_dict['address'] += address
location_dict['x'] += x
location_dict['y'] += y

location_list_pd = pd.DataFrame(location_dict)
location_list_pd.to_csv('location_test.csv')
print(location_list_pd)