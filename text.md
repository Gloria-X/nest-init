在 Nestjs 中， module 是应用程序的一个基本组织单元，它可以将相关的组件、控制器等和其他相关代码组织在一起，以便更好地管理应用程序的各个部分。 Nest 用它来组织应用程序架构。

[root module](/assets/Modules_1.png)

每个应用程序至少有一个根模块，是架构图的起点；虽然非常小的应用在理论上只有根模块一个模块；但在大多数应用中，会使用多个模块，每个模块负责处理特定的功能或任务。这些模块可以看作是系统中的小组件，每个模块都有自己的责任和功能。


<!-- 功能模块仅组织与特定功能相关的代码，使代码井井有条，并建立清晰的边界。这有助于我们管理复杂性并按照SOLID原则进行开发，尤其是随着应用程序和/或团队规模的增长。 -->

<!-- 将软件系统分成功能模块是一种有效的软件设计方法，有助于提高代码的可维护性、可读性和扩展性。这对于大型应用程序或团队来说尤其重要，因为它可以帮助管理复杂性，提高开发效率，并降低错误的风险。 -->

每个模块都是一个 TypeScript 类，使用 @Module() 装饰器进行修饰，包括了以下四个属性和方法：

|属性        |  作用                                                   |
|------------|--------------------------------------------------------|
|providers   |  模块中所有用到的功能类，由 Nest 注入器实例化的提供者，可以至少在整个模块中实现横向的共享|
|controllers |  该模块内的控制器集|
|imports     |  导入其他模块导出，且该模块需要的功能类|
|exports     |  由本模块提供并应在其他模块中需要用的功能类，导出其他模块需要共享的 providers|

https://juejin.cn/post/6925605351475806216
https://cloud.tencent.com/developer/section/1490169

模块可以导出他们的内部提供者，也可以导出自己导入的模块

模块的作用：
组织和封装功能：模块的一个主要目的是将应用程序的不同部分封装到逻辑单元中，使代码更加模块化。
依赖管理：模块是注入依赖的核心，帮助管理组件之间的依赖关系，可以将提供者 services, repositories 等注册到模块中，通过依赖注入在应用程序中共享它
作用域管理：模块内定义的组件和提供者只有在该模块内可见。这有助于隔离不同功能领域的代码，避免全局作用域的混淆

所有的功能模块，最后都需要导入根模块 app.module

-------------

app.module 负责做实例化创建和依赖注入，在创建的时候会告诉app.module 我们有哪些 controller，有哪些 provider

AppModule 在 main 里被初始化，就会感知需要构造哪些contollers，扫描一遍后会知道这些controller需要哪些service，再把这些service的实例去注入到这些 contoller的构造函数

---
module 的作用是在程序运行时给模块处理依赖。好处是所有模块的依赖都可以在 module 中清晰明了的知道引用还是被引用

controller 的作用是处理请求，所有的请求会先到 controller，再经 controller 调用其他模块业务逻辑

service 是真正处理业务逻辑的地方，所有的业务逻辑都会在这里处理。它可经过 module 引用其他模块的service，也可经过 module 暴露出去


```typescript
const app = await NestFactory.create(AppModule)
```


app.module.ts
```typescript

@Module({
    imports: [],
    controllers: [AppController],
    providers: [
        AppService,
        // MockService,  --> provider和class同名，简写
        {
            provide: MockService,
            useClass:MockService,
        }
    ],
})
export class AppModule {}

```

单例模式 --> 多个模块可以共享一个 provider 的相同实例

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // 标记为根级别的单例服务
})
export class MySingletonService {
  // 服务类的代码
}
```


如果你在控制器中直接引入服务并使用依赖注入，NestJS 仍然能够自动管理这些依赖关系。
然而，这种方式通常不被推荐，因为它可能会导致代码的可读性下降，而且可能不容易维护，特别是在复杂的应用程序中。
通常来说，将依赖关系配置在模块中可以更清晰地了解应用程序的结构和依赖关系。
