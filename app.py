__author__ = 'Grecia'
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Text"

if __name__ == "__main__":
    app.run("138.197.24.180", ‘80’)
    
