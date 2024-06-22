class AmapWeatherIcons extends HTMLElement {
  static get observedAttributes() {
    return ["icon", "size", "color"];
  }

  constructor() {
    super();

    this.icon = this.getAttribute("icon") || "未知";
    this.size = this.getAttribute("size") || "24px";
    this.color = this.getAttribute("color") || "#000";
    this.initSVG();
  }

  async initSVG() {
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    const svg = await fetch(`./svg/${this.icon}.svg`);
    const svgText = await svg.text();

    template.innerHTML = svgText
      .replace(/<svg/g, `<svg width="${this.size}" height="${this.size}"`)
      .replace(/<path/g, `<path fill="${this.color}"`);

    shadow.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("amap-weather-icons", AmapWeatherIcons);
