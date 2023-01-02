import TodoItem, {Projects} from './todoObjects'
import {Page} from './DOMContoller'
import './style.css'

Projects.addProject('Test Project');
Projects.setCurrentProject('Test Project')
Projects.addTodo(TodoItem('Test item','test desc','today','1'))
Projects.addTodo(TodoItem('Another Test item','test desc','today','1'))
// console.log(Projects.projectList[Projects.currentProject][0].title)

Page.setupSidebar();
Page.setupMain();
Page.refreshTodoList(Projects.projectList, Projects.currentProject);
Page.refreshProjectList(Projects.projectList)


