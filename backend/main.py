from flask import Flask, request, jsonify
from flask_cors import CORS 
import time

from utils import simple_query

app = Flask(__name__)
CORS(app) 

@app.route('/api', methods=['GET'])
def request():
    return jsonify(message=f"Hello Speak Journey")

if __name__ == "__main__":
    app.run(debug=True)