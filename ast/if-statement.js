const check = require("../semantics/check");

module.exports = class IfStatement {
  constructor(tests, consequents, alternate) {
    Object.assign(this, { tests, consequents, alternate });
  }

  analyze(context) {
    this.tests.forEach(test => {
      test.analyze(context);
      check.isBoolean(test);
    });
    this.consequents.forEach(block => {
      const blockContext = context.createChildContextForBlock();
      block.forEach(statement => statement.analyze(blockContext));
    });
    if (this.alternate) {
      const alternateBlock = context.createChildContextForBlock();
      this.alternate.forEach(s => s.analyze(alternateBlock));
    }
  }
};
