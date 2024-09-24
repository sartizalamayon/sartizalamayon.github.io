import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const Avatar = () => {
    const gltf = useLoader(GLTFLoader, "/hoodie.glb");
    const avatarRef = useRef();

    useFrame(() => {
        if (avatarRef.current) {
            avatarRef.current.rotation.y += 0.01;
        }
    });

    return <primitive ref={avatarRef} object={gltf.scene} scale={1.5} />;
};

const MyAvatar = () => {
    return (
        <div className="relative flex items-center justify-center xs:w-[250px] xs:h-[250px] w-[300px] h-[300px] lg:w-[360px] lg:h-[550px] overflow-visible">
            {/* Rotating blurred concentric circles */}
            <div className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-t from-accent/40 to-accent/10 rounded-full animate-spin-slow blur-3xl"></div>
            <div className="absolute w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-gradient-to-b from-accent/20 to-accent/10 rounded-full animate-spin-reverse-slow blur-2xl"></div>




            <Canvas className="xs:w-[270px] xs:h-[270px] w-[320px] h-[320px] lg:w-[360px] lg:h-[360px] overflow-visible">
                <ambientLight intensity={0.4} />
                <directionalLight position={[2, 2, 5]} intensity={3} />
                <Avatar />
                <OrbitControls
                    enableZoom={false}
                    target={[0, 1.6, 0]}
                    maxPolarAngle={Math.PI / 2.5}
                    minPolarAngle={Math.PI / 10}
                    minDistance={2.3}
                    maxDistance={2.3}
                />
            </Canvas>
        </div>
    );
};

export default MyAvatar;
