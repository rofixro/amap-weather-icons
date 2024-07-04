const ICON_MAP = {
  "严重霾": import("../icons/严重霾.png"),
  "中度霾": import("../icons/中度霾.png"),
  "中雨-大雨": import("../icons/中雨-大雨.png"),
  "中雨": import("../icons/中雨.png"),
  "中雪-大雪": import("../icons/中雪-大雪.png"),
  "中雪": import("../icons/中雪.png"),
  "冷": import("../icons/冷.png"),
  "冻雨": import("../icons/冻雨.png"),
  "和风": import("../icons/和风.png"),
  "多云": import("../icons/多云.png"),
  "大暴雨-特大暴雨": import("../icons/大暴雨-特大暴雨.png"),
  "大暴雨": import("../icons/大暴雨.png"),
  "大雨-暴雨": import("../icons/大雨-暴雨.png"),
  "大雨": import("../icons/大雨.png"),
  "大雪-暴雪": import("../icons/大雪-暴雪.png"),
  "大雪": import("../icons/大雪.png"),
  "大雾": import("../icons/大雾.png"),
  "大风": import("../icons/大风.png"),
  "小雨-中雨": import("../icons/小雨-中雨.png"),
  "小雨": import("../icons/小雨.png"),
  "小雪-中雪": import("../icons/小雪-中雪.png"),
  "小雪": import("../icons/小雪.png"),
  "少云": import("../icons/少云.png"),
  "平静": import("../icons/平静.png"),
  "强沙尘暴": import("../icons/强沙尘暴.png"),
  "强浓雾": import("../icons/强浓雾.png"),
  "强阵雨": import("../icons/强阵雨.png"),
  "强雷阵雨": import("../icons/强雷阵雨.png"),
  "强风劲风": import("../icons/强风劲风.png"),
  "微风": import("../icons/微风.png"),
  "扬沙": import("../icons/扬沙.png"),
  "晴": import("../icons/晴.png"),
  "晴间多云": import("../icons/晴间多云.png"),
  "暴雨-大暴雨": import("../icons/暴雨-大暴雨.png"),
  "暴雨": import("../icons/暴雨.png"),
  "暴雪": import("../icons/暴雪.png"),
  "有风": import("../icons/有风.png"),
  "未知": import("../icons/未知.png"),
  "极端降雨": import("../icons/极端降雨.png"),
  "毛毛雨细雨": import("../icons/毛毛雨细雨.png"),
  "沙尘暴": import("../icons/沙尘暴.png"),
  "浓雾": import("../icons/浓雾.png"),
  "浮尘": import("../icons/浮尘.png"),
  "清风": import("../icons/清风.png"),
  "烈风": import("../icons/烈风.png"),
  "热": import("../icons/热.png"),
  "热带风暴": import("../icons/热带风暴.png"),
  "特大暴雨": import("../icons/特大暴雨.png"),
  "特强浓雾": import("../icons/特强浓雾.png"),
  "狂爆风": import("../icons/狂爆风.png"),
  "疾风": import("../icons/疾风.png"),
  "轻雾": import("../icons/轻雾.png"),
  "重度霾": import("../icons/重度霾.png"),
  "阴": import("../icons/阴.png"),
  "阵雨": import("../icons/阵雨.png"),
  "阵雨夹雪": import("../icons/阵雨夹雪.png"),
  "阵雪": import("../icons/阵雪.png"),
  "雨": import("../icons/雨.png"),
  "雨夹雪": import("../icons/雨夹雪.png"),
  "雨雪天气": import("../icons/雨雪天气.png"),
  "雪": import("../icons/雪.png"),
  "雷阵雨": import("../icons/雷阵雨.png"),
  "雷阵雨并伴有冰雹": import("../icons/雷阵雨并伴有冰雹.png"),
  "雾": import("../icons/雾.png"),
  "霾": import("../icons/霾.png"),
  "风暴": import("../icons/风暴.png"),
  "飓风": import("../icons/飓风.png"),
  "龙卷风": import("../icons/龙卷风.png")
};

class AmapWeatherIcons extends HTMLElement {
  static observedAttributes = ["icon", "size"];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  async render() {
    const size = this.getAttribute("size") || 256;
    const icon = this.getAttribute("icon") || "未知";
    const imgContent = await ICON_MAP[icon];

    if (imgContent) {
      this.shadowRoot.innerHTML = `<style>:host {display: inline-block; font-size: 0;}</style><img width="${size}" height="${size}" src="${imgContent.default}" alt="${icon}" />`;
    } else {
      throw new Error(`Icon "${icon}" not found`);
    }
  }
}

window.customElements.define("amap-weather-icons", AmapWeatherIcons);
