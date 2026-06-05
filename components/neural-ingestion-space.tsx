"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { neuralDocuments } from "@/lib/data";

type VisualDocument = {
  name: string;
  type: string;
  extension: string;
  progress: number;
  orbit: number;
};

type NeuralIngestionSpaceProps = {
  files: string[];
  isDragging: boolean;
};

const extensionMap: Record<string, string> = {
  pdf: "PDF",
  xlsx: "Excel",
  xls: "Excel",
  doc: "Word",
  docx: "Word",
  ppt: "PowerPoint",
  pptx: "PowerPoint",
  one: "OneNote"
};

export function NeuralIngestionSpace({
  files,
  isDragging
}: NeuralIngestionSpaceProps) {
  const visualDocuments = useMemo<VisualDocument[]>(() => {
    if (files.length === 0) return neuralDocuments;

    return files.slice(0, 6).map((file, index) => {
      const extension = file.split(".").pop()?.toLowerCase() ?? "pdf";
      const type = extensionMap[extension] ?? "Document";

      return {
        name: file.replace(/\.[^/.]+$/, ""),
        type,
        extension: `.${extension}`,
        progress: 72 + ((index * 7) % 23),
        orbit: index
      };
    });
  }, [files]);

  return (
    <Canvas
      dpr={[1, 1.65]}
      camera={{ position: [0, 0.35, 8.5], fov: 43 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="absolute inset-0"
    >
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 8, 18]} />
      <ambientLight intensity={0.55} />
      <pointLight position={[0, 0, 3]} intensity={1.9} color="#FFE8AA" />
      <pointLight position={[-4, 2, 3]} intensity={0.8} color="#F7E7B4" />
      <SpaceDust />
      <NeuralSphere isExcited={isDragging || files.length > 0} />
      <EnergyHalo isExcited={isDragging || files.length > 0} />
      {visualDocuments.map((document, index) => (
        <FileSatellite
          key={`${document.name}-${index}`}
          document={document}
          index={index}
          total={visualDocuments.length}
          isExcited={isDragging || files.length > 0}
        />
      ))}
    </Canvas>
  );
}

