import { jsx, jsxs } from "../../_npm/react@19.1.0/jsx-runtime.2a823644.js";
import { useState } from "../../_npm/react@19.1.0/c1c75d32.js";
export function Feedback() {
  const articleFooter = {
    backgroundColor: "var(--theme-background)",
    border: "1px solid var(--theme-foreground)",
    borderRadius: "4px",
    boxShadow: "0 0 8px 4px var(--theme-background-alt)",
    margin: "1rem",
    padding: "1rem"
  };
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [feedbackType, setFeedbackType] = useState(null);
  const handleClick = (type) => {
    setFeedbackGiven(true);
    setFeedbackType(type);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      "event": "feedback_button",
      "text": type
    });
  };
  return /* @__PURE__ */ jsxs("div", { style: articleFooter, children: [
    /* @__PURE__ */ jsx("h2", { children: "Help improve content" }),
    /* @__PURE__ */ jsx("p", { children: "I tried to keep information basic and consice to make clear comunication. How well do you think I managed that?" }),
    /* @__PURE__ */ jsxs("div", { className: "feedback-buttons", children: [
      /* @__PURE__ */ jsx("button", { class: "observablehq--caret", onClick: () => handleClick("yes"), disabled: feedbackGiven, children: "\u{1F44D} Good enough" }),
      /* @__PURE__ */ jsx("button", { class: "observablehq--caret", onClick: () => handleClick("no"), disabled: feedbackGiven, children: "\u{1F44E} Not good" }),
      /* @__PURE__ */ jsx("button", { class: "observablehq--caret", onClick: () => handleClick("partially"), disabled: feedbackGiven, children: "\u{1F90F} Partially good" })
    ] }),
    feedbackGiven && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { children: "Thank you for your feedback, I really appreciate it!" }),
      feedbackType === "yes" && /* @__PURE__ */ jsx("p", { children: "You found this page helpful." }),
      feedbackType === "no" && /* @__PURE__ */ jsx("p", { children: "You did not find this page helpful." }),
      feedbackType === "partially" && /* @__PURE__ */ jsx("p", { children: "You found this page partially helpful." })
    ] })
  ] });
}
