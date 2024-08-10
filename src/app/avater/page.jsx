"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { motion } from "framer-motion";
import MyAvater from "@/components/MyAvater";

const Avatar = () => {
    const gltf = useLoader(GLTFLoader, "/avater.glb");
    const avatarRef = useRef();

    // Animate the avatar with a slight rotation or bobbing effect
    useFrame(() => {
        if (avatarRef.current) {
            //avatarRef.current.rotation.y += 0.01; // Continuous slow rotation
            avatarRef.current.position.y = -1.5 + Math.sin(Date.now() * 0.002) * 0.1; // Bobbing effect
        }
    });

    return <primitive ref={avatarRef} object={gltf.scene} scale={1.5} />;
};

const Page = () => {
    return (
        <div>
            <MyAvater/>
        </div>
    );
};

export default Page;
