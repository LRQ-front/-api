const Mock = require("mockjs");
const Random = Mock.Random;

function getComponentList() {
  const componentList = [
    {
      fe_id: "c1",
      type: "questionInfo", //组件类型，前后端需要统一好
      title: "问卷标题",
      isHidden: false,
      isLocked: false,
      props: { title: "问卷标题", desc: "问卷描述..." },
    },
    {
      fe_id: "c2",
      type: "questionTitle", //组件类型，前后端需要统一好
      title: "标题",
      isHidden: false,
      isLocked: false,
      props: { text: "个人信息调研", level: 1, isCenter: false },
    },
    {
      fe_id: "c3",
      type: "questionInput",
      title: "输入框1",
      isHidden: false,
      isLocked: false,
      props: { title: "你的姓名", placeholder: "请输入姓名" },
    },
    {
      fe_id: "c4",
      type: "questionInput",
      title: "输入框2",
      isHidden: false,
      isLocked: false,
      props: { title: "你的电话", placeholder: "请输入电话" },
    },
    {
      fe_id: "c8",
      type: "questionParagraph",
      title: "段落",
      isHidden: false,
      isLocked: false,
      props: {
        text: "段落内容\n段落内容2",
        isCenter: false,
      },
    },
    {
      fe_id: "c5",
      type: "questionTextarea",
      title: "多行输入框",
      isHidden: false,
      isLocked: false,
      props: { title: "留言", placeholder: "请输入留言内容" },
    },
    {
      fe_id: "c6",
      type: "questionRadio",
      title: "单选标题",
      isHidden: false,
      isLocked: false,
      props: {
        title: "单选标题",
        value: "",
        isVertical: false,
        options: [
          { value: "item1", text: "选项1" },
          { value: "item2", text: "选项2" },
          { value: "item3", text: "选项3" },
        ],
      },
    },
    {
      fe_id: "c7",
      type: "questionCheckbox",
      title: "多选标题",
      isHidden: false,
      isLocked: false,
      props: {
        title: "多选",
        isVertical: false,
        list: [
          { text: "选项1", value: "item1", checked: false },
          { text: "选项2", value: "item2", checked: false },
          { text: "选项3", value: "item3", checked: false },
        ],
      },
    },
  ];

  return componentList;
}

module.exports = getComponentList;
