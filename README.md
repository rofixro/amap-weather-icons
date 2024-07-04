# amap-weather-icons

由于高德地图 [天气查询 API](https://lbs.amap.com/api/webservice/guide/api/weatherinfo/#t1) 并没有返回相应的 [天气现象](https://lbs.amap.com/api/webservice/guide/tools/weather-code) 图标，故编写此库方便大家使用。本项目采用 Web Components 编写，支持主流的前端技术框架，感谢 [林间风雨](https://download.csdn.net/download/jack_rose_me/33450342) 提供的图片资源。

## Install

```bash
npm install amap-weather-icons
```

## Usage

### Web Components

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>amap-weather-icons</title>
    <script src="https://unpkg.com/amap-weather-icons@0.0.4/output/index.js"></script>
  </head>
  <body>
    <amap-weather-icons size="50" icon="暴雪"></amap-weather-icons>
  </body>
</html>
```

### Vue

```vue
<script setup>
import "amap-weather-icons";
import { ref } from "vue";

const size = ref(50);
const icon = ref("暴雪");
</script>

<template>
  <amap-weather-icons :icon="icon" :size="size"></amap-weather-icons>
</template>
```

### React

```jsx
import "amap-weather-icons";
import { useState } from "react";

function App() {
  const [size] = useState(50);
  const [icon] = useState("暴雪");

  return (
    <>
      <amap-weather-icons size={size} icon={icon}></amap-weather-icons>
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
</script>

<main>
  <amap-weather-icons {size} {icon}></amap-weather-icons>
</main>
```

## Attributes

| Name | Description         | Type          | Default |
| ---- | ------------------- | ------------- | ------- |
| icon | weather phenomena   | string        | 未知    |
| size | SVG width/height px | string/number | 256     |

## License

[MIT](LICENSE)
