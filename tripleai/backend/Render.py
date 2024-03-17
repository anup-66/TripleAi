import json

from pymongo import MongoClient

from functions import return_data as rd
from flask import Flask, request, jsonify, session, redirect
from flask_socketio import SocketIO, emit, join_room, leave_room, send
import os
# from  flask_session import Session
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret_name'
app.config["SESSION_PERMANENT"] = False
app.config['SESSION_TYPE'] = 'filesystem'
CORS(app)
# app.secret_key = "BAD_SECRET_KEY"
# Session(app)
socketio = SocketIO(app, cors_allowed_origins='*')

# Store code data
code_data = {}

ans = """
{
    "Introduction to python": {
        "All Basic concepts and fundamentals": {
            "Variables": {"description": "Variables are containers for storing data values.", "example": "with proper code examples"},
            "Data Types": {"description": "Data types specify the type of data that a variable can store.", "example": "with proper code examples"},
            "Operators": {"description": "Operators are used to perform operations on variables and values.", "example": "with proper code examples"},
            "Control Structures": {"description": "Control structures are used to control the flow of a program.", "example": "with proper code examples"},
            "Functions": {"description": "Functions are a block of code that performs a specific task.", "example": "with proper code examples"}
        },
        "Recommended readings or articles": {
            "Python Documentation": {"link": "https://docs.python.org/3/"},
            "Python for Beginners": {"link": "https://www.python.org/about/gettingstarted/"}
        },
        "Keywords for further exploration": ["Python syntax", "Conditional statements", "Loops", "String manipulation", "Lists and tuples"],
        "YouTube videos": [
            {"title": "Python Tutorial for Beginners", "link": "https://www.youtube.com/watch?v=7lmCu8wz8ro"},
            {"title": "Learn Python Programming", "link": "https://www.youtube.com/watch?v=JKCjsRDffXo"},
            {"title": "Python Crash Course", "link": "https://www.youtube.com/watch?v=7eh4d6sabA0"},
            {"title": "Python Programming for Data Science", "link": "https://www.youtube.com/watch?v=HkdAHXoRtos"}
            
        ]
    },
    "Foundational Knowledge": {
        "All Key principles and theories": {
            "Object-Oriented Programming": {"description": "OOP is a programming paradigm based on the concept of 'objects', which can contain data, in the form of fields (often known as attributes), and code, in the form of procedures (often known as methods).", "example": "with proper code examples"},
            "Abstraction": {"description": "Abstraction is the concept of simplifying complex reality by modeling classes appropriate to the problem.", "example": "with proper code examples"},
            "Encapsulation": {"description": "Encapsulation is the bundling of data with the methods that operate on that data, or the restricting of direct access.", "example": "with proper code examples"},
            "Inheritance": {"description": "Inheritance is the mechanism of basing a class upon another class, retaining similar implementation.", "example": "with proper code examples"},
            "Polymorphism": {"description": "Polymorphism is the provision of a single interface to entities of different types or the use of a single symbol to represent multiple different types.", "example": "with proper code examples"}
        },
        "All Core concepts and terminology": {
            "Variable Scope": {"description": "Variable scope defines where variables can be accessed or referenced in a program.", "example": "with proper code examples"},
            "Data Structures": {"description": "Data structures are structures that are used to store and organize data in a computer so that it can be used efficiently.", "example": "with proper code examples"},
            "Exception Handling": {"description": "Exception handling is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions requiring special processing during execution.", "example": "with proper code examples"},
            "Modules and Packages": {"description": "Modules are files containing Python statements and definitions. A package is a collection of Python modules.", "example": "with proper code examples"},
            "File Handling": {"description": "File handling is the process of working with files on a computer.", "example": "with proper code examples"}
        },
        "Hands-on exercises or projects for practice": {
            "Python Exercise Book": {"link": "https://www.datacamp.com/community/data-science-cheatsheets"},
            "Project Euler": {"link": "https://projecteuler.net/archives"}
        },
        "Keywords for further exploration": ["Object-oriented programming", "Data structures", "Exception handling", "Modules and packages", "File handling"],
        "YouTube videos": [
            {"title": "Python Object-Oriented Programming", "link": "https://youtube.com/python-oop"},
            {"title": "Python Data Structures", "link": "https://youtube.com/python-data-structures"},
            {"title": "Python Exception Handling", "link": "https://youtube.com/python-exception-handling"},
            {"title": "Python Modules and Packages", "link": "https://youtube.com/python-modules-packages"},
            {"title": "Python File Handling", "link": "https://youtube.com/python-file-handling"}
        ]
    },
    "Intermediate Level": {
        "Deeper dive into specific subtopics": {
            "Web Development with Django": {"description": "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.", "example": "with proper code examples"},
            "Data Analysis with Pandas": {"description": "Pandas is a fast, powerful, flexible, and easy-to-use open-source data analysis and manipulation library built on top of the Python programming language.", "example": "with proper code examples"},
            "Machine Learning with scikit-learn": {"description": "Scikit-learn is a simple and efficient tool for predictive data analysis and is built on NumPy, SciPy, and matplotlib.", "example": "with proper code examples"},
            "Deep Learning with TensorFlow": {"description": "TensorFlow is an open-source deep learning framework developed by Google.", "example": "with proper code examples"},
            "Web Scraping with BeautifulSoup": {"description": "Beautiful Soup is a Python library for pulling data out of HTML and XML files.", "example": "with proper code examples"}
        },
        "Advanced theories or methodologies": {
            "Algorithm Design and Analysis": {"description": "Algorithm design refers to a method or mathematical process for problem-solving and engineering algorithms.", "example": "with proper code examples"},
            "Natural Language Processing": {"description": "Natural Language Processing (NLP) is a field of artificial intelligence that deals with the interaction between computers and humans using natural language.", "example": "with proper code examples"},
            "Computer Vision": {"description": "Computer vision is an interdisciplinary field that deals with how computers can gain a high-level understanding from digital images or videos.", "example": "with proper code examples"},
            "Reinforcement Learning": {"description": "Reinforcement learning is an area of machine learning concerned with how software agents ought to take actions in an environment in order to maximize some notion of cumulative reward.", "example": "with proper code examples"},
            "Big Data Analytics": {"description": "Big Data Analytics refers to the process of collecting, organizing, and analyzing large sets of data to discover patterns and other useful information.", "example": "with proper code examples"}
        },
        "Case studies or real-world examples": {
            "Building a Web Application": {"link": "https://realpython.com/tutorials/web-dev/"},
            "Predictive Analytics Project": {"link": "https://www.analyticsvidhya.com/blog/2021/10/machine-learning-project-predictive-analysis-employee-attrition-prediction/"}
        },
        "Keywords for further exploration": ["Django web development", "Data analysis with Pandas", "Machine learning algorithms", "Computer vision applications", "Reinforcement learning applications"],
        "YouTube videos": [
            {"title": "Django Web Development Tutorial", "link": "https://youtube.com/django-tutorial"},
            {"title": "Pandas Data Analysis Tutorial", "link": "https://youtube.com/pandas-tutorial"},
            {"title": "Machine Learning Algorithms Explained", "link": "https://youtube.com/machine-learning-algorithms"},
            {"title": "Computer Vision in Python", "link": "https://youtube.com/computer-vision-python"},
            {"title": "Reinforcement Learning Explained", "link": "https://youtube.com/reinforcement-learning"}
        ]
    },
    "Advanced Level": {
        "Specialized topics or advanced techniques": {
            "Neural Network Architectures": {"description": "Neural network architectures refer to the layout or organization of a neural network, including the number of layers, the type of connections between neurons, and the activation functions used.", "example": "with proper code examples"},
            "Generative Adversarial Networks": {"description": "Generative Adversarial Networks (GANs) are a class of artificial intelligence algorithms used in unsupervised machine learning.", "example": "with proper code examples"},
            "Transfer Learning": {"description": "Transfer learning is a machine learning technique where a model trained on one task is re-purposed on a second related task.", "example": "with proper code examples"},
            "AutoML": {"description": "AutoML, or automated machine learning, refers to the process of automating the process of applying machine learning to real-world problems.", "example": "with proper code examples"},
            "Quantum Machine Learning": {"description": "Quantum machine learning is an area of research that explores the intersection of quantum computing and machine learning.", "example": "with proper code examples"}
        },
        "Cutting-edge research or developments": {
            "Graph Neural Networks": {"description": "Graph Neural Networks (GNNs) are a class of artificial neural networks that are designed to process data structured as graphs.", "example": "with proper code examples"},
            "Federated Learning": {"description": "Federated learning is a machine learning approach that enables model training across multiple decentralized edge devices or servers holding local data samples.", "example": "with proper code examples"},
            "Explainable AI": {"description": "Explainable AI (XAI) refers to methods and techniques in the application of artificial intelligence technology such that the results of the solution can be understood by humans.", "example": "with proper code examples"},
            "AI Ethics and Bias": {"description": "AI ethics and bias refer to the moral and social implications of artificial intelligence technologies and the potential for bias in AI systems.", "example": "with proper code examples"},
            "AI in Healthcare": {"description": "AI in healthcare refers to the use of artificial intelligence technology in various aspects of healthcare, including diagnostics, treatment planning, and patient care.", "example": "with proper code examples"}
        },
        "Opportunities for further exploration or specialization": {
            "Research Opportunities": {"link": "https://arxiv.org/"},
            "Online Courses and Certifications": {"link": "https://www.coursera.org/"},
            "Open-source Contributions": {"link": "https://github.com/"},
            "Tech Conferences and Workshops": {"link": "https://www.techexams.net/"}
        },
        "Keywords for further exploration": ["Neural network architectures", "Federated learning", "Explainable AI", "AI ethics", "Healthcare applications of AI"],
        "YouTube videos": [
            {"title": "Graph Neural Networks Explained", "link": "https://youtube.com/graph-neural-networks"},
            {"title": "Federated Learning Tutorial", "link": "https://youtube.com/federated-learning"},
            {"title": "Explainable AI: Interpretable Machine Learning", "link": "https://youtube.com/explainable-ai"},
            {"title": "AI Ethics and Bias in Machine Learning", "link": "https://youtube.com/ai-ethics-bias"},
            {"title": "AI in Healthcare: Current Applications and Future Trends", "link": "https://youtube.com/ai-healthcare"}
        ]
    },
    "Predicted Timelines": {
        "Introductory Level": "1-2 months",
        "Foundational Knowledge": "2-3 months",
        "Intermediate Level": "4-6 months",
        "Advanced Level": "6+ months"
    }
}

"""
import json

