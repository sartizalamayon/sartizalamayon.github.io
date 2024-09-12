import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const Avatar = () => {
    const gltf = useLoader(GLTFLoader, "/ava.glb");
    const avatarRef = useRef();

    useFrame(() => {
        if (avatarRef.current) {
            avatarRef.current.position.y = -1.5 + Math.sin(Date.now() * 0.002) * 0.1;
        }
    });

    return <primitive ref={avatarRef} object={gltf.scene} scale={1.5} />;
};

const MyAvatar = () => {
    return (
        <div className="relative flex items-center justify-center xs:w-[250px] xs:h-[250px] w-[300px] h-[300px] lg:w-[360px] lg:h-[550px] overflow-visible ">
            <div className="absolute top-auto xs:w-[130px] xs:h-[130px] w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] rounded-full border-4 border-accent shadow-[0_0_15px_rgba(60,207,145,0.6)] animate-pulse"></div>
            <div className="absolute top-auto xs:w-[110px] xs:h-[110px] w-[150px] h-[150px] lg:w-[280px] lg:h-[280px] rounded-full border-4 border-accent shadow-[0_0_15px_rgba(60,207,145,0.6)] animate-pulse"></div>
            <Canvas className="xs:w-[270px] xs:h-[270px] w-[320px] h-[320px] lg:w-[360px] lg:h-[360px] overflow-visible">
                <ambientLight intensity={0.4} />
                <directionalLight position={[2, 2, 5]} intensity={3} />
                <directionalLight position={[-1, -1, -0.5]} intensity={6} />
                <spotLight position={[0, 5, 5]} angle={0.8} penumbra={1} intensity={1} castShadow />
                <Avatar />
                <OrbitControls
                    enableZoom={false}
                    target={[0, -0.12, 0]}
                    maxPolarAngle={Math.PI}
                    minPolarAngle={Math.PI / 12}
                    minDistance={2.7}
                    maxDistance={2.7}
                />
            </Canvas>
        </div>
    );
};

export default MyAvatar;
