from dotenv import load_dotenv
from openai import OpenAI
import sqlite3
import json

load_dotenv()
client=OpenAI()
def execquery(query:str):
    con=sqlite3.connect("./PracticeCrud/Crud.db")
    cursor=con.cursor()
    cursor.execute(query)
    if query.upper().startswith("SELECT"):
        data=cursor.fetchall()
        if data:
            return str(data)
        else:
            print("data didnot found")
    else:
        con.commit()
        return "query execute successfully"  
    
tools=[
    {
      "type":"function",
      "name":"execquery",
      "description":"execute sql quries Select,insert,update,delete",
      "parameters":{
          "type":"object",
          "properties":{
              "query":{
                  "type":"string",
                  "description":"sql query execute",
              }
          },
          "requried":["query"]
      }
    }
]   
system_instru="""
only execute these table:
Employees(eid,name,email,phone)
Departments(did,name,salary)
Enroll_emp(enroll_emp,empid,depid,status)
Insert:
if user execute insert query dont ask id. 
if user execute insert query only execute insert query ,dont execute select,update,delete query.
direct insert doesn't any confrimation from user.
doesnot matter uppercase and lowercase
Update:
if user execute update query,id doesnot mention then ask id.
if user execute update query only execute update  query ,dont execute select,insert,delete query.
doesnot matter uppercase and lowercase
Delete:
if user execute delete query,id doesnot mention then ask id.
if user execute delete query only execute delete query,dont execute select,insert,update query.
doesnot matter uppercase and lowercase
Enroll:
if user Employee id provided then used it.
if user Employee name then search eid
if user Department name then search did
if same Employee name are present Employees table then ask id, id doesn't present dont execute query.
Exact same name are match then execute query doesnot matter uppercase and lowercase.
and both are insert Enroll_emp table.
INNER JOIN:
if the user ask data more then one related table use inner join.
Employees connectes Enroll_emp:
Employees.eid=Enroll_emp.empid
Departments connectes Enroll_emp:
Departments.did=Enroll_emp.depid
dont ask empid,did
doesnot matter uppercase and lowercase
duplicate Enroll:
if user same Employee name and same department name does not execute
Enroll_emp table.
status:
find the status then use Employess.eid=Enroll_emp.empid
Employee details:
if user say employee details first check Employee name,if only one Employee name show details. 
if multiple employees same name have ask eid .
do not ask id before searching Employees
doesnot matter uppercase and lowercase
Enroll details:
If user ask Enroll details used inner join.
show employee name,department name and status.
Employees.eid=Enroll_emp.empid
Departments.did=Enroll_emp.depid
do not ask id before searching Employees
dont ask empid,did
doesnot matter uppercase and lowercase
last data Employess:
user ask last data:
select * from Employees order by eid desc limit 1.
doesnot matter uppercase and lowercase
last data Enroll_emp:
select Employee name department name and status.
use:
Employees.eid=Enroll_emp.empid
Departments.did=Enroll_emp.depid
doesnot matter uppercase and lowercase

any unrelated question respond:'I dont know'.

"""  
def runquery(message):
    while True:
        res=client.responses.create(
            model="gpt-4.1-mini",
            instructions=system_instru,
            input=message,
            tools=tools

        )
        for item in res.output:
            if item.type=="function_call":
                arguments=json.loads(item.arguments)
                query=arguments["query"]
                result=execquery(query)
                message.append(item)
                message.append({
                    "type":"function_call_output",
                    "call_id":item.call_id,
                    "output":str(result)
                })
                break
        else:
            return res.output_text
message=[]
while True:
    user_input=input("YOU:")
    if user_input.lower() in ["exit","quit"]:
        print("AGENT:BYE...")
        break
    else:
        message.append({
            "role":"user",
            "content":user_input
        })
        answer=runquery(message)
        print("AGENT:",answer)
