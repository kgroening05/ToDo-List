// TODO: factory function for creating new todo items
export default function TodoItem (title, description, dueDate, priority) {
    const setPriority = function (newPriority) {
        this.priority = newPriority;
    }
    const getPriority = () => {console.log(priority)}
    return({ title, description, dueDate, priority, setPriority, getPriority })
};

export const Projects =  (() => {
    let projectList = {default: ['example1','example2']};
    let currentProject = 'default';

    const addProject = function (newProject) {
        Object.defineProperty(projectList, newProject,{
            value: [],
            writable: true,
            enumerable: true,
            configurable: true,
        });
    }

    const setCurrentProject = function (newCurrentProject) {
        if (newCurrentProject in this.projectList){
            
            this.currentProject = newCurrentProject;
        } else {
            console.log("That project doesn't exist yet.")
        }
    }

    const addTodo = function (newTodo) {
        this.projectList[this.currentProject].push(newTodo);
    }

    return ({ projectList, currentProject, addProject, setCurrentProject, addTodo })
})();