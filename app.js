const chatContainer = document.getElementById('chat-container');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

const API_URL = 'https://ia-backend-6mtu.onrender.com/chat';

function getCurrentTime() {
    const now = new Date();
    return now.getHours().toString().padStart(2, '0') + ':' + 
           now.getMinutes().toString().padStart(2, '0');
}

function addMessage(text, sender, images = []) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    // Avatar pour Sophia
    if (sender === 'bot') {
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = '💕';
        messageDiv.appendChild(avatar);
    }
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.innerHTML = text.replace(/\n/g, '<br>');
    contentDiv.appendChild(textDiv);
    
    // Ajoute les images si présentes
    if (images && images.length > 0) {
        images.forEach(img => {
            const imgElement = document.createElement('img');
            imgElement.src = img.url;
            imgElement.alt = img.description;
            imgElement.className = 'message-image';
            imgElement.onclick = () => window.open(img.url, '_blank');
            contentDiv.appendChild(imgElement);
        });
    }
    
    // Heure du message
    const timeDiv = document.createElement('div');
    timeDiv.className = 'message-time';
    timeDiv.textContent = getCurrentTime();
    contentDiv.appendChild(timeDiv);
    
    messageDiv.appendChild(contentDiv);
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot';
    typingDiv.id = 'typing-indicator';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = '💕';
    typingDiv.appendChild(avatar);
    
    const typingContent = document.createElement('div');
    typingContent.className = 'typing';
    typingContent.innerHTML = '<span></span><span></span><span></span>';
    typingDiv.appendChild(typingContent);
    
    chatContainer.appendChild(typingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function removeTyping() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
}

async function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;
    
    addMessage(message, 'user');
    messageInput.value = '';
    
    // Affiche l'indicateur de frappe
    showTyping();
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        
        const data = await response.json();
        
        // Retire l'indicateur de frappe
        removeTyping();
        
        if (data.reply) {
            // Affiche la réponse avec les images
            addMessage(data.reply, 'bot', data.images || []);
        } else if (data.error) {
            addMessage('Erreur: ' + data.error, 'bot');
        }
    } catch (error) {
        removeTyping();
        addMessage('Erreur de connexion. Réessaie plus tard, mon amour. 💕', 'bot');
    }
}

sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Focus automatique sur l'input au chargement
window.addEventListener('load', () => {
    messageInput.focus();
});
