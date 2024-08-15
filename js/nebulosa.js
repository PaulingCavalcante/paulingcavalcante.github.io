const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Adicionei antialias para suavizar as bordas

// Ajuste o tamanho do canvas para a viewport
function resizeRenderer() {
    const canvas = document.getElementById("nebula")

    let width = canvas.clientWidth - 10;
    let height = canvas.clientHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

// Inicialize o tamanho correto do canvas
resizeRenderer();
document.getElementById('nebula').appendChild(renderer.domElement);

const starsGeometry = new THREE.BufferGeometry();
const starCount = 4000;
const positions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
}

starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1,
    transparent: true,
    opacity: 1,
});

const starField = new THREE.Points(starsGeometry, starsMaterial);
scene.add(starField);

camera.position.z = 1000;

function animate() {
    requestAnimationFrame(animate);

    starField.rotation.x += 0.0005;
    starField.rotation.y += 0.0005;

    renderer.render(scene, camera);
}

animate();

// Atualize o tamanho do canvas quando a janela for redimensionada
window.addEventListener('resize', resizeRenderer);