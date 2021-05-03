///<amd-module name='Mudde/Form/FormBuilderAbstract'/>

import BuilderAbstract from "Mudde/Form/BuilderAbstract";
import Form from "Mudde/Form/Form";

export default abstract class FormBuilderAbstract extends BuilderAbstract {

   abstract postBuild(form:Form): void

}