from flask import jsonify

import random

from openai import OpenAI
import os
clientai = OpenAI()
import openai
openai.api_key = os.environ['OPENAI_API_KEY']
# Set your OpenAI API key
# openai.api_key = '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'
prompt = """"As a new student eager to explore"""
# p2 = """Python"""
p3 = """,I'm looking for a structured learning pathway that takes me from basic concepts to advanced topics. Provide a comprehensive guide covering key topics, recommended resources, and suggested keywords for further exploration. Ensure that each section is filled with relevant content, including descriptions, examples, recommended readings/articles, hands-on exercises/projects, and YouTube videos. Also, predict the approximate timelines for each level of proficiency. The YouTube links should be in the format of full video links (e.g., https://www.youtube.com/watch?v=7lmCu8wz8ro). Ensure that no lists are empty and that the content is organized and consistent across all levels.Give the answer in proper JSON format"
{
    "Introduction to [Interest/Field]": {
         "All Basic concepts and fundamentals": {topic1:{description:"" , example: {with proper code examples}},topic2:{description:"" , example: {with proper code examples}},...},
        "Recommended readings or articles": {topic1:{link},topic2:{link},...},
        "Keywords for further exploration": []
         "YouTube videos": [
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""}
        ]
    },
    "Foundational Knowledge": {
        "All Key principles and theories": {topic1:{description:"" , example: {with proper code examples}},topic2:{description:"" , example: {with proper code examples}},...},
        "All Core concepts and terminology": {topic1:{description:"" , example: {with proper code examples}},topic2:{description:"" , example: {with proper code examples}},...},
        "Hands-on exercises or projects for practice": {topic1:{link},topic2:{link},...},
        "Keywords for further exploration": [],
        "YouTube videos": [
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""}
        ]
    },
    "Intermediate Level": {
        "Deeper dive into specific subtopics":  {topic1:{description:"" , example: {with proper code examples}},topic2:{description:"" , example: {with proper code examples}},...},
        "Advanced theories or methodologies":  {topic1:{description:"" , example: {with proper code examples}},topic2:{description:"" , example: {with proper code examples}},...},
        "Case studies or real-world examples": {topic1:{link},topic2:{link},...},
        "Keywords for further exploration": [],
        "YouTube videos": [
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""}
        ]
    },
    "Advanced Level": {
        "Specialized topics or advanced techniques":  {topic1:{description:"" , example: {with proper code examples}},topic2:{description:"" , example: {with proper code examples}},...},
        "Cutting-edge research or developments":  {topic1:{description:"" , example: {with proper code examples}},topic2:{description:"" , example: {with proper code examples}},...},
        "Opportunities for further exploration or specialization": {topic1:{link},topic2:{link},...},
        "Keywords for further exploration": [],
        "YouTube videos": [
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""}
        ]
    },
    "Predicted Timelines": {
        "Introductory Level": "",
        "Foundational Knowledge": "",
        "Intermediate Level": "",
        "Advanced Level": ""
    }
}"""
def chat(prompt,p2,p3):
# Generate completion
    completion = clientai.chat.completions.create(
      model="gpt-3.5-turbo",
      messages=[
        {"role": "system", "content": "You are a Education assistant, skilled in explaining The process and timelines of "
                                      "how to learn any new things from start to advance."},
        {"role": "user", "content": prompt + p2 + p3 }
      ]
    )
    # Print the generated completion
    data = completion.choices[0].message.content
    return data


