"use client"
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
export default function UnityApp() {
  const { unityProvider } = useUnityContext({
  loaderUrl: "pacrun-webgl-package4/Build/pacrun-webgl-package4.loader.js",
  dataUrl: "pacrun-webgl-package4/Build/pacrun-webgl-package4.data",
  frameworkUrl: "pacrun-webgl-package4/Build/pacrun-webgl-package4.framework.js",
  codeUrl: "pacrun-webgl-package4/Build/pacrun-webgl-package4.wasm",
  streamingAssetsUrl: "pacrun-webgl-package4/StreamingAssets",
});
  return (
    <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100vh" }} />
  );
}
