# [START app]
import logging
import os
import subprocess
import shlex
import tempfile
import shutil
import time
from shutil import copyfile
#from flask import Flask, jsonify, request
import flask_cors
from flask import Flask, jsonify, request, redirect, url_for
from werkzeug.utils import secure_filename

import sqlite3
import json
from sqlite3 import Error


app = Flask(__name__)
#Request = app(__Flask__)
flask_cors.CORS(app)
conn = sqlite3.connect('IOTmanagement.db')
conn.row_factory= 0
time.sleep(5)
@app.route('/')
def start():
    return "Hello Chandan !!!"
   

def dict_factory(cursor,row):
    
    d={}
    for idx,col in enumerate(cursor.description):
        d[col[0]]=row[idx]

    return d    
        


@app.route('/getProfile', methods=['GET'])
def createProfile():
    print "I m inside create Profile"
    #data=request.get_json()
    

    #hi
    #createtable()
    #jsondata=json.dumps(data)
    #dict1 = json.loads(jsondata)
    #print dict1['Userid']
    
    #insertion(dict1)
    #fetch(dict1)
    
    return "Profile created Successfully"

@app.route('/createUserProfile', methods=['POST'])
def createUserProfile():
    print "I m inside create user Profile"
    
    data=request.get_json()
    print data;

    #hi
    createtable()
    jsondata=json.dumps(data)
    dict1 = json.loads(jsondata)
   #print dict1['Userid']
    
    insertionUserdata(dict1)
    fetch(dict1)
    
    return "User Profile created Successfully"

@app.route('/createDeviceProfile', methods=['POST'])
def createDeviceProfile():
    print "I m inside create device Profile"
    
    data=request.get_json()
    print data;

    #hi
    createdevicetable()
    jsondata=json.dumps(data)
    dict1 = json.loads(jsondata)
    print dict1['Deviceid']
    
    insertionDevicedata(dict1)
    #fetch(dict1)
    
    return "Device Profile created Successfully"


@app.route('/fetchUserProfile/<userId>',methods=['GET'])
def fetchingUserProfile(userId):	
 		x=fetchUserProfile(userId)
                response = app.response_class(
                	response=json.dumps(x),
                	status=200,
                	mimetype='application/json'
                 	)
                
         	return response
 
@app.route('/fetchDeviceProfile/<deviceId>',methods=['GET'])
def fetchingDeviceProfile(deviceId):	
 		x=fetchDeviceProfile(deviceId)
                response = app.response_class(
                	response=json.dumps(x),
                	status=200,
                	mimetype='application/json'
                 	)
                
         	return response


@app.route('/modifyUserProfile/<userId>',methods=['POST'])
def modifyingUserProfile(userId):
	data = request.get_json()
	updateUserProfile(data,userId);

	return "User Profile updated Successfully"


@app.route('/modifyDeviceProfile/<deviceId>',methods=['POST'])
def modifyingDeviceProfile(deviceId):
	data = request.get_json()
	updateDeviceProfile(data,deviceId);

	return "User Profile updated Successfully"


@app.route('/deleteuser/<userId>', methods=['DELETE'])
def deletingUserProfile(userId):
	c=conn.cursor()        
	c.execute('DELETE from UserProfile WHERE Userid = ?', [userId])
        return "User Profile with userId " +userId +" deleted Successfully"


@app.route('/deletedevice/<deviceId>', methods=['DELETE'])
def deletingDeviceProfile(deviceId):
	c=conn.cursor()        
	c.execute('DELETE from DeviceProfile WHERE Deviceid = ?', [deviceId])
	statement = 'Device Profile with DeviceiD =' + deviceId +' deleted Successfully'
	print statement
        return statement 


@app.route('/displayusers', methods=['GET'])
def print_users():
    
    c=conn.cursor()

    c.execute('SELECT * FROM UserProfile')
    rows = c.fetchall()
    
    print rows



    

    	#a.append(row)
    
     
    response = app.response_class(
                	response=json.dumps(rows),
                	status=200,
                	mimetype='application/json'
                 	)
              
    return response


@app.route('/displaydevices', methods=['GET'])
def print_devices():
    
    c=conn.cursor()
    c.execute('SELECT * FROM DeviceProfile')
    rows = c.fetchall()
    #"Userid":"1729", "FirstName": "Eden", "LastName": "Hazard", 
    #"Contact": 6318201978, "Emailid" : "eden.hazard@stonybrook.com", "UserCategory" : "Student" }
    print rows


    a=[]
    for row in rows:
        print row
    	a.append(row)
    
     
    response = app.response_class(
                	response=json.dumps(a),
                	status=200,
                	mimetype='application/json'
                 	)
                
    return response



