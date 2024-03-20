"use client"
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
export default function UnityApp() {
  const { unityProvider } = useUnityContext({
  loaderUrl: "pacrun-webgl-package5/Build/pacrun-webgl-package5.loader.js",
  dataUrl: "pacrun-webgl-package5/Build/pacrun-webgl-package5.data",
  frameworkUrl: "pacrun-webgl-package5/Build/pacrun-webgl-package5.framework.js",
  codeUrl: "pacrun-webgl-package5/Build/pacrun-webgl-package5.wasm",
  streamingAssetsUrl: "pacrun-webgl-package5/StreamingAssets",
});
  return (
    <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100vh" }} />
  );
}
