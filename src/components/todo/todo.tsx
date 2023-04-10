import { useState } from "react";
import "./todo.scss";

export const Todo = () => {
  const [task, setTask]: any = useState([]);
  const [formdata, setFormdata] = useState({
    taskName: "",
    taskDesc: "",
  });

  const deleteItem = (id: number) => {
    const DelItem = task.filter((item: any, idx: number) => idx !== id);
    setTask(DelItem);
  };
  return (
    <>
      <div className="container">
        <header>
          <nav>
            <h1>My Tasks</h1>
          </nav>
        </header>

        <div className="container__list">
          <ul>
            {task.map((item: any, id: number) => (
              <li>
                <ol>
                  <li>{item["taskName"]}</li>
                  <li>{item["taskDesc"]}</li>
                  <button onClick={() => deleteItem(id)}><i className="fa-solid fa-trash"></i></button>
                  <button><i className="fa-solid fa-pen-to-square"></i></button>
                </ol>
                <br />
              </li>
            ))}
          </ul>
        </div>

        <div className="container__inputbox">
        <label>Task Name</label>
          <input
            type="text"
            name="taskName"
            value={formdata.taskName}
            onChange={(e) =>
              setFormdata({ ...formdata, taskName: e.target.value })
            }
          />
          <label>Description</label>
          <input
            type="text"
            name="taskDesc"
            value={formdata.taskDesc}
            onChange={(e) =>
              setFormdata({ ...formdata, taskDesc: e.target.value })
            }
          />
          <button type="button" onClick={(e) =>
             {setTask([...task, formdata]);
                setFormdata({
                    taskName:"",
                    taskDesc:""
                })
             }
             }>
            Create
          </button>
        </div>
      </div>
    </>
  );
};
