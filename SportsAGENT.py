import streamlit as st
from dotenv import load_dotenv
from openai import OpenAI
from datetime import date
today=date.today()

load_dotenv()
client=OpenAI()
st.title("SPORTS AGENT.....")
if "chat" not in st.session_state:
    st.session_state.chat=[]
def addchat(role,message):
    st.session_state.chat.append((role,message))
ques=st.chat_input("Ask about cricket:")
# tools=[{
#     "type":"web_search",
#     "filters":{
#         "allowed_domains":[
#             "cricbuzz.com",
#             "espncricinfo.com"
#         ]
#     }
# }]
if ques:
    addchat("user",ques)
    res=client.responses.create(
        model="gpt-4.1-mini",
        tools=[{"type":"web_search"}],
        # tools=tools,
        tool_choice="required",
        include=["web_search_call.action.sources"],
        instructions="""
        You are a sports assistance.
        Answer only football or cricket releted question.
        for current score,recent result or live matches:
        Always search the web first.
        Prefer reliable sports sources such as cricbuzz and ESPNcricinfo.
        avoid Statz.ai and other secondary cricket sources only use cricbuzz and ESPNcricinfo.
        check the match date carefully. 
        use the newest information available.
        Ignore older results when newer result is available.
""",
        input=f"{today}{ques}"   

    )
    # print(res)
    addchat("assistant",res.output_text)
    for role,message in st.session_state.chat:
        st.chat_message(role).write(message)

