
import mermaidLib from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

mermaidLib.registerIconPacks([
    {
      name: 'logos',
      loader: () =>
       fetch('https://unpkg.com/@iconify-json/logos@1/icons.json').then((res) => res.json()),
    },
  ]);

let nextDiagramId = 0;

const MermaidIcon = async function (source) {
  const root = document.createElement("div");
  root.innerHTML = (await mermaidLib.render(`mermaidLib-${++nextDiagramId}`, source)).svg;
  return root.removeChild(root.firstChild);
};

export {MermaidIcon} 