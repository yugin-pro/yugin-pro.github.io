import {html} from "../../_npm/htl@0.3.1/72f4716c.js";

export function trendNumber(data, {focus, value, ...options} = {}) {
  const focusIndex = data.findIndex((d) => d === focus);
  return formatTrend(focus[value] - data[focusIndex - 1]?.[value], options);
}

export function formatTrend(
  value,
  {
    locale,
    format = {},
    positive = "green",
    negative = "red",
    base = "muted",
    positiveSuffix = " ↗︎",
    negativeSuffix = " ↘︎",
    baseSuffix = ""
  } = {}
) {
  if (format.signDisplay === undefined) format = {...format, signDisplay: "always"};
  return html`<span class="small ${value > 0 ? positive : value < 0 ? negative : base}">${value.toLocaleString(
    locale,
    format
  )}${value > 0 ? positiveSuffix : value < 0 ? negativeSuffix : baseSuffix}`;
}
