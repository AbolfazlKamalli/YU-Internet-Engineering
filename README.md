# Daily To-Do List Application 📝

A beautiful and feature-rich daily task management web application with Persian language support.

## 🎯 Project Overview

This project is a complete implementation of a To-Do List application built with pure **HTML, CSS, and JavaScript (Vanilla JS)** as part of the Internet Engineering course at Yazd University.

## ✨ Core Features (PRD Requirements)

### Basic Functionality

- ✅ **Add New Tasks** - Create tasks using input field with button or Enter key
- ✅ **Delete Tasks** - Remove tasks with smooth animation
- ✅ **Mark as Complete** - Toggle completion status by clicking checkbox or task text
- ✅ **Local Storage** - All tasks persist after browser close/refresh

### Advanced Features (Bonus Points)

- ✅ **Edit Tasks** - Click edit button or double-click on task for quick edit
- ✅ **Filter Tasks** - View All, Active, or Completed tasks
- ✅ **Task Statistics** - Real-time display of total and completed tasks
- ✅ **Dark/Light Theme** - Toggle between themes with persistent preference
- ✅ **Persian Font** - Vazirmatn font integration via CDN
- ✅ **Persian Numbers** - All numbers displayed in Persian numerals (۰-۹)
- ✅ **Responsive Design** - Optimized for mobile, tablet, and desktop

## 🎨 Design Themes

### Blue Theme (Light Mode)

- Primary colors: Blue shades (#2563eb, #1e40af, #3b82f6)
- Beautiful gradient background
- Blue-tinted shadows and effects
- Clean and modern interface

### Dark Theme

- Dark background with adapted blue colors
- Enhanced contrast for better readability
- Appropriate shadows for depth
- Smooth transitions between themes

## 🔤 Typography & Localization

### Vazirmatn Font

- Official Persian font loaded from CDN
- Full RTL (Right-to-Left) support
- Excellent readability for Persian text

### Persian Numerals

- All numbers displayed in Persian (۰، ۱، ۲، ...)
- Automatic conversion via `toPersianNumber()` function
- Applied to statistics and counts

## 📱 Responsive Features

- Mobile-first design approach
- Adaptive layout for all screen sizes
- Touch-friendly interface elements
- Fixed theme toggle button for easy access

## ⌨️ Keyboard Shortcuts

- **Enter** - Add new task
- **Escape** - Cancel editing
- **Ctrl/Cmd + K** - Focus on input field
- **Double Click** - Quick edit task

## 🎭 Animations & Transitions

- **Fade In/Out** - Smooth element appearances
- **Slide In** - New task additions
- **Shake** - Input validation feedback
- **Smooth Transitions** - Theme switching
- **Rotation** - Theme toggle button effect
- **Slide Out** - Task deletion

## 📂 Project Structure

```
HW01/
├── index.html          # HTML structure
├── style.css           # Styles and themes
├── script.js           # Application logic
└── README.md          # Documentation
```

## 🚀 How to Use

1. Open `index.html` in your web browser
2. Type a new task in the input field
3. Click "افزودن" button or press Enter
4. Click on task to mark as complete/incomplete
5. Click edit button (✎) or double-click for quick edit
6. Click delete button (🗑) to remove task
7. Use filter buttons to view specific tasks
8. Click theme toggle button (☀️/🌙) to switch themes

## 💾 Data Persistence

- Tasks stored in browser's LocalStorage
- Data persists across browser sessions
- Theme preference is also saved
- No backend server required

## 🎯 Evaluation Criteria

### Design & Style (30%)

- ✅ Professional and attractive design
- ✅ Appropriate color scheme
- ✅ Responsive design
- ✅ Engaging animations

### Core Features (40%)

- ✅ Add task
- ✅ Delete task
- ✅ Mark as complete
- ✅ LocalStorage persistence

### Advanced Features (30%)

- ✅ Task editing
- ✅ Task filtering
- ✅ Statistics display
- ✅ Theme switching
- ✅ Persian font
- ✅ Persian numerals

## 🛠️ Technologies Used

- **HTML5** - Document structure
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - Application logic (no frameworks)
- **LocalStorage API** - Data persistence
- **Vazirmatn Font** - Persian typography

## � Technical Implementation

### Key Functions

- `initTheme()` - Load saved theme preference
- `setTheme()` - Apply theme and save to storage
- `toggleTheme()` - Switch between light/dark modes
- `toPersianNumber()` - Convert English to Persian numerals
- `addTask()` - Create and add new task
- `deleteTask()` - Remove task with animation
- `toggleTask()` - Mark task as complete/incomplete
- `editTask()` - Enable task editing
- `renderTasks()` - Display filtered tasks
- `updateStats()` - Update task statistics
- `setFilter()` - Filter tasks by status

### Data Structure

```javascript
{
  id: "unique-id",
  text: "Task description",
  completed: false,
  createdAt: "ISO-8601-timestamp"
}
```

## 📝 Future Enhancements

Potential features for future versions:

1. **Due Dates** - Add deadlines to tasks
2. **Priority Levels** - Set task importance (Low, Medium, High)
3. **Categories** - Group tasks by category
4. **Search** - Find specific tasks
5. **Export/Import** - Download and upload task lists
6. **Subtasks** - Break down tasks into smaller steps
7. **Reminders** - Set notification alerts

## 👨‍💻 Developer

This project was developed for the Internet Engineering course at Yazd University.

**Course**: Internet Engineering (2224118_01)  
**Term**: Fall 1404 (2025)  
**Institution**: Yazd University

## 📄 License

This project is created for educational purposes.

---

**Version**: 1.0.0  
**Status**: ✅ Ready for Submission  
**Last Updated**: October 2025
