# from pypdf import PdfReader
# from openai import OpenAI
# from dotenv import load_dotenv
# from tkinter.filedialog import askopenfilename
# load_dotenv()
# client=OpenAI()
# pdf=askopenfilename()
# reader=PdfReader(pdf)
# # reader=PdfReader("sample.pdf")
# text=""
# for page in reader.pages:
#     text=text+page.extract_text()
# print("pdf load successfully") 
# message=[]  
# while True:
#    user_ques=input("Ask your question:")
#    message.append(
#        {
#        "role":"user",
#        "content":user_ques
#        } 
#    )
#    res=client.responses.create(
#     model="gpt-4.1-mini",
#     # instructions=f"Answer only pdf question.outside the pdf question resond:'I dont know' Pdf Content:{text}",
#     input=[{
#         "role":"system",
#         "content":f"only answer pdf question.outside the pdf question resond:'I dont know' Pdf Content:{text}",
#     },
#     {
#       "role":"user",
#       "content":user_ques
#     }
#     ]  
# )
#    print("Agent:",res.output_text)
#    message.append({
#        "role":"assistant",
#        "content":res.output_text
#    })

from pypdf import PdfReader
from openai import OpenAI
from dotenv import load_dotenv
import streamlit as st
# from tkinter.filedialog import askopenfilename

load_dotenv()
client=OpenAI()
st.title("AI PDF Reader")
if "chat" not in st.session_state:
   st.session_state.chat=[]
def addchat(role,message):
  st.session_state.chat.append((role,message))   

pdf=st.file_uploader("Upload Pdf",type="pdf")
if pdf:
  reader=PdfReader(pdf)
  text=""
  for page in reader.pages:
    text=text+page.extract_text()
  st.success("Pdf read Successfully")
     
  user_input=st.chat_input("Ask your question:")
  if st.button("Exit"):
     st.write("Goodbye!!!")
     st.stop()
  if user_input:
        addchat("user",user_input)
        res=client.responses.create(
        model="gpt-4.1-mini",
        instructions=f"only answer the pdf question.Any Unreleted question respond:'I Dont Know' Content={text}",
        input=user_input,
 
    ) 
        addchat("assistant",res.output_text) 
        for role,message in st.session_state.chat:
          st.chat_message(role).write(message)
 
