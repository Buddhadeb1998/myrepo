from openai import OpenAI
from dotenv import load_dotenv
from reportlab.pdfgen import canvas
import streamlit as st
from pypdf import PdfReader
import os

# load_dotenv()
# client=OpenAI()

# name=input("Name:")
# email=input("Email:")
# phone=input("phone:")
# address=input("Address:")
# education=input("Education:")
# experience=input("Experience:")
# skills=input("skills:")
# project=input("Project:")

# prompt=f""" create a simple professionl ats friendly cv 
# Name:{name}
# Email:{email}
# Phone:{phone}
# Address:{address}
# Education:{education}
# Experience:{experience}
# Skills:{skills}
# Project:{project}
# Do not add any information that i did not provided 
# """
# res=client.responses.create(
#     model="gpt-4.1-mini",
#     input=prompt
# )
# cv=res.output_text
# pdf=canvas.Canvas("cv.pdf")
# y=800
# for line in cv.split("\n"):
#     pdf.drawString(50,y,line)
#     y=y-20
# pdf.save()
# reader=PdfReader("cv.pdf")
# text=""
# for page in reader.pages:
#     text=page.extract_text()
# print(text)    
# print("cv created successfully") 


# from openai import OpenAI
# from dotenv import load_dotenv
# import streamlit as st
# import os
# from reportlab.pdfgen import canvas
# from reportlab.pdfbase.pdfmetrics import stringWidth
# load_dotenv()
# client=OpenAI()
# st.title("CV Builder!!!...")
# name=st.text_input("Name:")
# email=st.text_input("Email:")
# phone=st.text_input("Phone:")
# address=st.text_area("Address:")
# education=st.text_input("Education:")
# experience=st.text_area("Experience:")
# skills=st.text_area("Skills:")
# project=st.text_area("Project:")

# if st.button("Generate CV"):
#     prompt=f"""
# Create Professional ats score friendly Cv
# Name:{name}
# Email:{email}
# Phone:{phone}
# Address:{address}
# Education={education}
# Experience={experience}
# Skills={skills}
# Project={project}
# Use these section names only:
# EDUCATION
# EXPERIENCE
# SKILLS
# PROJECTS
# do not use markdown symbols such as ###,** or ---
# dont add any other information that i did not provide
# """
#     res=client.responses.create(
#     model="gpt-4.1-mini",
#     input=prompt
# )
#     cv=res.output_text
#     st.subheader("Generate CV")
#     st.text_area("CV",cv,height=400)
#     # path=os.path.join(os.path.dirname(__file__),"Cv.pdf")
#     pdf=canvas.Canvas("Cv.pdf")
#     y=800
#     pdf.setFont("Helvetica-Bold",18)
#     name_width=stringWidth(name,"Helvetica-Bold",18)
#     x=(595-name_width)/2

#     pdf.drawString(x,y,name)
#     y=y-30
#     for line in cv.split("\n"):
#         if line.strip()==name.strip():
#            continue
#         if line in ["Education","Experience","Skills","Project"]:
#             pdf.setFont("Helvetica-Bold",12)
#         else:
#             pdf.setFont("Helvetica-Bold",10)
#         pdf.drawString(50,y,line)
#         y=y-20    
#     pdf.save()    
   
#     with open("Cv.pdf","rb") as file:
#         st.download_button(
#             label="Download CV",
#             data=file,
#             file_name="Cv.pdf",
#             mime="application/pdf"
#         ) 

load_dotenv()
client=OpenAI()

name=st.text_input("Name:")
phone=st.text_input("Phone:")
email=st.text_input("Email:")
education=st.text_input("Education:")
experience=st.text_area("Experience:")
address=st.text_area("Address:")
skills=st.text_area("Skills:")
Project=st.text_area("Project:")

prompt=f"""
create Professional ats score friendly cv
Name:{name}
Email:{email}
Phone:{phone}
Education:{education}
Experience:{experience}
Skills:{skills}
Project:{Project}
do not use any markdown symbols like ###,---.
donot use any extra field and any unrelated suggestion do not provided.
"""
if st.button("Generate Cv"):
    res=client.responses.create(
        model="gpt-4.1-mini",
        input=prompt
    )
    cv=res.output_text
    st.text_area("CV",cv,height=400)
    pdf=canvas.Canvas("Cv.pdf")
    y=800
    for line in cv.split("\n"):
        pdf.drawString(50,y,line)
        y=y-20
    pdf.save()    
    with open("Cv.pdf","rb") as file:
        st.download_button(
            label="Download Cv",
            data=file,
            file_name="Cv.pdf",
            mime="application/pdf"
        )

