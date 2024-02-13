window.addEventListener("load", () => {
  // מתחיל לבצע פעולות סקריפט רק לאחר טעינת הדף
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // מונע אתחול של הדף כאשר לוחצים על הכפתור ללא מלל בשדה

    const task = input.value;

    if (!task) {
      // מקפיץ התראה במידה ולחצו על הוספת משימה ללא מילוי תוכן בשדה מלל
      alert("Please enter your task first!");
      return;
    }

    const task_el = document.createElement("div"); // מיישם פרמטר ליצירת דיב חדש
    task_el.classList.add("task"); // מיישם קלאס לדיב החדש לשם משיכת עיצוב

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el); // מוסיף את הדיב החדש בפועל

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly"); // מגדיר את המלל הנבחר במשימה לקריאה בלבד

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = ""; // מנקה את שדה המלל לקראת המשימה הבאה

    task_edit_el.addEventListener("click", () => { // מפעיל פונקציה לשינוי מלל המשימה
      if (task_edit_el.innerText.toLocaleLowerCase() === "edit") {
        task_input_el.removeAttribute("readonly"); // מסיר את הגדרת ה"קריאה בלבד מהמשימה לכדי עריכה ע"י המשתמש
        task_input_el.focus(); // מקפיץ את סממן הכיתוב אוטו' מבלי צורך בלחיצה על שדה הכתב
        task_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly" , "readonly");
        task_edit_el.innerText = "Edit";
      }
    });

    task_delete_el.addEventListener("click" , () => {
        list_el.removeChild(task_el); // 
    });
  });
});
