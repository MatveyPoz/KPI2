# KPI2
Repository for performing lab work on software engineering components.

## Structure
KPI2/
├── README.md // General description
├── .gitignore // Excluding unnecessary files
├── task-0/ // Repository sctructure organisation
├── task-1/ // Task 1 realisation
├── task-2/ // Task 2 realisation
├── task-3/ // Task 3 realisation
├── task-4/ // Task 4 realisation
└── task-5/ // Task 5 realisation

Every catalog contains:
- **index.js** - main implementation file.
- **demo.js** - demonstration of code usage.
- **README.md** - case description and instructions.

## How to start

1. Clone repository:
git clone KPI2 cd KPI2

2. Go to the task folder to see the instructions:
cd task-<номер задачи>

3. Run the commands to run the examples:
node demo.js


## Tasks
- **Task 0**: Prepare GitHub repo for Tasks.
- **Task 1**:
  * Choose array fn (map/filter/filterMap/some/find/findIndex)
  * Prepare its callback based async counterpart
  * Prepare demo cases for the usage
  * Add new on-demend feature during review
    e.g.: Add support for debounce (if the task took less then X time to
    complete -- add an additional execution delya)
- **Task 2**:
  * Prepare promise based alternative
  * Write use cases for the promise based solution
  * Write use cases for the async-await
  * Add new on-demend feature during review
    e.g.: Add support for parallelism

  Note: for technologies that do not have the native Future-like async functionalities
  You may combine Task 1 and 2 into a single Task that will showcase the idiomatic way of handling concurrency.
- **Task 3**:
  * Integrate AbortController or other Cancallable approach
- **Task 4**:
  (Stream/AsyncIterator/Alternative) -- Ongoing processing of large data sets that do not fit in memory
- **Task 5**:
  (Observable/EventEmitter/Alternative) -- Reactive message based communication between entities
