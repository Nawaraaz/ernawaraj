// Particle Background Animation
const canvas = document.getElementById('background');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create particles
const particleCount = 5000;
const particles = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100; // Random positions
}

particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// Create material for particles
const particleMaterial = new THREE.PointsMaterial({ color: 0x00ff00, size: 0.5 });
const particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);

camera.position.z = 50;

function animateParticles() {
    requestAnimationFrame(animateParticles);
    particleSystem.rotation.y += 0.001; // Rotate the particles
    renderer.render(scene, camera);
}

// Resize listener
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

animateParticles();

// Existing code for terminal
document.addEventListener('DOMContentLoaded', function () {
    const welcomeText = "Welcome to Nawaraj's Portfolio! Type a command or click a link:";
    const speed = 50; 
    let i = 0;
    
    function typeText() {
        if (i < welcomeText.length) {
            document.getElementById('welcome-text').innerHTML += welcomeText.charAt(i);
            i++;
            setTimeout(typeText, speed);
        }
    }
    
    typeText();

    const commandInput = document.getElementById('command-input');
    commandInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            handleCommand(commandInput.value.trim().toLowerCase());
            commandInput.value = ''; 
        }
    });

    const links = document.querySelectorAll('a[data-command]');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            handleCommand(this.dataset.command);
        });
    });
    // Existing code for particle background

// Existing code for terminal
document.addEventListener('DOMContentLoaded', function () {
    const welcomeText = "Welcome to Nawaraj's Portfolio! Type a command or click a link:";
    const speed = 50; 
    let i = 0;
    
    function typeText() {
        if (i < welcomeText.length) {
            document.getElementById('welcome-text').innerHTML += welcomeText.charAt(i);
            i++;
            setTimeout(typeText, speed);
        }
    }
    
    typeText();

    // Existing command handling code...
});


    function handleCommand(command) {
        const output = document.getElementById('terminal-output');

        switch (command) {
            case 'home':
                window.location.href = 'home.html';
                break;
            case 'about':
                window.location.href = 'about.html';
                break;
            case 'projects':
                window.location.href = 'project.html';
                break;
            case 'socials':
                window.location.href = 'social.html';
                break;
            case 'contact':
                window.location.href = 'contact.html';
                break;
            default:
                output.innerHTML = 'Command not recognized. Try "home", "about", "projects", "socials", or "contact".';
        }

        output.innerHTML += `<p>&gt; ${command}</p><p>${response}</p>`;
        output.scrollTop = output.scrollHeight; 
    }
});
