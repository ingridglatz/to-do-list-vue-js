const handlingTasks = {
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === "") {
        this.newTask = "";
        alert("Digite uma tarefa");
        return;
      }

      this.tasks.push({
        description: this.newTask,
        done: false,
      });

      localStorage.setItem("tasks", JSON.stringify(this.tasks));

      this.newTask = "";
    },
    clearTasks() {
      this.tasks = [];
    },
  },
  created() {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  },
  updated() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },
};

Vue.createApp(handlingTasks).mount("#app");
