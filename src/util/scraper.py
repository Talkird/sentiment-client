from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.wait import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium import webdriver
from textblob import TextBlob
import pandas as pd
import time

class Scraper:
    def __init__(self, url, username, password) -> None:
        self.url = url
        self.username = username
        self.password = password

        self.comments = []

        self.options = webdriver.ChromeOptions()
        self.options.add_argument("--incognito")
        #self.options.add_argument("--headless=new")
        self.driver = webdriver.Chrome(options=self.options, service=Service(ChromeDriverManager().install()))

        self.login()
        self.get_comments()
        self.save_to_csv()

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

        self.driver.get("https://x.com/search?q=" + self.url)

        time.sleep(5) #tiempo de espera despues del login

        tweets = self.driver.find_elements(By.CSS_SELECTOR, "article[data-testid='tweet']")

        for tweet in tweets:
            text = tweet.find_element(By.CSS_SELECTOR, "div[data-testid='tweetText']").text
            self.comments.append(text)

    def save_to_csv(self):
        df = pd.DataFrame(self.comments, columns=["Comments"])
        df.to_csv("comentarios.csv", index=False)


if __name__ == "__main__":
    scraper = Scraper("samsung", "sentiment1984", "sentimentscraping1984")