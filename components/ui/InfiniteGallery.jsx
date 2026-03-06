'use client';

import { useRef, useMemo, useState, useEffect, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

const DEFAULT_DEPTH_RANGE = 50;

const createClothMaterial = () => {
  return new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      map:        { value: null },
      opacity:    { value: 1.0 },
      blurAmount: { value: 0.0 },
      scrollForce:{ value: 0.0 },
      time:       { value: 0.0 },
    },
    vertexShader: `
      uniform float scrollForce;
      uniform float time;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        vec3 pos = position;

        // Subtle cloth ripple
        float curveIntensity = scrollForce * 0.25;
        float distanceFromCenter = length(pos.xy);
        float curve = distanceFromCenter * distanceFromCenter * curveIntensity;
        float ripple1 = sin(pos.x * 2.0 + scrollForce * 3.0) * 0.015;
        float ripple2 = sin(pos.y * 2.5 + scrollForce * 2.0) * 0.01;
        float clothEffect = (ripple1 + ripple2) * abs(curveIntensity) * 2.0;
        pos.z -= (curve + clothEffect);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D map;
      uniform float opacity;
      uniform float blurAmount;
      varying vec2 vUv;

      void main() {
        vec4 color = texture2D(map, vUv);

        if (blurAmount > 0.0) {
          vec2 texelSize = 1.0 / vec2(textureSize(map, 0));
          vec4 blurred = vec4(0.0);
          float total = 0.0;
          for (float x = -2.0; x <= 2.0; x += 1.0) {
            for (float y = -2.0; y <= 2.0; y += 1.0) {
              vec2 offset = vec2(x, y) * texelSize * blurAmount;
              float weight = 1.0 / (1.0 + length(vec2(x, y)));
              blurred += texture2D(map, vUv + offset) * weight;
              total += weight;
            }
          }
          color = blurred / total;
        }

        gl_FragColor = vec4(color.rgb, color.a * opacity);
      }
    `,
  });
};

function ImagePlane({ texture, position, scale, material }) {
  const meshRef = useRef(null);

  useEffect(() => {
    if (material && texture) material.uniforms.map.value = texture;
  }, [material, texture]);

  return (
    <mesh ref={meshRef} position={position} scale={scale} material={material}>
      <planeGeometry args={[1, 1, 20, 20]} />
    </mesh>
  );
}

