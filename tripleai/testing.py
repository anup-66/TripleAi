from openai import OpenAI

# client = OpenAI()
# import openai

# Set your OpenAI API key
# openai.api_key = 'your-api-key'


# Generate completion
# completion =  client.chat.completions.create(
#   modal="gpt-3.5-turbo",
#   message=prompt,
#   # temperature=0.7,
#   # max_tokens=500,
# )
# completion = client.chat.completions.create(
#   model="gpt-3.5-turbo",
#   messages=[
#     {"role": "system", "content": "You are a Education assistant, skilled in explaining The process and timelines of "
#                                   "how to learn any new things from start to advance."},
#     {"role": "user", "content": prompt}
#   ]
# )
# # Print the generated completion
# print(completion.choices[0].message)

prompt = """As a new student interested in python, I want to progress from basic concepts to advanced topics in a structured manner. Please provide me with a step-by-step learning pathway, covering key topics, recommended resources, and suggested keywords for further exploration
{
    "Introduction to [Interest/Field]": {
        "Basic concepts and fundamentals": [],
        "Recommended readings or articles": [],
        "Overview of the field and its importance": "",
        "Keywords for further exploration": []
    },
    "Foundational Knowledge": {
        "Key principles and theories": [],
        "Core concepts and terminology": [],
        "Hands-on exercises or projects for practice": [],
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
        "Deeper dive into specific subtopics": [],
        "Advanced theories or methodologies": [],
        "Case studies or real-world examples": [],
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
        "Specialized topics or advanced techniques": [],
        "Cutting-edge research or developments": [],
        "Opportunities for further exploration or specialization": [],
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

import re

# Example completion message
data = """
{
"Introduction to Python": {
"Basic concepts and fundamentals": ["Variables", "Data types", "Control structures", "Functions", "Modules"],
"Recommended readings or articles": ["Python.org - Official Python documentation", "Real Python - Python tutorials for beginners"],
"Overview of the field and its importance": "Python is a versatile programming language known for its simplicity and readability. It is widely used in various domains such as web development, data analysis, artificial intelligence, and more.",
"Keywords for further exploration": ["Python programming", "Python syntax", "Python basics"]
},
"Foundational Knowledge": {
"Key principles and theories": ["Object-oriented programming", "Functional programming", "Error handling"],
"Core concepts and terminology": ["Classes", "Inheritance", "Polymorphism", "Lambda functions", "Exception handling"],
"Hands-on exercises or projects for practice": ["Building a simple calculator", "Creating a todo list application", "Implementing basic data structures like lists and dictionaries"],
"Keywords for further exploration": ["Python object-oriented programming", "Python functions", "Python exceptions"],
"YouTube videos": [
{"title": "Python Programming for Beginners - Full Course", "link": "https://www.youtube.com/watch?v=_uQrJ0TkZlc"},
{"title": "Python Crash Course - Cheat Sheet", "link": "https://www.youtube.com/watch?v=yyxXDseKaD4"},
{"title": "Python Fundamentals - Variables, Data Types, and Operators", "link": "https://www.youtube.com/watch?v=YYXdXT2l-Gg"},
{"title": "Object-Oriented Programming (OOP) in Python", "link": "https://www.youtube.com/watch?v=ZDa-Z5JzLYM"},
{"title": "Python Exception Handling - Try, Except, Else, Finally", "link": "https://www.youtube.com/watch?v=NIWwJbo-9_8"}
]
},
"Intermediate Level": {
"Deeper dive into specific subtopics": ["Advanced data structures (sets, tuples)", "File handling", "Regular expressions"],
"Advanced theories or methodologies": ["Decorator functions", "Generators", "Concurrency and parallelism"],
"Case studies or real-world examples": ["Building a web scraper", "Creating a chatbot", "Implementing a machine learning algorithm"],
"Keywords for further exploration": ["Python advanced topics", "Python file handling", "Python regular expressions"],
"YouTube videos": [
{"title": "Advanced Python Programming - Full Course", "link": "https://www.youtube.com/watch?v=_t8LPnU9RoM"},
{"title": "Python File I/O - Reading and Writing Files", "link": "https://www.youtube.com/watch?v=Uh2ebFW8OYM"},
{"title": "Regular Expressions (RegEx) in Python", "link": "https://www.youtube.com/watch?v=K8L6KVGG-7o"},
{"title": "Python Decorators - Dynamically Alter the Functionality of Your Functions", "link": "https://www.youtube.com/watch?v=FsAPt_9Bf3U"},
{"title": "Python Generators - How to Use Generators and Yield in Python", "link": "https://www.youtube.com/watch?v=bD05uGo_sVI"}
]
},
"Advanced Level": {
"Specialized topics or advanced techniques": ["Metaprogramming", "Cython for performance optimization", "Integration with C/C++"],
"Cutting-edge research or developments": ["Artificial intelligence and machine learning with Python", "Big data processing using Python frameworks (e.g., Apache Spark)"],
"Opportunities for further exploration or specialization": ["Contributing to open-source Python projects", "Developing Python libraries or packages"],
"Keywords for further exploration": ["Advanced Python topics", "Python metaprogramming", "Python machine learning"],
"YouTube videos": [
{"title": "Metaprogramming in Python - Understanding Metaclasses", "link": "https://www.youtube.com/watch?v=7lmCu8wz8ro"},
{"title": "Cython - Optimizing Python", "link": "https://www.youtube.com/watch?v=JKCjsRDffXo"},
{"title": "Building Machine Learning Models in Python", "link": "https://www.youtube.com/watch?v=7eh4d6sabA0"},
{"title": "Big Data Processing with Python and Apache Spark", "link": "https://www.youtube.com/watch?v=qBd5Vx5av3Q"},
{"title": "Contributing to Open Source - Getting Started with Git and GitHub", "link": "https://www.youtube.com/watch?v=HkdAHXoRtos"}
]
},
"Predicted Timelines": {
"Introductory Level": "1-2 weeks",
"Foundational Knowledge": "2-4 weeks",
"Intermediate Level": "4-6 weeks",
"Advanced Level": "6-8 weeks"
}
}"""


def preprocess_completion(data):
    intermediatory = data["Advanced Level"]["YouTube videos"]
    llist = []
    for i in intermediatory:
        title = i["title"]
        link = i["link"]
        llist.append(link)
        print(title)
        print(link)
    print(llist)
    # print(intermediatory)
    return "done"

import json
# Preprocess the completion message
processed_sections = preprocess_completion(json.loads(data))

# print(data)
