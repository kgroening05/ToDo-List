export const Page = (()=>{
    const contentDiv = document.getElementById('content');

    const setupSidebar = function() {
        const sidebarDiv = document.createElement('div');
        const sectionTitle = document.createElement('h2')
        const projectListDiv = document.createElement('div')
        const addProjectBtn = document.createElement ('button')
        
        sidebarDiv.classList.add ('sidebar')
        projectListDiv.classList.add ('project-list')

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

    const refreshTodoList = function(projectList, currentProject) {
        const todoContainer = document.getElementById('todo-container');
        for (const todo in projectList[currentProject]) {
            const todoCard = document.createElement('div')
            todoCard.className = 'todo-card'
            todoCard.textContent = projectList[currentProject][todo].title;
            todoContainer.appendChild(todoCard)
        }
    }

    return { setupSidebar, setupMain, refreshTodoList }
})(); 

export default function (){
    console.log('Hello')
}