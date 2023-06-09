const taskValue = document.getElementsByClassName('task_value')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];

const mask = document.getElementById('mask');
const modal = document.getElementById('modal');

// 追加ボタンを作成
const addTasks = (task) => {
  // 入力したタスクを追加・表示
  const listItem = document.createElement('li');
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;

  // タスクに削除ボタン・達成ボタンを付与
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '削除';
  listItem.append(deleteButton);
  const AchiveButton = document.createElement("button");
  AchiveButton.innerHTML = '達成';
  listItem.append(AchiveButton);

  // 削除ボタンをクリックし、イベントを発動（タスクが削除）
  deleteButton.addEventListener('click', evt => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });
};

// 削除ボタンにタスクを消す機能を付与
const deleteTasks = (deleteButton) => {
  const chosenTask = deleteButton.closest('li');
  taskList.removeChild(chosenTask);
};

// 追加ボタンをクリックし、イベントを発動（タスクが追加）
taskSubmit.addEventListener('click', evt => {
  evt.preventDefault();
  const task = taskValue.value;
  addTasks(task);
  taskValue.value = '';
});

//達成ボタンをクリックしたらポップアップ表示
AchiveButton.addEventListener('click', evt => {
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
});

//暗い部分をクリックしたら非表示に
mask.addEventListener('click', evt => {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
});
