export const Page = (()=>{
    const contentDiv = document.getElementById('content');
    console.log(contentDiv)
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

    return { setupSidebar }
})(); 

export default function (){
    console.log('Hello')
}