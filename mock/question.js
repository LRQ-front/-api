const Mock = require("mockjs");
const Random = Mock.Random;

const getQuestionList = require("../data/getQuestionList");
const getComponentList = require("../data/getComponentList");

module.exports = [
  {
    //查询某个问卷
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          desc: "问卷描述信息",
          js: "",
          css: "",
          isPublished: true,
          isDeleted: false,
          componentList: getComponentList(),
        },
      };
    },
  },
  {
    //创建问卷
    url: "/api/question",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    //查看问卷
    url: "/api/question",
    method: "get",
    response(ctx) {
      const { url = "", query = {} } = ctx;

      //查看是否有传递这些值，在mock数据时，就生成这些
      const isDeleted = url.indexOf("isDeleted=true") >= 0;
      const isStar = url.indexOf("isStar") >= 0;
      const pageSize = parseInt(query.pageSize) || 10;

      return {
        errno: 0,
        data: {
          list: getQuestionList({ len: pageSize, isDeleted, isStar }),
          total: 100,
        },
      };
    },
  },
  {
    //更新问卷
    url: "/api/question/:id",
    method: "patch",
    response() {
      return {
        errno: 0,
      };
    },
  },
  {
    //复制问卷
    url: "/api/question/duplicate/:id",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    //批量删除问卷
    url: "/api/question",
    method: "delete",
    response() {
      return {
        errno: 0,
      };
    },
  },
];
