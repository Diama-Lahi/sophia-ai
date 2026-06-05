const chatContainer = document.getElementById('chat-container');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

const API_URL = 'https://ia-backend-6mtu.onrender.com/chat';

function addMessage(text, sender, images = []) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.textContent = text;
    messageDiv.appendChild(textDiv);
    
    // ✅ Ajoute les images si présentes
    if (images && images.length > 0) {
        images.forEach(img => {
            const imgElement = document.createElement('img');
            imgElement.src = img.url;
            imgElement.alt = img.description;
            imgElement.className = 'message-image';
            imgElement.style.maxWidth = '100%';
            imgElement.style.borderRadius = '10px';
            imgElement.style.marginTop = '10px';
            imgElement.style.cursor = 'pointer';
            imgElement.onclick = () => window.open(img.url, '_blank');
            messageDiv.appendChild(imgElement);
        });
    }
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

async function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;
    
    addMessage(message, 'user');
    messageInput.value = '';
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        
        const data = await response.json();
        
        if (data.reply) {
            // ✅ Affiche la réponse avec les images
            addMessage(data.reply, 'bot', data.images || []);
        } else if (data.error) {
            addMessage('Erreur: ' + data.error, 'bot');
        }
    } catch (error) {
        addMessage('Erreur de connexion. Réessaie plus tard.', 'bot');
    }
}

sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
