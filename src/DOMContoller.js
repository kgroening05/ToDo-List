export const Page = (()=>{
    const contentDiv = document.getElementById('content');

    const setupSidebar = function() {
        const sidebarDiv = document.createElement('div');
        const sectionTitle = document.createElement('h2')
        const projectListDiv = document.createElement('div')
        const addProjectBtn = document.createElement ('button')
        
        sidebarDiv.classList.add ('sidebar')
        projectListDiv.id = 'project-list'

        sectionTitle.textContent = 'Projects';
        addProjectBtn.textContent = 'Add Project'

        sidebarDiv.append(sectionTitle, addProjectBtn, projectListDiv);
        contentDiv.append(sidebarDiv);
    }

    const setupMain = function() {
        const main = document.createElement('main');
        const projectTitle = document.createElement('h2')
        const addTodoBtn = document.createElement('button')
        const todoContainer = document.createElement('div')

        projectTitle.id = 'project-title'
        todoContainer.id = 'todo-container'
        addTodoBtn.id = 'add-todo-btn'

        addTodoBtn.textContent = 'Add Task'

        main.append(projectTitle, addTodoBtn, todoContainer)
        contentDiv.append(main)
    }

    const setupModal = function() {
        const body = document.getElementById('body')
        const modal = document.createElement('div');
        const modalContent = document.createElement('div')
        const closeBtn = document.createElement('button')

        modal.id = 'modal'
        closeBtn.classList.add('close-btn')
        modalContent.classList.add('modal-content')
        modalContent.textContent = 'Hello Modal'
        closeBtn.textContent = 'Discard'
        modal.append(modalContent, closeBtn)
        body.insertBefore(modal, contentDiv)
    }

    const refreshTodoList = function(projectList, currentProject) {
        const todoContainer = document.getElementById('todo-container');
        for (const todo in projectList[currentProject]) {
            const todoCard = document.createElement('div')
            todoCard.className = 'todo-card'
            todoCard.textContent = projectList[currentProject][todo].title;
            todoContainer.appendChild(todoCard)
        }
    }

    const refreshProjectList = function(projectList) {
        const projectListDiv = document.getElementById('project-list')
        for (const project in Object.keys(projectList)){
            const projectCard = document.createElement('div')
            projectCard.className = 'project-card'
            projectCard.textContent = Object.keys(projectList)[project];
            projectListDiv.appendChild(projectCard)
        }
    }

    return { setupSidebar, setupMain, setupModal, refreshTodoList, refreshProjectList }
})(); 

export default function (){
    console.log('Hello')
}