# amap-weather-icons

由于高德地图[天气查询 API](https://lbs.amap.com/api/webservice/guide/api/weatherinfo/#t1)并没有返回相应的天气现象图标，故编写此库方便大家使用。本项目采用 Web Components 编写，支持主流的前端技术框架。感谢[熬夜伤身体](https://www.figma.com/community/file/951406898106793162)同学提供的高清矢量 SVG 资源。

## Install

```bash
npm install amap-weather-icons
```

## Usage

### Vue

```vue
<script setup>
import "amap-weather-icons";
import { ref } from "vue";

const size = ref(50);
const icon = ref('暴雪');
const color = ref('#ddd')
</script>

<template>
  <amap-weather-icons :icon="icon" :size="size" color="color"></amap-weather-icons>
</template>
```

### React

```react
import "amap-weather-icons";
import { useState } from "react";

function App() {
  const [size] = useState(50);
  const [icon] = useState('暴雪');
  const [color] = useState('#ddd');

  return (
    <>
      <div style={style}>
        <css-3d-progress size={size} icon={icon} color={color}></css-3d-progress>
      </div>
    </>
  );
}

export default App;
```

### Svelte

```svelte
<script>
  import "amap-weather-icons";

  const size = 50;
  const icon = "暴雪";
  const color = "#ddd";
</script>

<main>
  <amap-weather-icons {size} {icon} {color}></amap-weather-icons>
</main>
```



