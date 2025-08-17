# Visual Workflow Builder

A modern, extensible visual workflow builder for AI and data pipelines, featuring node abstraction, beautiful styling, dynamic text node logic, and backend integration for DAG validation.

---

## Features

- **Node Abstraction:** Easily create new node types using a shared `BaseNode` component. All nodes (inputs, outputs, LLMs, text, vector DB, etc.) inherit unified styling and logic.
- **Dynamic Text Node:** The Text node auto-resizes in width and height as you type, and supports variable handles for `{{variable}}` patterns.
- **Beautiful UI:** Consistent, modern design using Tailwind CSS and Lucide icons.
- **Backend Integration:** Submit your pipeline to a FastAPI backend, which checks if your flow is a DAG and returns node/edge counts.
- **Confetti & Alerts:** Get instant, delightful feedback on successful DAG validation or warnings for cycles.

---

## Getting Started

### 1. **Install Dependencies**

```sh
cd frontend
npm install
```

### 2. **Run the Frontend**

```sh
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. **Run the Backend**

```sh
cd ../backend
pip install fastapi uvicorn pydantic
uvicorn main:app --reload
```
The backend will be available at [http://localhost:8000](http://localhost:8000).

---

## Usage

- **Drag and drop nodes** from the palette to build your workflow.
- **Connect nodes** using handles to define data flow.
- **Text Node:** Type text and use `{{variable}}` to create dynamic input handles.
- **Submit:** Click the floating Submit button (bottom right) to validate your pipeline.
- **Feedback:** If your flow is a DAG, a confetti overlay and success message appear. If not, a warning overlay is shown.
- **Backend Response:** The backend returns the number of nodes, edges, and whether the flow is a DAG.

---

## Node Types

- **Input Node:** Entry point for user or external data.
- **Output Node:** Displays or exports the final output.
- **LLM Node:** Connects to a large language model for text generation.
- **Text Node:** Static or templated text with variable support.
- **Vector DB Node:** Stores and retrieves vector embeddings.
- **Summarizer Node:** Summarizes input text using AI.
- **File Output Node:** Saves results to a file.
- **Webhook Listener Node:** Triggers workflow from external events.
- **Google Calendar Node:** Integrates with Google Calendar.
- **API Call Node:** Makes HTTP API calls.

---

## Customization

- **Add New Nodes:** Create a new file in `src/nodes/`, import `BaseNode`, and pass your fields, handles, and description.
- **Styling:** All nodes use Tailwind CSS for easy theming and customization.
- **Icons:** Use [Lucide icons](https://lucide.dev/icons/) for beautiful, consistent icons.

---

## Backend API

- **POST** `/pipelines/parse`
  - **Request:** `{ nodes: [...], edges: [...] }`
  - **Response:** `{ num_nodes: int, num_edges: int, is_dag: bool }`

---

## License

MIT

---

## Credits

- Built with [React Flow](https://reactflow.dev/), [Tailwind CSS](https://tailwindcss.com/), [Lucide Icons](https://lucide.dev/), and [FastAPI](https://fastapi.tiangolo.com/).