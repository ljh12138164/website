module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档更新
        'style', // 代码格式化，不影响代码逻辑
        'refactor', // 重构代码
        'perf', // 性能优化
        'test', // 测试相关
        'chore', // 构建过程或辅助工具的变动
        'ci', // CI/CD相关
        'build', // 📦 构建系统或外部依赖的变动
        'revert', // ⏪ 回滚提交
      ],
    ],
  },
  prompt: {
    messages: {
      type: '选择你要提交的类型:',
      scope: '选择一个scope (可选):',
      customScope: '请输入自定义的scope:',
      subject: '填写简短精炼的变更描述:\n',
      body: '填写更加详细的变更描述 (可选)。使用 "|" 换行:\n',
      breaking: '列举非兼容性重大的变更 (可选):\n',
      footer: '列举出所有变更的 ISSUES CLOSED (可选)。 例如: #31, #34:\n',
      confirmCommit: '确认提交?',
    },
    types: [
      { value: 'feat', name: 'feat:     ✨ 新功能' },
      { value: 'fix', name: 'fix:      🐛 修复bug' },
      { value: 'docs', name: 'docs:     📝 文档更新' },
      { value: 'style', name: 'style:    💄 代码格式化，不影响代码逻辑' },
      { value: 'refactor', name: 'refactor: ♻️ 重构代码' },
      { value: 'perf', name: 'perf:     ⚡ 性能优化' },
      { value: 'test', name: 'test:     ✅ 测试相关' },
      { value: 'chore', name: 'chore:    🔧 构建过程或辅助工具的变动' },
      { value: 'ci', name: 'ci:       👷 CI/CD相关' },
      { value: 'build', name: 'build:    📦 构建系统或外部依赖的变动' },
      { value: 'revert', name: 'revert:   ⏪ 回滚提交' },
    ],
    useEmoji: true,
  },
};
