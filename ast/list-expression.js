const check = require("../semantics/check");
const ListType = require("./list-type");

module.exports = class ListExpression {
  constructor(members) {
    this.members = members;
    this.type = undefined;
  }

  analyze(context) {
    this.members.forEach(m => m.analyze(context));
    this.type = new ListType(this.members[0].type);
    for (let i = 1; i < this.members.length; i += 1) {
      if (
        JSON.stringify(this.members[i].type) !==
        JSON.stringify(this.type.memberType)
      ) {
        throw new Error("Incompatible types within list");
      }
    }
  }
};
