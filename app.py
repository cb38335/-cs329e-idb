__author__ = 'Grecia'
from flask import Flask

app = Flask(__name__)

@app.route('/http://127.0.0.1:5000/')
def index():
    return "Text"

if __name__ == "__main__":
    app.run(debug=True)
    