function GalleryScene({
  images,
  speed = 1,
  visibleCount = 16,
  fadeSettings = {
    fadeIn:  { start: 0.05, end: 0.18 },
    fadeOut: { start: 0.30, end: 0.46 },
  },
  blurSettings = {
    blurIn:  { start: 0.0,  end: 0.08 },
    blurOut: { start: 0.40, end: 0.46 },
    maxBlur: 2.5,
  },
}) {
  const [scrollVelocity, setScrollVelocity] = useState(0);

  const normalizedImages = useMemo(
    () => images.map((img) => (typeof img === 'string' ? { src: img, alt: '' } : img)),
    [images]
  );

  const textures = useTexture(normalizedImages.map((img) => img.src));
  const materials = useMemo(
    () => Array.from({ length: visibleCount }, () => createClothMaterial()),
    [visibleCount]
  );

  // Explicit sporadic positions: corners, edges, center, off-center
  // x is horizontal (negative = left, positive = right)
  // y is vertical   (negative = down,  positive = up)
  const EXPLICIT_POSITIONS = [
    {  x:  0.0,  y:  0.1  }, // dead center
    {  x: -6.0,  y:  3.5  }, // top-left corner
    {  x:  5.8,  y:  3.2  }, // top-right corner
    {  x: -5.5,  y: -3.2  }, // bottom-left corner
    {  x:  5.4,  y: -3.0  }, // bottom-right corner
    {  x: -7.0,  y:  0.3  }, // mid-left edge
    {  x:  6.8,  y: -0.2  }, // mid-right edge
    {  x:  0.5,  y:  4.0  }, // top-center
    {  x: -0.6,  y: -3.8  }, // bottom-center
    {  x: -3.2,  y:  2.2  }, // upper-left off-center
    {  x:  4.0,  y:  2.0  }, // upper-right off-center
    {  x: -4.2,  y: -2.0  }, // lower-left off-center
    {  x:  3.6,  y: -2.8  }, // lower-right off-center
    {  x: -2.0,  y:  1.0  }, // slight left of center
    {  x:  2.8,  y: -0.8  }, // slight right of center
    {  x: -6.5,  y:  1.5  }, // left-upper mid
  ];

  const spatialPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < visibleCount; i++) {
      // Cycle through explicit positions; fall back to formula if visibleCount > 16
      if (i < EXPLICIT_POSITIONS.length) {
        positions.push(EXPLICIT_POSITIONS[i]);
      } else {
        const angle  = (i * 2.618) % (Math.PI * 2);
        const vAngle = (i * 1.618 + Math.PI / 3) % (Math.PI * 2);
        positions.push({
          x: Math.cos(angle) * 2.5,
          y: Math.sin(vAngle) * 1.5,
        });
      }
    }
    return positions;
  }, [visibleCount]);

  const totalImages  = normalizedImages.length;
  const depthRange   = DEFAULT_DEPTH_RANGE;

  const planesData = useRef(
    Array.from({ length: visibleCount }, (_, i) => ({
      index:      i,
      z:          visibleCount > 0 ? ((depthRange / visibleCount) * i) % depthRange : 0,
      imageIndex: totalImages > 0 ? i % totalImages : 0,
      x:          spatialPositions[i]?.x ?? 0,
      y:          spatialPositions[i]?.y ?? 0,
    }))
  );

  useEffect(() => {
    planesData.current = Array.from({ length: visibleCount }, (_, i) => ({
      index:      i,
      z:          visibleCount > 0 ? ((depthRange / Math.max(visibleCount, 1)) * i) % depthRange : 0,
      imageIndex: totalImages > 0 ? i % totalImages : 0,
      x:          spatialPositions[i]?.x ?? 0,
      y:          spatialPositions[i]?.y ?? 0,
    }));
  }, [depthRange, spatialPositions, totalImages, visibleCount]);

  useFrame((state, delta) => {
    // Auto-play only — no scroll hijacking
    setScrollVelocity((prev) => (prev + 0.3 * delta * speed) * 0.95);

    const time = state.clock.getElapsedTime();
    materials.forEach((mat) => {
      if (mat?.uniforms) {
        mat.uniforms.time.value        = time;
        mat.uniforms.scrollForce.value = scrollVelocity;
      }
    });

    const imageAdvance = totalImages > 0 ? visibleCount % totalImages || totalImages : 0;
    const totalRange   = depthRange;

    planesData.current.forEach((plane, i) => {
      let newZ = plane.z + scrollVelocity * delta * 10;
      let wrapsForward  = 0;
      let wrapsBackward = 0;

      if (newZ >= totalRange) {
        wrapsForward = Math.floor(newZ / totalRange);
        newZ -= totalRange * wrapsForward;
      } else if (newZ < 0) {
        wrapsBackward = Math.ceil(-newZ / totalRange);
        newZ += totalRange * wrapsBackward;
      }

      if (wrapsForward  > 0 && imageAdvance > 0 && totalImages > 0)
        plane.imageIndex = (plane.imageIndex + wrapsForward * imageAdvance) % totalImages;
      if (wrapsBackward > 0 && imageAdvance > 0 && totalImages > 0) {
        const step = plane.imageIndex - wrapsBackward * imageAdvance;
        plane.imageIndex = ((step % totalImages) + totalImages) % totalImages;
      }

      plane.z = ((newZ % totalRange) + totalRange) % totalRange;
      plane.x = spatialPositions[i]?.x ?? 0;
      plane.y = spatialPositions[i]?.y ?? 0;

      const np = plane.z / totalRange;

      // Opacity
      let opacity = 1;
      if (np < fadeSettings.fadeIn.start) {
        opacity = 0;
      } else if (np <= fadeSettings.fadeIn.end) {
        opacity = (np - fadeSettings.fadeIn.start) / (fadeSettings.fadeIn.end - fadeSettings.fadeIn.start);
      } else if (np >= fadeSettings.fadeOut.end) {
        opacity = 0;
      } else if (np >= fadeSettings.fadeOut.start) {
        opacity = 1 - (np - fadeSettings.fadeOut.start) / (fadeSettings.fadeOut.end - fadeSettings.fadeOut.start);
      }
      opacity = Math.max(0, Math.min(1, opacity));

      // Blur
      let blur = 0;
      if (np < blurSettings.blurIn.start) {
        blur = blurSettings.maxBlur;
      } else if (np <= blurSettings.blurIn.end) {
        blur = blurSettings.maxBlur * (1 - (np - blurSettings.blurIn.start) / (blurSettings.blurIn.end - blurSettings.blurIn.start));
      } else if (np >= blurSettings.blurOut.end) {
        blur = blurSettings.maxBlur;
      } else if (np >= blurSettings.blurOut.start) {
        blur = blurSettings.maxBlur * ((np - blurSettings.blurOut.start) / (blurSettings.blurOut.end - blurSettings.blurOut.start));
      }
      blur = Math.max(0, Math.min(blurSettings.maxBlur, blur));

      const mat = materials[i];
      if (mat?.uniforms) {
        mat.uniforms.opacity.value    = opacity;
        mat.uniforms.blurAmount.value = blur;
      }
    });
  });

  if (normalizedImages.length === 0) return null;

  return (
    <>
      {planesData.current.map((plane, i) => {
        const texture  = textures[plane.imageIndex];
        const material = materials[i];
        if (!texture || !material) return null;

        const worldZ  = plane.z - depthRange / 2;
        const aspect  = texture.image ? texture.image.width / texture.image.height : 1;
        // Scale: keep photos at a reasonable size; fade occurs before they get overwhelming
        const h       = 4.0;
        const scale   = aspect > 1 ? [h * aspect, h, 1] : [h, h / aspect, 1];

        return (
          <ImagePlane
            key={plane.index}
            texture={texture}
            position={[plane.x, plane.y, worldZ]}
            scale={scale}
            material={material}
          />
        );
      })}
    </>
  );
}

