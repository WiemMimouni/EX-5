import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


// this part

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)




// //Scale
// // mesh.scale.x=2
// // mesh.scale.z=0.5
// // mesh.scale.y=0.5
// mesh.scale.set(2,0.5,0.5)

// //Rotation 
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x =Math.PI * 0.25
// mesh.rotation.y =Math.PI * 0.25

// //position 
// mesh.position.set(0.7 , -0.6 , 1)

// until here 
//we're about to create one group with three cubes inside that group at diffrent positions and thene rotate the hole group so let's start 

// first : we create the group 
const group=new THREE.Group()
group.position.y =1
group.scale.y =2
group.rotation.y =1
//add the group to the scene as usual 
scene.add(group)
//let's create those three cubes  this one we're going to do things diffrently , we're going to create the mesh directly , forget to create the geometry first and then the material here directly creating the mesh , what i can do is instantiate the geometry inside the mesh instantiation
const cube1=  new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1) ,
    new THREE.MeshBasicMaterial({color :0xff0000})

)
group.add(cube1)
const cube2=  new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1) ,
    new THREE.MeshBasicMaterial({color :0x00ff00})

)
cube2.position.x = -2
group.add(cube2)
const cube3=  new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1) ,
    new THREE.MeshBasicMaterial({color :0x0000ff})

)
cube3.position.x = 2
group.add(cube3)





// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)
/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.y = 1
// camera.position.x = 1

scene.add(camera)
// camera.lookAt(new THREE.Vector3(3, 0 ,0))


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)