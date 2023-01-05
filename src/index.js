import TodoItem, {Projects} from './todoObjects'
import {Page} from './DOMContoller'
import './style.css'

const toDoFormElements = {'title':'text', 'description':'text', 'date':'date', 'priority':'number', 'add':'submit'};
const EventListeners = (()=>{
    const submitBtn = function () {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        const priority = document.getElementById('priority').value;
        const newItem = TodoItem(title, description, date, priority)
        Projects.addTodo(newItem);
        Page.refreshTodoList(Projects.projectList, Projects.currentProject);
    }
    return { submitBtn }
})();

Projects.addProject('Test Project');
Projects.setCurrentProject('Test Project')
Projects.addTodo(TodoItem('Test item','test desc','today','1'))
Projects.addTodo(TodoItem('Another Test item','test desc','today','1'))
// console.log(Projects.projectList[Projects.currentProject][0].title)

Page.setupSidebar();
Page.setupMain();
Page.setupModal();
Page.refreshTodoList(Projects.projectList, Projects.currentProject);
Page.refreshProjectList(Projects.projectList)
Page.addModalForm(toDoFormElements, EventListeners.submitBtn);



