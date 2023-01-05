import TodoItem, {Projects} from './todoObjects'
import {Page} from './DOMContoller'
import './style.css'

const toDoFormElements = {'title':'text', 'description':'text', 'date':'date', 'priority':'number', 'add':'submit'};
const projectFormElements = {'project' : 'text', 'add':'submit'}
const EventListeners = (()=>{
    const submitTodoBtn = function () {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        const priority = document.getElementById('priority').value;
        const newItem = TodoItem(title, description, date, priority)
        Projects.addTodo(newItem);
        Page.refreshTodoList(Projects.projectList, Projects.currentProject);
    }
    const submitProjectBtn = function () {
        const newProject = document.getElementById('project').value;
        Projects.addProject(newProject)
        Page.refreshProjectList(Projects.projectList, EventListeners.selectCurrentProject)
    }
    const addTodoItemBtn = function () {
        Page.addModalForm(toDoFormElements, EventListeners.submitTodoBtn);
    }
    const addProjectItemBtn = function() {
        Page.addModalForm(projectFormElements, EventListeners.submitProjectBtn);
    }
    const selectCurrentProject = function(event) {
        Projects.setCurrentProject(event.target.innerText)
        const projectTitle = document.getElementById('project-title')
        projectTitle.textContent = Projects.currentProject
        Page.refreshTodoList(Projects.projectList, Projects.currentProject);
    }
    return { submitTodoBtn, addTodoItemBtn, submitProjectBtn, addProjectItemBtn, selectCurrentProject }
})();

// Setup DOM elements
Page.setupSidebar(EventListeners.addProjectItemBtn);
Page.setupMain(EventListeners.addTodoItemBtn, Projects.currentProject);
Page.setupModal();

// Refresh list displays
Page.refreshTodoList(Projects.projectList, Projects.currentProject);
Page.refreshProjectList(Projects.projectList, EventListeners.selectCurrentProject)