function NeuralSphere({ isExcited }: { isExcited: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  const count = 2200;

  const { particleGeometry, lineGeometry } = useMemo(() => {
    const particlePositions = new Float32Array(count * 3);
    const linePositions: number[] = [];
    const samples: THREE.Vector3[] = [];
    const radius = 1.78;

    for (let index = 0; index < count; index += 1) {
      const y = 1 - (index / (count - 1)) * 2;
      const radial = Math.sqrt(1 - y * y);
      const theta = index * Math.PI * (3 - Math.sqrt(5));
      const noise = 0.9 + Math.random() * 0.18;
      const x = Math.cos(theta) * radial * radius * noise;
      const z = Math.sin(theta) * radial * radius * noise;
      const finalY = y * radius * noise;

      particlePositions[index * 3] = x;
      particlePositions[index * 3 + 1] = finalY;
      particlePositions[index * 3 + 2] = z;

      if (index % 42 === 0) samples.push(new THREE.Vector3(x, finalY, z));
    }

    for (let index = 0; index < samples.length - 2; index += 1) {
      const a = samples[index];
      const b = samples[(index * 7 + 11) % samples.length];
      if (a.distanceTo(b) < 1.75) {
        linePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );

    return { particleGeometry, lineGeometry };
  }, []);

  useFrame(({ clock }, delta) => {
    const elapsed = clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * (isExcited ? 0.18 : 0.08);
      pointsRef.current.rotation.x = Math.sin(elapsed * 0.18) * 0.08;
      const scale = 1 + Math.sin(elapsed * 1.6) * (isExcited ? 0.035 : 0.018);
      pointsRef.current.scale.setScalar(scale);
    }

    if (linesRef.current) {
      linesRef.current.rotation.y -= delta * 0.045;
      linesRef.current.rotation.z = Math.sin(elapsed * 0.12) * 0.07;
    }

    if (materialRef.current) {
      materialRef.current.opacity = isExcited
        ? 0.86 + Math.sin(elapsed * 5.2) * 0.12
        : 0.68 + Math.sin(elapsed * 2.2) * 0.08;
      materialRef.current.size = isExcited ? 0.029 : 0.022;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <primitive object={particleGeometry} attach="geometry" />
        <pointsMaterial
          ref={materialRef}
          color="#FFE8AA"
          size={0.022}
          sizeAttenuation
          transparent
          opacity={0.76}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef}>
        <primitive object={lineGeometry} attach="geometry" />
        <lineBasicMaterial
          color="#F7E7B4"
          transparent
          opacity={isExcited ? 0.34 : 0.2}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

function EnergyHalo({ isExcited }: { isExcited: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z += delta * (isExcited ? 0.12 : 0.045);
    groupRef.current.scale.setScalar(
      1 + Math.sin(clock.getElapsedTime() * 1.25) * 0.035
    );
  });

  return (
    <group ref={groupRef}>
      {[2.35, 2.78, 3.18].map((radius, index) => (
        <mesh key={radius} rotation={[Math.PI / 2, index * 0.42, 0]}>
          <ringGeometry args={[radius, radius + 0.006, 192]} />
          <meshBasicMaterial
            color="#F7E7B4"
            transparent
            opacity={0.11 - index * 0.025}
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function FileSatellite({
  document,
  index,
  total,
  isExcited
}: {
  document: VisualDocument;
  index: number;
  total: number;
  isExcited: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRef = useRef<THREE.Mesh>(null);
  const baseAngle = (index / total) * Math.PI * 2;
  const orbitRadius = 3.45 + (index % 2) * 0.42;
  const vertical = (index - (total - 1) / 2) * 0.44;
  const texture = useFileTexture(document);
  const curve = useMemo(() => {
    const start = new THREE.Vector3(
      Math.cos(baseAngle) * orbitRadius,
      vertical,
      Math.sin(baseAngle) * 0.9
    );
    const mid = new THREE.Vector3(
      Math.cos(baseAngle) * 2.4,
      vertical * 0.35 + Math.sin(baseAngle * 2) * 0.4,
      0.6 + Math.cos(baseAngle) * 0.22
    );
    return new THREE.CatmullRomCurve3([
      start,
      mid,
      new THREE.Vector3(0.65 * Math.cos(baseAngle), vertical * 0.1, 0.22)
    ]);
  }, [baseAngle, orbitRadius, vertical]);

  const tubeGeometry = useMemo(
    () => new THREE.TubeGeometry(curve, 64, 0.008, 8, false),
    [curve]
  );

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const angle = baseAngle + elapsed * (0.08 + index * 0.006);
    const x = Math.cos(angle) * orbitRadius;
    const z = Math.sin(angle) * 0.85 - 0.15;
    const y = vertical + Math.sin(elapsed * 0.75 + index) * 0.12;

    if (groupRef.current) {
      groupRef.current.position.set(x, y, z);
      groupRef.current.rotation.y = -angle + Math.sin(elapsed + index) * 0.08;
      groupRef.current.rotation.z = Math.sin(elapsed * 0.7 + index) * 0.08;
      groupRef.current.scale.setScalar(1 + Math.sin(elapsed * 1.7 + index) * 0.025);
    }

    if (pulseRef.current) {
      const t = (elapsed * (0.18 + index * 0.012) + index * 0.13) % 1;
      pulseRef.current.position.copy(curve.getPoint(1 - t));
      pulseRef.current.scale.setScalar(isExcited ? 1.25 : 0.9);
    }
  });

  return (
    <group>
      <mesh geometry={tubeGeometry}>
        <meshBasicMaterial
          color="#F7E7B4"
          transparent
          opacity={0.36}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial
          color="#FFE8AA"
          transparent
          opacity={0.92}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <group ref={groupRef}>
        <pointLight color="#FFE8AA" intensity={0.65} distance={2.1} />
        <mesh>
          <planeGeometry args={[1.08, 0.62]} />
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={0.96}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh position={[0, 0, -0.03]} scale={[1.16, 0.7, 1]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            color="#F7E7B4"
            transparent
            opacity={0.08}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
    </group>
  );
}

function SpaceDust() {
  const pointsRef = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const count = 1200;
    const positions = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 13;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 9 - 1.8;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.012;
    pointsRef.current.rotation.x += delta * 0.004;
  });

  return (
    <points ref={pointsRef}>
      <primitive object={geometry} attach="geometry" />
      <pointsMaterial
        color="#FFE8AA"
        size={0.012}
        transparent
        opacity={0.38}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function useFileTexture(document: VisualDocument) {
  return useMemo(() => {
    if (typeof window === "undefined") {
      return new THREE.Texture();
    }

    const canvas = window.document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 292;
    const context = canvas.getContext("2d");

    if (!context) return new THREE.CanvasTexture(canvas);

    const gradient = context.createLinearGradient(0, 0, 512, 292);
    gradient.addColorStop(0, "rgba(255,255,255,0.16)");
    gradient.addColorStop(0.45, "rgba(20,20,20,0.92)");
    gradient.addColorStop(1, "rgba(247,231,180,0.18)");
    context.fillStyle = gradient;
    roundRect(context, 0, 0, 512, 292, 34);
    context.fill();
    context.strokeStyle = "rgba(255,232,170,0.55)";
    context.lineWidth = 3;
    roundRect(context, 5, 5, 502, 282, 30);
    context.stroke();

    context.fillStyle = "rgba(247,231,180,0.12)";
    roundRect(context, 28, 28, 96, 96, 20);
    context.fill();
    context.strokeStyle = "rgba(255,255,255,0.45)";
    context.lineWidth = 2;
    roundRect(context, 28, 28, 96, 96, 20);
    context.stroke();

    context.fillStyle = "#FFE8AA";
    context.font = "700 38px Arial";
    context.fillText(document.type.slice(0, 3).toUpperCase(), 42, 88);

    context.fillStyle = "#FFFFFF";
    context.font = "700 34px Arial";
    context.fillText(trimLabel(document.name, 19), 150, 70);

    context.fillStyle = "rgba(218,218,218,0.75)";
    context.font = "500 24px Arial";
    context.fillText(document.extension.toUpperCase(), 150, 112);

    context.fillStyle = "rgba(255,255,255,0.12)";
    roundRect(context, 150, 178, 286, 12, 8);
    context.fill();
    context.fillStyle = "#F7E7B4";
    roundRect(context, 150, 178, 286 * (document.progress / 100), 12, 8);
    context.fill();

    context.fillStyle = "#FFE8AA";
    context.font = "700 24px Arial";
    context.fillText(`${document.progress}%`, 150, 232);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    texture.needsUpdate = true;
    return texture;
  }, [document]);
}

function roundRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.arcTo(x + width, y, x + width, y + height, radius);
  context.arcTo(x + width, y + height, x, y + height, radius);
  context.arcTo(x, y + height, x, y, radius);
  context.arcTo(x, y, x + width, y, radius);
  context.closePath();
}

function trimLabel(value: string, max: number) {
  return value.length > max ? `${value.slice(0, max - 1)}...` : value;
}
