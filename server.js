const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const MESSAGES_FILE = path.join(__dirname, 'messages.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Ensure messages.json exists
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2), 'utf8');
}

// Helper to read messages
function getMessages() {
  try {
    const data = fs.readFileSync(MESSAGES_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Helper to save messages
function saveMessages(messages) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf8');
}

// API Endpoint: Submit Contact Message
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'All fields (name, email, message) are required.' 
    });
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      error: 'Please provide a valid email address.' 
    });
  }

  const newMessage = {
    id: 'msg_' + Date.now(),
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    timestamp: new Date().toISOString(),
    ip: req.ip || req.connection.remoteAddress
  };

  const messages = getMessages();
  messages.unshift(newMessage);
  saveMessages(messages);

  console.log(`\n📬 [NEW MESSAGE RECEIVED]`);
  console.log(`From: ${newMessage.name} <${newMessage.email}>`);
  console.log(`Time: ${newMessage.timestamp}`);
  console.log(`Message: "${newMessage.message}"\n`);

  return res.status(201).json({
    success: true,
    message: 'Your message has been received! The portfolio owner has been notified.',
    data: newMessage
  });
});

// API Endpoint: Retrieve All Received Messages
app.get('/api/messages', (req, res) => {
  const messages = getMessages();
  res.json({
    success: true,
    count: messages.length,
    messages: messages
  });
});

// Fallback to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Portfolio Backend Server running at: http://localhost:${PORT}`);
  console.log(`📩 Contact API: http://localhost:${PORT}/api/contact`);
  console.log(`📬 Received Messages API: http://localhost:${PORT}/api/messages`);
  console.log(`====================================================`);
});
