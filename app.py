from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import ssl
import os

app = Flask(__name__)
CORS(app)  # ✅ THIS IS REQUIRED

# Keyword → URL mapping
PROMPT_URL_MAP = {
    "hospital": "https://prakruthihospital.com",
    "manufacture": "https://nexus-analysis.com/",
    "portfolio": "https://portfolio-example.com",
    "education": "https://education-example.com",
    "real estate": "https://realestate-example.com",
    "restaurant": "https://restaurant-example.com",
    "travel": "https://travel-example.com",
    "finance": "https://finance-example.com",
    "blog": "https://blog-example.com",
    "startup": "https://startup-example.com"
}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    user_prompt = data.get("prompt", "").lower()

    print("USER PROMPT:", user_prompt)

    for keyword in PROMPT_URL_MAP:
        if keyword in user_prompt:
            return jsonify({
                "status": "success",
                "keyword": keyword,
                "url": PROMPT_URL_MAP[keyword]
            })

    return jsonify({
        "status": "error",
        "message": "No matching website found"
    })

if __name__ == "__main__":
    # Use Flask's built-in ad-hoc SSL certificate for development
    app.run(host="0.0.0.0", port=5000, debug=True, ssl_context="adhoc")
