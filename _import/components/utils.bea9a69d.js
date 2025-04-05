// Note: Utility functions
import * as htl from "../../_npm/htl@0.3.1/72f4716c.js";
import * as d3 from "../../_npm/d3@7.9.0/e780feca.js";

export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function insertLink(name,url) {
  return htl.html`<a target="_blank" href="${url}">${name}</a> `
}

export function textcolor(content, style = {}) {
  function yiq(color) {
    const {r, g, b} = d3.rgb(color);
    return (r * 299 + g * 587 + b * 114) / 1000 / 255; // returns values between 0 and 1
  }
  const {
    background,
    color = yiq(background) >= 0.6 ? "#111" : "white", 
    padding = "0 5px",
    borderRadius = "4px",
    fontWeight = 800,
    ...rest
  } = typeof style === "string" ? {background: style} : style;
  return htl.html`<span style=${{
    background, 
    color, 
    padding, 
    borderRadius, 
    fontWeight, 
    ...rest
  }}>${content}</span>`;
}

export function textTruncate(str, length = 100, ending = '...') {
  if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
  } else {
      return str;
  }
}

export function snakeCaseToTitleCase(snakeCaseString) {
  if (!snakeCaseString) {
    return ""; // Handle empty input
  }

  const words = snakeCaseString.split('_');
  const titleCaseWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return titleCaseWords.join(' ');
}