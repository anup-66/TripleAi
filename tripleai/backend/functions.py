import json

from flask import jsonify

import random

from openai import OpenAI
import os
# client = OpenAI()
import openai
# openai.api_key = os.environ['OPENAI_API_KEY']
# Set your OpenAI API key
# openai.api_key = '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'
prompt = """"As a new student eager to explore"""
p2 = """Python"""
p3 = """,I'm looking for a structured learning pathway that takes me from basic concepts to advanced topics. Provide a comprehensive guide covering key topics, recommended resources, and suggested keywords for further exploration. Ensure that each section is filled with relevant content, including descriptions, examples, recommended readings/articles, hands-on exercises/projects, and YouTube videos. Also, predict the approximate timelines for each level of proficiency. The YouTube links should be in the format of full video links (e.g., https://www.youtube.com/watch?v=7lmCu8wz8ro). Ensure that no lists are empty and that the content is organized and consistent across all levels."
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

# Generate completion

# completion = client.chat.completions.create(
#   model="gpt-3.5-turbo",
#   messages=[
#     {"role": "system", "content": "You are a Education assistant, skilled in explaining The process and timelines of "
#                                   "how to learn any new things from start to advance."},
#     {"role": "user", "content": prompt + p2 + p3 }
#   ]
# )
# Print the generated completion
# data = completion.choices[0].message.content


def return_data(name, data):
    my_data = json.loads(data)
    # name = 'Python'

    def for_def_exam(text):
        keys_arr = []
        vals_arr = []
        topic = []
        for keys, vals in text.items():
            topic.append(keys)
            for key, val in vals.items():
                if key == "description":
                    keys_arr.append(val)
                else:
                    vals_arr.append(val)
        array = [topic, keys_arr, vals_arr]
        return array

    def youtube_video(text):
        return [[i['title'] for i in text['YouTube videos']], [i['link'] for i in text['YouTube videos']]]

    def article(text):
        return [[key for key in text], [val['link'] for val in text.values()]]

    Introduction = my_data[f'Introduction to {name}']
    print(Introduction)
    basic_course_ = for_def_exam(Introduction['All Basic concepts and fundamentals'])
    art = article(Introduction.get("Recommended readings or articles"))
    youtube_1 = youtube_video(Introduction)

    block1 = [basic_course_, art, Introduction["Keywords for further exploration"], youtube_1]
    print(block1)

    Foundation = my_data['Foundational Knowledge']
    all_key = for_def_exam(Foundation['All Key principles and theories'])
    all_core = for_def_exam(Foundation['All Core concepts and terminology'])
    Hands_on = article(Foundation.get('Hands-on exercises or projects for practice'))
    block2 = [all_key, all_core, Hands_on, Foundation['Keywords for further exploration'], youtube_video(Foundation)]
    print(block2)

    Intermediate = my_data.get('Intermediate Level')
    deep = for_def_exam(Intermediate.get('Deeper dive into specific subtopics'))
    adv_theory = for_def_exam((Intermediate.get('Advanced theories or methodologies')))
    case_studies = article(Intermediate.get('Case studies or real-world examples'))
    key_word = Intermediate['Keywords for further exploration']
    youtube_2 = youtube_video(Intermediate)
    block3 = [deep, adv_theory, case_studies, key_word, youtube_2]
    print(block3)

    Advanced = my_data.get('Advanced Level')
    Special = for_def_exam(Advanced.get('Specialized topics or advanced techniques'))
    Cutting = for_def_exam((Advanced.get('Cutting-edge research or developments')))
    Opportunities = article(Advanced.get('Opportunities for further exploration or specialization'))
    key_word_2 = Advanced['Keywords for further exploration']
    youtube_3 = youtube_video(Advanced)
    block4 = [Special, Cutting, Opportunities, key_word_2, youtube_3]
    print(block4)
    final_data = [block1, block2, block3, block4]
    return final_data
# print(json.loads(data))
# data1 = return_data("Python",data)
# print(data1)
