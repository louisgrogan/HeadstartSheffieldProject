import requests
import codecs


def getstats(url):
# Gets info from the site
	try:
		r = requests.get(url)
	except:
		url = input("Please enter a url: ")
	url = url.split('/')
	f = codecs.open(url[2]+".txt","w+","utf-8")
	f.write(r.text)

def main():
	getstats('https://www.theguardian.com/education/ng-interactive/2019/jun/07/university-guide-2020-league-table-for-computer-science-information')
	getstats('https://www.thecompleteuniversityguide.co.uk/league-tables/rankings?s=computer%20science')




