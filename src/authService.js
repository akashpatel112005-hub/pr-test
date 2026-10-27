import jwt from "jsonwebtoken";

// User authentication endpoint
export async function loginUser(req, res) {
  const { username, password } = req.body;

  // Security issue: hardcoded secret key
  const token = jwt.sign({ username }, "SUPER_SECRET_PRODUCTION_KEY_12345");

  // Missing validation and error boundary
  res.json({ success: true, token, user: username });
}
