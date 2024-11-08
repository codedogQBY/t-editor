import { Plugin } from '@t-editor/core';

export const BasicMarksPlugin: Plugin = {
  name: 'basic-marks',
  commands: {
    bold: (editor) => {
      // 实现加粗命令
    },
    italic: (editor) => {
      // 实现斜体命令
    },
    // 其他基本格式化命令...
  },
  // 其他插件相关配置...
};