function FallbackGallery({ images }) {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#080e08', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '4px', overflow: 'hidden' }}>
      {images.map((img, i) => (
        <img key={i} src={typeof img === 'string' ? img : img?.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ))}
    </div>
  );
}

export default function InfiniteGallery({
  images,
  className,
  style,
  speed       = 1,
  visibleCount= 16,
  fadeSettings = {
    fadeIn:  { start: 0.05, end: 0.18 },
    fadeOut: { start: 0.30, end: 0.46 },
  },
  blurSettings = {
    blurIn:  { start: 0.0,  end: 0.08 },
    blurOut: { start: 0.40, end: 0.46 },
    maxBlur: 2.5,
  },
}) {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  const containerStyle = { width: '100%', height: '100%', ...style };

  if (!webglSupported) {
    return (
      <div style={containerStyle} className={className}>
        <FallbackGallery images={images} />
      </div>
    );
  }

  return (
    <div style={containerStyle} className={className}>
      <ErrorBoundary fallback={<FallbackGallery images={images} />}>
        <Canvas camera={{ position: [0, 0, 0], fov: 55 }} gl={{ antialias: true, alpha: true }}>
          <GalleryScene
            images={images}
            speed={speed}
            visibleCount={visibleCount}
            fadeSettings={fadeSettings}
            blurSettings={blurSettings}
          />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
