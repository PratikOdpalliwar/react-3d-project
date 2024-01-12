import React, {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandler,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivPlugin,
  TonemapPlugin,
  SSRPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  addBasePlugin,
  mobileAndTableCheck,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WebgiViewer = () => {
  const canvasRef = useRef(null);
  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
    </div>
  );
};

export default WebgiViewer;
