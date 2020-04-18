from flask import Flask, request, json, jsonify

app = Flask(__name__)

@app.route('/') 
def index():
    return'Hello'

