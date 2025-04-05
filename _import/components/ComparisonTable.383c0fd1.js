import { jsx, jsxs } from "../../_npm/react@19.1.0/jsx-runtime.2a823644.js";
import React from "../../_npm/react@19.1.0/c1c75d32.js";
const ComparisonTable = ({ tableData }) => {
  return /* @__PURE__ */ jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { style: { padding: "10px", textAlign: "left" } }),
      /* @__PURE__ */ jsx("th", { style: { padding: "10px", textAlign: "center" }, children: "Traditional AB-tests" }),
      /* @__PURE__ */ jsx("th", { style: { padding: "10px", textAlign: "center" }, children: "Segmentation/Personalisation" })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { children: tableData.map((row, index) => /* @__PURE__ */ jsxs("tr", { style: { backgroundColor: index % 2 === 0 ? "#f0f0f0" : "white" }, children: [
      /* @__PURE__ */ jsx("td", { style: { padding: "10px", textAlign: "left" }, children: row.feature }),
      /* @__PURE__ */ jsx("td", { style: { padding: "10px", textAlign: "center" }, children: row.traditional }),
      /* @__PURE__ */ jsx("td", { style: { padding: "10px", textAlign: "center" }, children: row.solvvy })
    ] }, index)) })
  ] });
};
export default ComparisonTable;
