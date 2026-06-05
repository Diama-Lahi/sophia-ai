const API = "https://ia-backend-6mtu.onrender.com";

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = "message " + sender;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.onclick = async () => {
  const msg = input.value.trim();
  if (!msg) return;

  addMessage(msg, "user");
  input.value = "";

  const res = await fetch(API + "/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });

  const data = await res.json();
  addMessage(data.reply, "bot");
};

// Image editing
document.getElementById("edit-btn").onclick = async () => {
  const file = document.getElementById("image-input").files[0];
  const prompt = document.getElementById("image-prompt").value;

  if (!file || !prompt) return alert("Image + prompt obligatoires");

  const form = new FormData();
  form.append("image", file);
  form.append("prompt", prompt);

  const res = await fetch(API + "/image-edit", {
    method: "POST",
    body: form
  });

  const data = await res.json();

  const img = document.createElement("img");
  img.src = "data:image/png;base64," + data.image_base64;
  img.style.width = "100%";

  chatBox.appendChild(img);
};
