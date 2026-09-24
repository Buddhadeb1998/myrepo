# from dotenv import load_dotenv
# from openai import OpenAI
# import json
# from reportlab.pdfgen import canvas
# from pypdf import PdfReader
# load_dotenv()
# client=OpenAI()
# def savefile(filename:str,content:str)->str:
#     pdf=canvas.Canvas(f"./Agent/{filename}.pdf")
#     pdf.drawString(100,750,content)
#     pdf.save()
#     return "file created"
# def readFile(filename:str):
#     reader=PdfReader(f"./Agent/{filename}.pdf")
#     text=""
#     for page in reader.pages:
#         text=text+page.extract_text() or ""
#     return text
# # def addcontent(filename:str,content:str):
# #     old=readFile(filename)
# #     new=old+"\n"+content
# #     return savefile(filename,new)
# tools=[
#     {
#         "type":"function",
#         "name":"savefile",
#         "description":"create a India.pdf file in local system",
#         "parameters":{
#             "type":"object",
#             "properties":{
#                 "content":{
#                     "type":"string",
#                     "description":"content to write the pdf"
#                 },
#                 "filename":{
#                     "type":"string",
#                     "description":"Name of pdf file"
#                 }
#             },
#             "required":["content","filename"]
#         }
#     },
#     {
#             "type":"function",
#             "name":"readFile",
#             "description":"reading a text from pdf file",
#              "parameters":{
#             "type":"object",
#             "properties":{
#                 "filename":{
#                     "type":"string",
#                     "description":"Name of the pdf file to read"
#                 }
#             },
#             "required":["filename"]
#         }
#     }
        
# ] 
# system_inform="""
# only answer this pdf question .
# pdf file name without .pdf.
# create/add pdf=use savefile.
# read/show pdf=use readfile()
# normal question=answer directly dont offer to create pdf
# for nomal question don't use savefile .
# do not ask any confirmation.
# any unreleted question respond:'I dont Know'
# """ 
# message=[]
# while True:
#     user_input=input("YOU:")
#     if user_input.lower() in ["Exit","quit"]:
#         print("AGENT:BYE..")
#     message.append({
#         "role":"user",
#          "content":user_input
#     }    
#     ) 
#     res=client.responses.create(
#         model="gpt-4.1-mini",
#         instructions=system_inform,
#         input=message,
#         tools=tools
#     )  
#     for item in res.output:
#         if item.type=="function_call":
#             arguments=json.loads(item.arguments)
          
#             if item.name=="savefile":
#               filename=arguments["filename"]
#               content=arguments["content"] 
#               result=savefile(filename,content)
#             elif item.name=="readFile":
#                 filename=arguments["filename"]
#                 result=readFile(filename) 
#             print("AGENT:",result)         
#         else:
#             print("AGENT:",res.output_text)  
# 

from dotenv import load_dotenv
from openai import OpenAI
from reportlab.pdfgen import canvas
from pypdf import PdfReader
import json

load_dotenv()
client=OpenAI()
def savefile(filename:str,content:str):
    pdf=canvas.Canvas(f"./Agent/{filename}.pdf")
    pdf.drawString(100,750,content)
    pdf.save()
    return "file created"
def readfile(filename:str):
  reader=PdfReader(f"./Agent/{filename}.pdf")
  text=""
  for item in reader.pages :
     text=text+item.extract_text()
  return text
tools=[
   {
      "type":"function",
      "name":"savefile",
      "description":"generate or create pdf file local system ",
      "parameters":{
         "type":"object",
         "properties":{
            "filename":{
               "type":"string",
               "description":"create pdf without .pdf",
            },
            "content":{
               "type":"string",
               "description":"content to write pdf",
            }
         },
         "required":["filename","content"]
      }
   },
      {
      "type":"function",
      "name":"readfile",
      "description":"read a text from pdf file",
      "parameters":{
         "type":"object",
         "properties":{
            "filename":{
               "type":"string",
               "description":"pdf file to read",
            }
           
         },
         "required":["filename"]
      }
   }
]
system_ins="""
create or generate of pdf without .pdf
create/add=use savefile
read/show=use readfile
normal question answer dont call savefile
only pdf related answer otherwise you tell 'I dont know'.
any unrelated question say 'I dont know'

"""  
message=[]
while True:
   user_input=input("YOU:")
   if user_input.lower() in ["exit"]:
      print("AGENT:BYE...")
      exit()
   else:
      message.append({
         "role":"user",
         "content":user_input
      }) 
      res=client.responses.create(
         model="gpt-4.1-mini",
         instructions=system_ins,
         input=message,
         tools=tools
      ) 
      for item in res.output:
         if item.type=="function_call":
            arguments=json.loads(item.arguments)
            if item.name=="savefile":
               filename=arguments["filename"]
               content=arguments["content"]
               result=savefile(filename,content)
            elif item.name=="readfile":
               filename=arguments["filename"]
               result=readfile(filename)
            print("AGENT:",result)  
         else:
            print("AGENT:",res.output_text)  
   

