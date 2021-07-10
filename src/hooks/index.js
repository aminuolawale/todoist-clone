import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import { collatedTasksExist } from "../helpers";
import moment from "moment";

const TEST_USER_ID = "ajfkjadjlajkfj90rujnvvvj993jnp";
export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", TEST_USER_ID);

    if (selectedProject && !collatedTasksExist(selectedProject)) {
      unsubscribe = unsubscribe.where("projectId", "==", selectedProject);
    } else if (selectedProject == "TODAY") {
      unsubscribe = unsubscribe.where(
        "date",
        "==",
        moment().format("DD/MM/YYYY")
      );
    } else if (selectedProject === "INBOX" || selectedProject === 0) {
      unsubscribe = unsubscribe.where("date", "==", "");
    } else {
      unsubscribe = unsubscribe;
    }
    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));
    });
    setTasks(
      selectedProject === "NEXT_7"
        ? newTasks.filter(
            (task) =>
              moment(task.date, "DD-MM-YYY").diff(moment(), "days") <= 7 &&
              !task.archived
          )
        : newTasks.filter((task) => !task.archived)
    );
    setArchivedTasks(newTasks.filter((task) => task.archived));
    return () => unsubscribe();
  }, [selectedProject]);
  return { tasks, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("projects")
      .where("userId", "==", TEST_USER_ID)
      .orderBy("projectId")
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          ...project.data(),
          docId: project.id,
        }));
        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, []);
  return { projects, setProjects };
};