# @socketio.on("message")
# def handleMessage(msg):
#     print(msg)
#     # aa = msg.split(":")
#     # # username = session['username']
#     # username = aa[0]  # Get the username from session or default to 'Anonymous'
#     # message_with_username = f"{username}: {aa[1]}"  # Include username in the message
#     send(msg, broadcast=True)  # Broadcast the message with username
#     return None

@socketio.on('message')
def handle_message(message_data):
    message = message_data['message']
    username = message_data['username']
    messages_collection.insert_one({'username': username, 'message': message})
    print(message)
    emit('message', {'username': username, 'message': message}, broadcast=True)

@socketio.on('connect')
def handle_connect():
    previous_messages = list(messages_collection.find({}, {'_id': 0}))
    print(previous_messages)
    emit('previous_messages', previous_messages,broadcast=True)


# @socketio.on("username")
# def username():
#     emit("username", session['username'])
client = MongoClient('mongodb://localhost:27017/')
db = client['chat_app']
messages_collection = db['messages']
username = ""
email = ""
@app.route("/profile")
def profile():
    global username
    global email
    # print(session)
    print(username,email)
    return jsonify({"username": username,"email":email})


db2 = client['TripleAi']  # Replace 'your_database_name' with your actual database name
users_collection2 = db2['users']  # Assuming you have a collection named 'users'

