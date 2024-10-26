

// Function to create and render 3D models for each shoe
function createShoeModel(canvasId, color) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector(#${canvasId}) });

    renderer.setSize(300, 300);
    camera.position.z = 2;

    // Placeholder geometry (3D model), replace this with actual shoe models later
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const shoe = new THREE.Mesh(geometry, material);
    scene.add(shoe);

    // Rotation animation
    function animate() {
        requestAnimationFrame(animate);
        shoe.rotation.x += 0.01;
        shoe.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
}

// Call the function for each shoe (change colors for demonstration)
createShoeModel('shoe1-canvas', 0xff0000); // Red shoe (Nike Air Max)
createShoeModel('shoe2-canvas', 0x00ff00); // Green shoe (Nike Air Jordan)
createShoeModel('shoe3-canvas', 0x0000ff); // Blue shoe (Nike React Infinity)