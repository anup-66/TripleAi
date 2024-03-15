import random

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

prompt ="""
{
    "Introduction to [Interest/Field]": {
        "All Basic concepts and fundamentals": {
            "topic1": {"description": "", "example": "with proper code examples"},
            "topic2": {"description": "", "example": "with proper code examples"}
        },
        "Recommended readings or articles": {
            "topic1": {"link": ""},
            "topic2": {"link": ""}
        },
        "Keywords for further exploration": [],
        "YouTube videos": [
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""},
            {"title": "", "link": ""}
        ]
    },
    "Foundational Knowledge": {
        "All Key principles and theories": {
            "topic1": {"description": "", "example": "with proper code examples"},
            "topic2": {"description": "", "example": "with proper code examples"}
        },
        "All Core concepts and terminology": {
            "topic1": {"description": "", "example": "with proper code examples"},
            "topic2": {"description": "", "example": "with proper code examples"}
        },
        "Hands-on exercises or projects for practice": {
            "topic1": {"link": ""},
            "topic2": {"link": ""}
        },
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
        "Deeper dive into specific subtopics": {
            "topic1": {"description": "", "example": "with proper code examples"},
            "topic2": {"description": "", "example": "with proper code examples"}
        },
        "Advanced theories or methodologies": {
            "topic1": {"description": "", "example": "with proper code examples"},
            "topic2": {"description": "", "example": "with proper code examples"}
        },
        "Case studies or real-world examples": {
            "topic1": {"link": ""},
            "topic2": {"link": ""}
        },
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
        "Specialized topics or advanced techniques": {
            "topic1": {"description": "", "example": "with proper code examples"},
            "topic2": {"description": "", "example": "with proper code examples"}
        },
        "Cutting-edge research or developments": {
            "topic1": {"description": "", "example": "with proper code examples"},
            "topic2": {"description": "", "example": "with proper code examples"}
        },
        "Opportunities for further exploration or specialization": {
            "topic1": {"link": ""},
            "topic2": {"link": ""}
        },
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
    "Introduction to python": {
        "All Basic concepts and fundamentals": [
            {
                "description": "Variables are used to store data in a program.",
                "example": {
                    "code": "x = 5"
                }
            },
            {
                "description": "Data types define the type of data that can be stored in a variable.",
                "example": {
                    "code": "x = 5   # integer\nd = 3.14  # float\ns = 'hello'  # string"
                }
            },
            {
                "description": "Operators are used to perform operations on variables and values.",
                "example": {
                    "code": "x = 5\ny = 2\nsum = x + y"
                }
            },
            {
                "description": "Control structures are used to control the flow of execution in a program.",
                "example": {
                    "code": "if condition:\n    # do something\nelse:\n    # do something else"
                }
            },
            {
                "description": "Functions are blocks of reusable code that perform a specific task.",
                "example": {
                    "code": "def greet(name):\n    print('Hello, ' + name)\n\ngreet('John')"
                }
            }
        ],
        "Recommended readings or articles": [
            {"Python Crash Course by Eric Matthes": "https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280"},
            {"Automate the Boring Stuff with Python by Al Sweigart": "https://www.amazon.com/Automate-Boring-Stuff-Python-2nd/dp/1593279922"},
            {"Learning Python by Mark Lutz": "https://www.amazon.com/Learning-Python-5th-Mark-Lutz/dp/1449355730"}
        ],
        "Keywords for further exploration": [],
        "YouTube videos": [
            {"title": "Python Basics Tutorial", "link": "https://www.youtube.com/watch?v=7lmCu8wz8ro"},
            {"title": "Python for Beginners", "link": "https://www.youtube.com/watch?v=JKCjsRDffXo"},
            {"title": "Python Data Structures Tutorial", "link": "https://www.youtube.com/watch?v=7eh4d6sabA0"},
            {"title": "Python Functions Tutorial", "link": "https://www.youtube.com/watch?v=qBd5Vx5av3Q"},
            {"title": "Object-Oriented Programming in Python", "link": "https://www.youtube.com/watch?v=HkdAHXoRtos"}
        ]
    },
    "Foundational Knowledge": {
        "All Key principles and theories": [
            {
                "description": "Object-oriented programming (OOP) is a programming paradigm based on the concept of objects.",
                "example": {
                    "code": "class Car:\n    def __init__(self, make, model):\n        self.make = make\n        self.model = model\n\nmy_car = Car('Toyota', 'Corolla')"
                }
            },
            {
                "description": "Functional programming treats computation as the evaluation of mathematical functions.",
                "example": {
                    "code": "# Function to calculate factorial\nimport math\nresult = math.factorial(5)"
                }
            },
            {
                "description": "Recursion is a programming technique where a function calls itself to solve a problem.",
                "example": {
                    "code": "def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)"
                }
            }
        ],
        "All Core concepts and terminology": [
            {
                "description": "Lists are ordered collections of items.",
                "example": {
                    "code": "my_list = [1, 2, 3]"
                }
            },
            {
                "description": "Tuples are immutable ordered collections of items.",
                "example": {
                    "code": "my_tuple = (1, 2, 3)"
                }
            },
            {
                "description": "Dictionaries are unordered collections of key-value pairs.",
                "example": {
                    "code": "my_dict = {'key': 'value'}"
                }
            }
        ],
        "Hands-on exercises or projects for practice": [
            {"Project Euler": "https://projecteuler.net/"}
        ],
        "Keywords for further exploration": [],
        "YouTube videos": [
            {"title": "Object-Oriented Programming", "link": "https://www.youtube.com/watch?v=ZDa-Z5JzLYM"},
            {"title": "Functional Programming", "link": "https://www.youtube.com/watch?v=LnX3B9oaKzw"},
            {"title": "Recursion in Python", "link": "https://www.youtube.com/watch?v=wMNrSM5RFMc"}
        ]
    },
    "Intermediate Level": {
        "Deeper dive into specific subtopics": [
            {
                "description": "Advanced data structures like stacks, queues, and trees.",
                "example": {
                    "code": "from collections import deque\nqueue = deque([1, 2, 3])"
                }
            },
            {
                "description": "Concurrency and parallelism with Python's threading and multiprocessing modules.",
                "example": {
                    "code": "import threading\n\ndef print_numbers():\n    for i in range(5):\n        print(i)\n\nthread = threading.Thread(target=print_numbers)\nthread.start()"
                }
            }
        ],
        "Advanced theories or methodologies": [
            {
                "description": "Design patterns for software architecture and development.",
                "example": {
                    "code": "from abc import ABC, abstractmethod\n\nclass Animal(ABC):\n\n    @abstractmethod\n    def make_sound(self):\n        pass"
                }
            },
            {
                "description": "Big O notation and algorithmic complexity analysis.",
                "example": {
                    "code": "# Time complexity: O(n)\ndef linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1"
                }
            }
        ],
        "Case studies or real-world examples": [
            {"Python for Data Analysis by Wes McKinney": "https://www.amazon.com/Python-Data-Analysis-Wrangling-IPython/dp/1491957662"}
        ],
        "Keywords for further exploration": [],
        "YouTube videos": [
            {"title": "Advanced Python Concepts", "link": "https://www.youtube.com/watch?v=JGwNWGJ8XDI"},
            {"
"""
#
# def preprocess_completion(data):
#     intermediatory = data["Advanced Level"]["YouTube videos"]
#     llist = []
#     for i in intermediatory:
#         title = i["title"]
#         link = i["link"]
#         llist.append(link)
#         print(title)
#         print(link)
#     print(llist)
#     # print(intermediatory)
#     return "done"
#
# import json
# # Preprocess the completion message
# processed_sections = preprocess_completion(json.loads(data))

# print(data)

import string