@app.route("/login", methods=["POST"])
def login():
    global username
    global email
    if request.method == "POST":
        data = request.json
        username = data.get("username")
        password = data.get("password")

        # Query the database for the provided username
        user = users_collection2.find_one({"username": username})
        email = user['email']
        if user and user['password'] == password:
            # Set the session username
            session.pop("name", None)
            session["username"] = username
            session.modified = True
            print(session['username'])
            return jsonify({"message": "ok"})
        else:
            return jsonify({"message": "Invalid username or password"})
    else:
        return jsonify({"message": "Method not allowed"})


@app.route('/signup', methods=['GET','POST'])
def signup():
    global username
    global email
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    print(username,email,password)
    # Check if username already exists
    if users_collection2.find_one({"username": username}):
        return jsonify({"message": "Username already exists"}), 400

    # Insert new user data into the database
    done = users_collection2.insert_one({
        "username": username,
        "email": email,
        "password": password,
    })
    if done:

        print(jsonify({"message": "successful"}))

    return jsonify({"message": "successful"})
# @app.route("/user")
# def username_():
#     return jsonify({"username":session['username']})
@app.route("/videos")
def find():
    # print(session['name'])
    List = ['https://www.youtube.com/watch?v=7lmCu8wz8ro', 'https://www.youtube.com/watch?v=JKCjsRDffXo',
            'https://www.youtube.com/watch?v=7eh4d6sabA0', 'https://www.youtube.com/watch?v=HkdAHXoRtos']
    return jsonify({"data": List})


@app.route("/data")
def data():
    session['name'] = "anup"
    session.modified = True
    # print(session)
    # search_query = request.args.get('search')
    # data_ = chat(prompt,search_query,p3)
    final_data = rd("python",ans)
    data1 = final_data
    return data1


if __name__ == '__main__':
    socketio.run(app, debug=True)
    # app.run(debug=True)

