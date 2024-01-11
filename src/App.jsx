import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"
import { useState, useEffect } from "react"
import LoadingScreen from "./components/LoadingScreen"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; // Import GLTFLoader from three.js




const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      // Use three.js GLTFLoader to load a 3D model (replace 'path/to/your/model.glb' with your model's path)
      const loader = new GLTFLoader();
      const modelPromise = new Promise((resolve) => {
        loader.load('./cyber_djinn/scene.gltf', (gltf) => {
          // You can use the loaded GLTF object if needed
          resolve(gltf);
        });
      });

      await Promise.all([modelPromise]);

      setLoading(false);
    };

    fetchData();
  }, []);


  return (
    <BrowserRouter>
      {<LoadingScreen loading={loading} />}
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="relative z-0">
          <Hero loading={loading} />
          <StarsCanvas />
        </div>

        <About />
        <Experience />
        <Works />
        <Feedbacks />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
