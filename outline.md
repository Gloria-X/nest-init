# outline

```mermaid
flowchart TD
  %% 开始结束节点
  A([AppModule])
  B([CoffeeModule])
  C([SugarModule])
  D([main.ts])
  
  %% 关系
  B --> |引入| A
  C --> |引入| A
  A --> |初始化| D
```

