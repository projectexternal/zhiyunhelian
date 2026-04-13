## start

1. 在 根目录下 `npm i ` 安装依赖
3. `npm run dev` 启动服务



**ts**
1. 使用**.ts**文件，遵循**typescript**规范。
2. 需要添加d.ts（类型描述文件）。

**css**
1. 样式推荐使用 **less、scss** 文件类型，文件名与页面保持一致。
2. 默认都使用 [**CSS Module**](http://www.ruanyifeng.com/blog/2016/06/css_modules.html) 方式，参考下面的例子。

```
.page-admin-user-management {
  .page-header {
    display: block;
  }

  .page-body {
    :global(.ant-btn) {
      display: inline-block;
    }
  }
  .page-footer {
    display: block;
  }
}
```

**组件：component.tsx**

```
import { FC } from 'react';
import styles from './component.less';

type Props = {
  prefixCls?: string,
};

const className = (name: string, styles: Record<string, string>, prefixCls?: string) => {
  return `${styles[name]} ${prefixCls ? `${prefixCls}-${name}` : name}`;
};

const MyComponent: FC<Props> = (props) => {
  const { prefixCls } = props;
  return (
    <div className={className('user-select-component', styles, prefixCls)}>
       <input className={className('user-name', styles, prefixCls)} />
      <button type="submit" className={className('btn-save', styles, prefixCls)}>
        Save
      </button>
    </div>
  );
};
export default MyComponent;
```

**对于 svg 资源，Umi 支持 svgr ，可以直接导入作为组件使用**

```
import SmileUrl, { ReactComponent as SvgSmile } from './smile.svg';
// <SvgSmile />
```

**代码提交规范**

1. 对commit进行简短的描述 **type必填**表示提交类型，值有以下几种：

- feat - 新功能 feature
- fix - 修复 bug
- docs - 文档注释
- style - 代码格式(不影响代码运行的变动)
- refactor - 重构、优化(既不增加新功能，也不是修复bug)
- perf - 性能优化
- test - 增加测试
- chore - 构建过程或辅助工具的变动
- revert - 回退
- build - 打包

2. 打包的产物或者.umi文件不应该提交到svn仓库。