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
        Object.defineProperty(projectList, newProject, [])
    }

    const setCurrentProject = function (newCurrentProject) {
        this.currentProject = newCurrentProject;
    }

    const addTodo = function (newTodo) {
        this.projectList[currentProject].push(newTodo);
    }

    return ({ projectList, addProject, setCurrentProject, addTodo })
})();