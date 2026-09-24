from openai import OpenAI
from dotenv import load_dotenv
import base64
import streamlit as st
# load_dotenv()
# client=OpenAI()
# path="Agent/images.jpg"
# with open(path,"rb") as f:
#     image=base64.b64encode(f.read()).decode("utf-8")
# system_ins="""
# only answer image related question .
# any unrelated question respond:'I dont Know'
# """
# while True:
#     user_ques=input("Ask something about the image:")

#     res=client.responses.create(
#         model="gpt-4.1-mini",
#         input=[
#             {
#                 "role":"user",
#                 "content":[
#                     {
#                         "type":"input_text",
#                         "text":user_ques,
#                     },
#                     {
#                         "type":"input_image",
#                         "image_url":f"data:image/jpeg;base64,{image}",
#                     }
#                 ]
#             }
#         ],
#         instructions=system_ins
#     )
#     print("Agent:",res.output_text)    

load_dotenv()
client=OpenAI()
st.title("Image Agent")
if "chat" not in st.session_state:
    st.session_state.chat=[]
def addchat(role,message):
    st.session_state.chat.append((role,message)) 
upload_file=st.file_uploader(
    "Upload an image",
    type=["jpg","png","jpeg"]
)
if upload_file:
    st.image(upload_file,caption="upload Image")
    image=base64.b64encode(upload_file.getvalue()).decode("utf-8")
    system_ins="""
only answer image related question .
any unrelated question respond:'I dont Know'
"""
    user_ques=st.text_input("Ask something about the image:")
    if user_ques:
        addchat("user",user_ques)
        res=client.responses.create(
            model="gpt-4.1-mini",
            input=[
                {
                    "role":"user",
                    "content":[
                        {
                            "type":"input_text",
                            "text":user_ques,
                        },
                        {
                            "type":"input_image",
                            "image_url":f"data:image/jpeg;base64,{image}",
                        }
                    ]
                }
            ],
            instructions=system_ins
        )
        addchat("assistant",res.output_text)    

        for role,message in st.session_state.chat:
           st.chat_message(role).write(message)
