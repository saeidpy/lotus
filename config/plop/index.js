const fs = require("fs");
const prettier = require("prettier");
const path = require("path");

const OUTPUT_TARGET_COMPONENT = path.resolve(
  `${__dirname}/../../src/Components`
);
const OUTPUT_TARGET_CONTAINER = path.resolve(`${__dirname}/../../src/Page`);
const OUTPUT_TARGET_ACTIONS = path.resolve(
  `${__dirname}/../../src/State/Actions`
);
const OUTPUT_TARGET_REDUCER = path.resolve(
  `${__dirname}/../../src/State/Reducers`
);
const COMPONENT_TEMPLATE_PATH = `${__dirname}/Components`;
const PAGE_TEMPLATE_PATH = `${__dirname}/Page`;
const REDUCER_TEMPLATE_PATH = `${__dirname}/Reducer`;

function toUpperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function toLowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

const format = (path) =>
  prettier
    .getFileInfo(path)
    .then(({ inferredParser: parser }) =>
      prettier.resolveConfig(`${__dirname}/../../`).then((options) => ({
        ...options,
        parser,
        data: fs.readFileSync(path, "utf-8"),
      }))
    )
    .then(({ data, ...options }) =>
      fs.writeFileSync(path, prettier.format(data, options), "utf-8")
    )
    .then(() => `Formatted ${path}`);

module.exports = function (plop) {
  plop.setGenerator("Component", {
    prompts: [
      {
        name: "name",
        type: "input",
        message: "Name of your Component?",
        validate: function (value) {
          if (/([A-Z][a-z]+)+/.test(value)) {
            return true;
          }
          return " the component name must be in the hump form ";
        },
      },
    ],
    actions: ({ name }) => {
      const actions = [];
      //main component
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_COMPONENT}/${name}/${name}Component.js`,
        templateFile: `${COMPONENT_TEMPLATE_PATH}/component.js.hbs`,
      });
      //style component
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_COMPONENT}/${name}/${name}.style.js`,
        templateFile: `${COMPONENT_TEMPLATE_PATH}/style.js.hbs`,
      });
      //test component
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_COMPONENT}/${name}/${name}.test.js`,
        templateFile: `${COMPONENT_TEMPLATE_PATH}/MainComponentTest.js.hbs`,
      });
      //document component
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_COMPONENT}/${name}/${name}.stories.js`,
        templateFile: `${COMPONENT_TEMPLATE_PATH}/ComponentDocument.js.hbs`,
      });

      return actions;
    },
  });

  plop.setGenerator("Page", {
    prompts: [
      {
        name: "name",
        type: "input",
        message: "Name of your page?",
        validate: function (value) {
          if (/([A-Z][a-z]+)+/.test(value)) {
            return true;
          }
          return " the component name must be in the hump form ";
        },
      },
    ],
    actions: ({ name, listComponentPage }) => {
      const actions = [];
      //index component
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_CONTAINER}/${name}/components/${name}Component.js`,
        templateFile: `${COMPONENT_TEMPLATE_PATH}/component.js.hbs`,
      });
      //style component
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_CONTAINER}/${name}/components/${name}.style.js`,
        templateFile: `${COMPONENT_TEMPLATE_PATH}/style.js.hbs`,
      });
      //test component
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_CONTAINER}/${name}/components/${name}Component.test.js`,
        templateFile: `${COMPONENT_TEMPLATE_PATH}/MainComponentTest.js.hbs`,
      });

      //document component
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_CONTAINER}/${name}/components/${name}.stories.js`,
        templateFile: `${PAGE_TEMPLATE_PATH}/PageDocument.js.hbs`,
      });

      //test container
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_CONTAINER}/${name}/${name}Container.test.js`,
        templateFile: `${COMPONENT_TEMPLATE_PATH}/MainComponentTest.js.hbs`,
      });

      //container page
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_CONTAINER}/${name}/${name}Container.js`,
        templateFile: `${PAGE_TEMPLATE_PATH}/container.js.hbs`,
      });
      //hook page
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_CONTAINER}/${name}/${name}Hook.js`,
      });

      return actions;
    },
  });

  plop.setGenerator("ActionReducer", {
    prompts: [
      {
        name: "name",
        type: "input",
        message: "Name of your ActionReducer?(CamelCase)",
      },
      {
        name: "nameFunc",
        type: "input",
        message: "Name of your function ActionReducer?",
      },
      {
        name: "type",
        type: "input",
        message: "Type of your ActionReducer?(SNACK_CASE)",
      },
      {
        name: "typeAction",
        type: "list",
        message: "Which type of ActionReducer do you want?",
        choices: [
          {
            name: "Async",
            value: "Async",
          },
          {
            name: "Basic",
            value: "Basic",
          },
        ],
      },
    ],
    actions: ({ name, type, typeAction, nameFunc }) => {
      const actions = [];
      //action
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_ACTIONS}/${name}Action/${name}Action.js`,
        templateFile:
          typeAction === "Async"
            ? `${REDUCER_TEMPLATE_PATH}/AsyncAction.js.hbs`
            : `${REDUCER_TEMPLATE_PATH}/Action.js.hbs`,
        data: {
          type,
          nameFunc,
        },
      });
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_ACTIONS}/${name}Action/${name}Action.test.js`,
        templateFile:
          typeAction === "Async"
            ? `${REDUCER_TEMPLATE_PATH}/AsyncActionTest.js.hbs`
            : `${REDUCER_TEMPLATE_PATH}/ActionTest.js.hbs`,
        data: {
          type,
          nameFunc,
        },
      });
      actions.push({
        type: "modify",
        path: `${OUTPUT_TARGET_ACTIONS}/index.js`,
        pattern: "// IMPORT ACTION",
        templateFile: `${REDUCER_TEMPLATE_PATH}/ImportAction.js.hbs`,
      });
      actions.push({
        type: "modify",
        path: `${OUTPUT_TARGET_ACTIONS}/index.js`,
        pattern: "// EXPORT ACTION",
        templateFile: `${REDUCER_TEMPLATE_PATH}/ExportAction.js.hbs`,
      });

      //reducer
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_REDUCER}/${name}Reducer/${name}Reducer.js`,
        templateFile:
          typeAction === "Async"
            ? `${REDUCER_TEMPLATE_PATH}/AsyncReducer.js.hbs`
            : `${REDUCER_TEMPLATE_PATH}/Reducer.js.hbs`,
        data: {
          type,
          nameFunc,
        },
      });
      actions.push({
        type: "add",
        path: `${OUTPUT_TARGET_REDUCER}/${name}Reducer/${name}Reducer.test.js`,
        templateFile:
          typeAction === "Async"
            ? `${REDUCER_TEMPLATE_PATH}/AsyncReducerTest.js.hbs`
            : `${REDUCER_TEMPLATE_PATH}/ReducerTest.js.hbs`,
        data: {
          type,
          nameFunc,
        },
      });
      actions.push({
        type: "modify",
        path: `${OUTPUT_TARGET_REDUCER}/index.js`,
        pattern: "// IMPORT REDUCER",
        templateFile: `${REDUCER_TEMPLATE_PATH}/ImportReducer.js.hbs`,
      });
      actions.push({
        type: "modify",
        path: `${OUTPUT_TARGET_REDUCER}/index.js`,
        pattern: "// EXPORT STORE",
        templateFile: `${REDUCER_TEMPLATE_PATH}/ExportReducer.js.hbs`,
      });

      return actions;
    },
  });
};
