export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { prompt } = req.body;
  const userPrompt = prompt.toLowerCase();

  // Keyword → URL mapping
  const PROMPT_URL_MAP = {
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
  };

  console.log("USER PROMPT:", userPrompt);

  for (const keyword in PROMPT_URL_MAP) {
    if (userPrompt.includes(keyword)) {
      return res.status(200).json({
        status: "success",
        keyword: keyword,
        url: PROMPT_URL_MAP[keyword]
      });
    }
  }

  res.status(200).json({
    status: "error",
    message: "No matching website found"
  });
}
