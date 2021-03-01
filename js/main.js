function start(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({antialias : true});
    renderer.setClearColor(0x000000);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // data gui configuration
    const controls = new function() {
        this.fly = 1.2;
    }
    const gui = new dat.GUI();
    gui.add(controls, 'fly', 0, 4.5);    
    

    // help axis for scene
    const axisHelper = new THREE.AxesHelper(90); 
    scene.add(axisHelper);

    const gridHelper = new THREE.GridHelper();
    scene.add(gridHelper);   


    // make and add plane
    const g__plane = new THREE.PlaneGeometry(4, 4, 1, 1);
    const m__plane = new THREE.MeshBasicMaterial({color: 0xcccccc, side: THREE.DoubleSide});
    const plane = new THREE.Mesh(g__plane, m__plane);
    plane.rotation.x = -1.57;
    plane.position.set(0.1, 0.1, 0.1);
    scene.add(plane);

    // make and add cube
    const g__cube = new THREE.SphereGeometry(0.7, 25, 25);
    const m__cube = new THREE.MeshLambertMaterial({color: 0xcf2d2d});
    const cube = new THREE.Mesh(g__cube, m__cube);
    cube.position.set(1, 1.2, 1);
    
    scene.add(cube);



    // camera conf
    camera.position.set(4, 4, 6);
    camera.lookAt(scene.position);    

    // lighting
    const spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 12, 21, 29 );
    scene.add(spotLight);

    
 
       
    

    function animate() {           
        cube.position.y = controls.fly;

        requestAnimationFrame(animate);
        renderer.render( scene, camera );
    }

    animate();   

    document.body.appendChild( renderer.domElement );
};

start();