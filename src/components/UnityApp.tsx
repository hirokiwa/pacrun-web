"use client"
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
export default function UnityApp() {
  const { unityProvider } = useUnityContext({
  loaderUrl: "pacrun-webgl-package/Build/pacrun-webgl-package.loader.js",
  dataUrl: "pacrun-webgl-package/Build/pacrun-webgl-package.data",
  frameworkUrl: "pacrun-webgl-package/Build/pacrun-webgl-package.framework.js",
  codeUrl: "pacrun-webgl-package/Build/pacrun-webgl-package.wasm",
  streamingAssetsUrl: "pacrun-webgl-package/StreamingAssets",
});
  return (
    <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100vh" }} />
  );
}
