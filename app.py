from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def entry():
    return render_template("index.html")

@app.route("/index.html")
def index():
    return render_template("index.html")

@app.route("/globalComponent/topNavigator.html")
def topNavigator():
    return render_template("globalComponent/topNavigator.html")

@app.route("/mainPage/creator-main.html")
def creatorMain():
    return render_template("mainPage/creator-main.html")

@app.route("/mainPage/creator-main2.html")
def creatorMain2():
    return render_template("mainPage/creator-main2.html")

@app.route("/mainPage/cname-main.html")
def cNameMain():
    return render_template("mainPage/cname-main.html")

@app.route("/mainPage/cname-main2.html")
def cNameMain2():
    return render_template("mainPage/cname-main2.html")

@app.route("/mainPage/country-main.html")
def countryMain():
    return render_template("mainPage/country-main.html")

@app.route("/mainPage/country-main2.html")
def countryMain2():
    return render_template("mainPage/country-main2.html")

@app.route("/about/about.html")
def about():
    return render_template("about/about.html")

@app.route("/creator/creator1.html")
def creator1():
    return render_template("creator/creator1.html")

if __name__ == "__main__":
    # Actual Web Address
    #app.run("138.197.24.180", "80")

    # For Test
    app.run()
    
