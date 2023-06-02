from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import Transformers

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
cors = CORS(app, resource={
    r"/get_data":{
        "origins":"*"
    },
    r"/post_data":{
        "origins":"*"
    }
})
@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    return response

@app.route('/get_data', methods=['GET'])
@cross_origin()
def get_data():
    data = {'message': 'This is the GET endpoint'}
    return jsonify(data)

@app.route('/post_data', methods=['POST'])
@cross_origin()
def post_data():
    data = request.get_json()
    # print(data)
    url = data.get('url')
    # print(url)
    print("HuggingFace...")
    print(url)
    text = Transformers.urlParse(url)
    response = {'summary_text' : text}
    print(response)
    print("Output...")
    return jsonify(response)

if __name__ == "__main__":
    app.run(host='localhost', port=8000, debug=True)