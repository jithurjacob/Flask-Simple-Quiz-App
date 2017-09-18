from flask import Flask,make_response,render_template, request, jsonify, json,jsonify
from flask import make_response, request, current_app, redirect, url_for, send_from_directory
import os,time,datetime
import  random
from WebUI import WebUI # Add WebUI to your imports

app = Flask(__name__)
ui = WebUI(app, debug=True) # Create a WebUI instance
numberOfQuestions = 3
qns = {
    "section1": [
                ["q1","What is your name?",["Ram","Prem","Raghu","peter"],"Prem"],
                ["q2","Where are you?",["bangalore","Pune","Chennai"],"bangalore"],
                ["q3","What is your fav food?",["a","b","c","d"],"b"],
                ["q4","q4?",["a","b","c","d"],"b"],
                ["q5","q5?",["a","b","c","d"],"b"]
                ],
    "section2": [
                ["q21","What is your name?",["Ram","Prem","Raghu","peter"],"Prem"],
                ["q22","Where are you?",["bangalore","Pune","Chennai"],"bangalore"],
                ["q23","What is your fav food?",["a","b","c","d"],"b"],
                ["q24","q4?",["a","b","c","d"],"b"],
                ["q25","q5?",["a","b","c","d"],"b"]
                ],
    "section3": [
                ["q41","What is your name?",["Ram","Prem","Raghu","peter"],"Prem"],
                ["q42","Where are you?",["bangalore","Pune","Chennai"],"bangalore"],
                ["q43","What is your fav food?",["a","b","c","d"],"b"],
                ["q44","q4?",["a","b","c","d"],"b"],
                ["q45","q5?",["a","b","c","d"],"b"]
                ],                
    "section4": [
                ["q61","What is your name?",["Ram","Prem","Raghu","peter"],"Prem"],
                ["q62","Where are you?",["bangalore","Pune","Chennai"],"bangalore"],
                ["q63","What is your fav food?",["a","b","c","d"],"b"],
                ["q64","q4?",["a","b","c","d"],"b"],
                ["q65","q5?",["a","b","c","d"],"b"]
                ],
    "section5": [
                ["q81","What is your name?",["Ram","Prem","Raghu","peter"],"Prem"],
                ["q82","Where are you?",["bangalore","Pune","Chennai"],"bangalore"],
                ["q83","What is your fav food?",["a","b","c","d"],"b"],
                ["q84","q4?",["a","b","c","d"],"b"],
                ["q85","q5?",["a","b","c","d"],"b"]
                ]

}

@app.route('/getQuestions/',methods=['POST'])
def getQuestions():
    sectionId = request.form['sectionId']
    
    sections = ["section1","section2","section3"]

    questions =  random.sample(qns[sectionId],numberOfQuestions)

    #Find the next section
    if sections.index(sectionId)==len(sections)-1:
        Next = "Finish"
    else:
        Next = sections[sections.index(sectionId)+1]

    return jsonify(qns=questions,next=Next)

@app.route('/')
@app.route('/index')
def index():
    #return make_response(send())
    #headers = {'Content-Type': 'text/html'}    
    return make_response(render_template('index2.html'),200)

if __name__ == '__main__':
      ui.run() #app.run(debug=True)
