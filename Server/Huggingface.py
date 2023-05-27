import requests

def TextSummariser(input_txt):

	payload = {"inputs": input_txt}
	def query(payload, api_token):
		headers = {"Authorization": f"Bearer {api_token}"}
		API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
		response = requests.post(API_URL, headers=headers, json=payload)
		return response.json()
	
	api_token = "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"
	data = query(payload, api_token)
	return data