@app.errorhandler(500)
def server_error(e):

    logging.exception('An error occurred during a request.')
    return 'An internal error occurred.', 500
# [END app]






def create_connection(db_file):
    
    conn.commit()
     
  

def createtable():
    c=conn.cursor()
    c.execute('''
    CREATE TABLE IF NOT EXISTS UserProfile (
        Userid TEXT ,FirstName TEXT, LastName TEXT, Contact INTEGER, Emailid TEXT,UserCategory TEXT,PRIMARY KEY(Userid));
     ''')
    conn.commit()
    print "hello"

def createdevicetable():
    c=conn.cursor()
    c.execute('''
    CREATE  TABLE IF NOT EXISTS DeviceProfile (
        Deviceid TEXT ,DeviceName TEXT, DeviceLocation TEXT, AccessPermission INTEGER,Status TEXT,PRIMARY KEY(Deviceid));
     ''')
    conn.commit()
    print "hello"

def insertionUserdata(data):
    
    
    cur = conn.cursor()
    print data
    #print dict1
    # cur.execute("INSERT INTO UserProfile VALUES ('abcd','chandan','sharma','22222','x@gmail.com')");

    userid=data['Userid']
    firstname=data['FirstName']
    lastname=data['LastName']
    contact=data['Contact']
    emailid=data['Emailid']
    usercategory= data['UserCategory']	
    cur.execute('INSERT INTO UserProfile (Userid,FirstName,LastName,Contact,Emailid,UserCategory) VALUES(?,?,?,?,?,?)',(userid,firstname,lastname,contact,emailid,usercategory))
    conn.commit()
    print "User Record created successfully"


def insertionDevicedata(data):
    
    
    cur = conn.cursor()
    print data
    deviceid=data['Deviceid']
    devicename=data['DeviceName']
    devicelocation = data['DeviceLocation']
    status = data['Status']
    accesspermission= data['AccessPermission']	
    accesspermission=','.join(accesspermission)
    cur.execute('INSERT  OR IGNORE INTO DeviceProfile (Deviceid,DeviceName,DeviceLocation,AccessPermission,Status) VALUES(?,?,?,?,?)',(deviceid,devicename,devicelocation,accesspermission,status))
    conn.commit()
    print "Device Record created successfully"


def updateUserProfile(data,userId):   
    cur = conn.cursor()

    firstname=data['FirstName']
    lastname=data['LastName']
    contact=data['Contact']
    emailid=data['Emailid']
    usercategory= data['UserCategory']	

    cur.execute('UPDATE UserProfile SET FirstName=?,LastName=?,Contact=?,Emailid=?,UserCategory=? WHERE Userid=?',(firstname,lastname,contact,emailid,usercategory,userId,))
    print (cur.fetchone)
    conn.commit()  	
  	

def updateDeviceProfile(data,deviceid):   
    cur = conn.cursor()

    devicename=data['DeviceName']
    devicelocation = data['DeviceLocation']
    accesspermission= data['AccessPermission']	

    cur.execute('UPDATE DeviceProfile SET DeviceName=?,DeviceLocation=?,AccessPermission=? WHERE Deviceid=?',(devicename,devicelocation,accesspermission,deviceid,))
    print (cur.fetchone)
    conn.commit()  	



def fetch(data):
   
    userid=data['Userid']
    c=conn.cursor()
    c.execute('SELECT * FROM UserProfile WHERE Userid =?', (userid,))
    
    print(c.fetchone())
    conn.commit()


def fetchUserProfile(userid):
   
    
    c=conn.cursor()
    c.execute('SELECT * FROM UserProfile WHERE Userid =?', (userid,))
    jsonData=c.fetchone()
    print(c.fetchone())
    print('I reached here') 
    conn.commit()
    jData={}
    jData['Userid']=jsonData[0]
    jData['FirstName']=jsonData[1]
    jData['LastName']=jsonData[2]
    jData['Contact']=jsonData[3]
    jData['Emailid']=jsonData[4]
    jData['UserCategory']=jsonData[5]
    

    
    return jData  


def fetchDeviceProfile(deviceid):
   
    
    c=conn.cursor()
    c.execute('SELECT * FROM DeviceProfile WHERE Deviceid =?', (deviceid,))
    jsonData=c.fetchone()
    print(c.fetchone())
    print('I reached here') 
    conn.commit()
    jData={}
    jData['Deviceid']=jsonData[0]
    jData['DeviceName']=jsonData[1]
    jData['DeviceLocation']=jsonData[2]
    jData['AccessPermission']=jsonData[3]
    
    

    
    return jData  


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    conn.row_factory=dict_factory
    app.run(host='0.0.0.0', port=port)
 


