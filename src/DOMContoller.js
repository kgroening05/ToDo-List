export const Page = (()=>{
    const contentDiv = document.getElementById('content');

    const setupSidebar = function(btnEventListener) {
        const sidebarDiv = document.createElement('div');
        const sectionTitle = document.createElement('h2')
        const projectListDiv = document.createElement('div')
        const addProjectBtn = document.createElement ('button')
        
        sidebarDiv.classList.add ('sidebar')
        projectListDiv.id = 'project-list'

        sectionTitle.textContent = 'Projects';
        addProjectBtn.textContent = 'Add Project'

        addProjectBtn.addEventListener('click', () => {
            btnEventListener();
        });

        sidebarDiv.append(sectionTitle, addProjectBtn, projectListDiv);
        contentDiv.append(sidebarDiv);
    }

    const setupMain = function(btnEventListener) {
        const main = document.createElement('main');
        const projectTitle = document.createElement('h2')
        const addTodoBtn = document.createElement('button')
        const todoContainer = document.createElement('div')

        projectTitle.id = 'project-title'
        todoContainer.id = 'todo-container'
        addTodoBtn.id = 'add-todo-btn'

        addTodoBtn.textContent = 'Add Task'

        addTodoBtn.addEventListener('click', ()=>{
            btnEventListener();
        });

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
        modalContent.id = 'modal-content'
        modalContent.textContent = 'Hello Modal'
        closeBtn.textContent = 'Discard'
        closeBtn.addEventListener('click',()=>{
            const modalWindow = document.getElementById('modal');
            modalWindow.style.display = 'none'
        })
        modal.append(modalContent, closeBtn)
        body.insertBefore(modal, contentDiv)
    }

    function _removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    const addModalForm = function (formElements, submitCallbackFn){
        const modalWindow = document.getElementById('modal');
        const modalContent = document.getElementById('modal-content');
        _removeAllChildNodes(modalContent);
        const todoForm = document.createElement('form');
        todoForm.setAttribute('action', `javascript:${submitCallbackFn}()`)
        
        for (const index in Object.keys(formElements)) {
            const entryDiv = document.createElement('div')
            entryDiv.classList.add('input-div')
            const [key, value] = Object.entries(formElements)[index]
            const field = document.createElement('input')
            field.setAttribute('type', `${value}`)
            field.setAttribute('name', `${key}`)
            field.classList.add('input')
            field.id = `${key}`;
            if (value !== 'submit') {
                const label = document.createElement('label')
                label.setAttribute('for', `${key}`)
                label.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: `
                entryDiv.append(label)
            } else {
                field.addEventListener('click', () => {
                    modalWindow.style.display = 'none'
                    submitCallbackFn();

                })
                field.setAttribute('value', `${key.charAt(0).toUpperCase() + key.slice(1)}`);
            }
            entryDiv.append(field)
            todoForm.append(entryDiv)
        }

        modalWindow.style.display = 'flex'
        modalContent.append(todoForm)
    }

    const refreshTodoList = function(projectList, currentProject) {
        const todoContainer = document.getElementById('todo-container');
        _removeAllChildNodes(todoContainer);
        for (const todo in projectList[currentProject]) {
            const todoCard = document.createElement('div')
            todoCard.className = 'todo-card'
            todoCard.textContent = projectList[currentProject][todo].title;
            todoContainer.appendChild(todoCard)
        }
    }

    const refreshProjectList = function(projectList) {
        const projectListDiv = document.getElementById('project-list')
        _removeAllChildNodes(projectListDiv);
        for (const project in Object.keys(projectList)){
            const projectCard = document.createElement('div')
            projectCard.className = 'project-card'
            projectCard.textContent = Object.keys(projectList)[project];
            projectListDiv.appendChild(projectCard)
        }
    }

    return { setupSidebar, setupMain, setupModal, refreshTodoList, refreshProjectList, addModalForm }
})(); 

export default function (){
    console.log('Hello')
}