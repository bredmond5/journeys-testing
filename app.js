// Counter state
let counter = 0;

// Greeting function
function greetUser() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    const result = document.getElementById('result');
    const greetingText = document.getElementById('greetingText');

    if (name === '') {
        greetingText.textContent = 'Please enter your name!';
    } else {
        const greetings = [
            `Hello, ${name}! Welcome to Journeys Testing! 👋`,
            `Hey there, ${name}! Great to see you! 🎉`,
            `Greetings, ${name}! Hope you're having a wonderful day! ✨`,
            `Welcome aboard, ${name}! Let's explore together! 🌟`
        ];
        
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        greetingText.textContent = randomGreeting;
    }

    result.classList.add('show');
}

// Counter functions
function incrementCounter() {
    counter++;
    updateCounterDisplay();
}

function decrementCounter() {
    counter--;
    updateCounterDisplay();
}

function resetCounter() {
    counter = 0;
    updateCounterDisplay();
}

function updateCounterDisplay() {
    const counterValue = document.getElementById('counterValue');
    counterValue.textContent = counter;
    
    // Add a little animation
    counterValue.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterValue.style.transform = 'scale(1)';
    }, 200);
}

// Allow Enter key to submit greeting
document.getElementById('nameInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        greetUser();
    }
});

// Add smooth transition to counter value
document.getElementById('counterValue').style.transition = 'transform 0.2s ease';

console.log('🚀 Journeys Testing app loaded successfully!');
