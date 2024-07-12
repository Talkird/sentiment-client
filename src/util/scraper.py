from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.wait import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from googletrans import Translator
from selenium import webdriver
from textblob import TextBlob
import customtkinter as ctk
import json
import time
import sys

class Scraper:
    def __init__(self, url, username, password) -> None:
        self.url = url
        self.username = username
        self.password = password

        self.comments = []
        self.posts = []
        self.users = []


        self.options = webdriver.ChromeOptions()
        self.options.add_argument("--incognito")
        #self.options.add_argument("--headless=new")
        self.driver = webdriver.Chrome(options=self.options, service=Service(ChromeDriverManager().install()))

        self.login()
        self.get_comments()
        self.save_to_json()

    def login(self):
        self.driver.get("https://x.com/i/flow/login")
        
        username_input = WebDriverWait(self.driver, 10).until(ec.element_to_be_clickable((By.CSS_SELECTOR, "input[name='text']")))
        username_input.send_keys(self.username)

        next_btn = WebDriverWait(self.driver, 10).until(ec.element_to_be_clickable((By.CSS_SELECTOR, "button[class='css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-ywje51 r-184id4b r-13qz1uu r-2yi16 r-1qi8awa r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l']")))
        next_btn.click()

        password_input = WebDriverWait(self.driver, 10).until(ec.element_to_be_clickable((By.CSS_SELECTOR, "input[name='password']")))
        password_input.send_keys(self.password)

        login_btn = WebDriverWait(self.driver, 10).until(ec.element_to_be_clickable((By.CSS_SELECTOR, "button[data-testid='LoginForm_Login_Button']")))
        login_btn.click()

    def get_comments(self):
        time.sleep(5) #sacar esto de aca
        
        if "#" in sys.argv[1]: url = "https://x.com/search?q=%23" + self.url.replace("#", "") #no funca
        elif "@" in sys.argv[1]: url = "https://x.com/" + self.url.replace("@", "")
        else: url = "https://x.com/search?q=" + self.url

        self.driver.get(url)
        time.sleep(5)

        i: int = 0
        visitados = []
        try:
            while i < 10:
                tweets = self.driver.find_elements(By.CSS_SELECTOR, "article[data-testid='tweet']")
                for tweet in tweets:
                    if tweet in visitados: continue
                    else: visitados.append(tweet)

                    text = tweet.find_element(By.CSS_SELECTOR, "div[data-testid='tweetText']").text
                    text = self.translate(text)
                    polarity = TextBlob(text).sentiment.polarity
                    assessment = "Positive" if polarity > 0 else "Negative" if polarity < 0 else "Neutral"
                    
                    self.comments.append({"comment": text, "polarity": polarity, "assessment": assessment})

                    ActionChains(self.driver)\
                        .scroll_to_element(tweet)\
                        .perform()
                    
                    time.sleep(1)
                    i += 1

        except Exception as e:
            print(e)


    def save_to_json(self):

        if "#" in sys.argv[1]: 
            prefix = "hashtag_"
            sys.argv[1] = sys.argv[1].replace("#", "")

        elif "@" in sys.argv[1]: 
            prefix = "user_"
            sys.argv[1] = sys.argv[1].replace("@", "")
        else: prefix = ''


        with open("src/renderer/src/data/" + prefix + sys.argv[1] + ".json", "w") as json_file:
            json.dump(self.comments, json_file, indent=4)


    def translate(self, text: str):
        translator = Translator()
        return translator.translate(text, dest="en").text


if __name__ == "__main__":
    scraper = Scraper(sys.argv[1], "sentiment1984", "sentimentscraping1984")
