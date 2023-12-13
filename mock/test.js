const Mock = require("mockjs");

const Random = Mock.Random;

module.exports = [
  {
    url: "/api/text",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          name: Random.cname(),
        },
      };
    },
  },
];
