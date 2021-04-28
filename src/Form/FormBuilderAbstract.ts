import Node from "../../node_modules/mudde-node/src/node"
import BuilderAbstract from "./BuilderAbstract";
import Form from "./Form";

export default abstract class FormBuilderAbstract extends BuilderAbstract {

   abstract postBuild(form:Form): void

}