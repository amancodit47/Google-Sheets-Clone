# Google Sheets Clone

## **Overview**
This project is a web application that mimics the functionality and user interface of Google Sheets. It supports key features such as data entry, mathematical functions, data quality functions, and row/column management. The application is designed for easy usability and accuracy, making it an excellent demonstration of web development principles and dynamic UI design.

---

## **Features**

### **1. Spreadsheet Interface**
- **Google Sheets-like UI**: Toolbar, formula bar, and cell-based grid structure.
- **Drag-and-Drop Functionality**: Supports dragging cell content and formulas.
- **Cell Dependencies**: Automatically updates dependent cells when changes are made.
- **Basic Formatting**: Allows bold, italics, font size changes, and color.
- **Dynamic Row/Column Management**: Add, delete, and resize rows and columns.

### **2. Mathematical Functions**
- **SUM**: Calculates the sum of a range of cells.
- **AVERAGE**: Computes the average of a range of cells.
- **MAX**: Finds the maximum value in a range of cells.
- **MIN**: Finds the minimum value in a range of cells.
- **COUNT**: Counts the numerical values in a selected range.

### **3. Data Quality Functions**
- **TRIM**: Removes leading and trailing whitespace from text.
- **UPPER**: Converts text to uppercase.
- **LOWER**: Converts text to lowercase.
- **REMOVE_DUPLICATES**: Removes duplicate rows from a range.
- **FIND_AND_REPLACE**: Finds and replaces specific text across cells.

### **4. Data Entry and Validation**
- Supports multiple data types (text, numbers, dates).
- Implements basic data validation for numeric fields.

### **5. Testing Environment**
- Users can input data and test all implemented functions.
- Results are displayed dynamically in the cells.

### **Bonus Features**
- Save and load spreadsheets using local storage.
- Data visualization with charts and graphs.
- Support for complex formulas with absolute/relative references.

---

## **Tech Stack**

### **Frontend**
- **React**: For building the dynamic, component-based UI.
- **CSS/Bootstrap**: For styling and layout consistency.

### **Backend** (Optional for future features)
- **Node.js + Express**: For server-side operations such as saving/loading spreadsheets.
- **SQLite**: A lightweight database for storing spreadsheet data.

### **Libraries**
- **React-DnD**: For implementing drag-and-drop functionality.
- **Chart.js/D3.js**: For data visualization.
- **Jest & Cypress**: For unit and end-to-end testing.

---

## **Data Structures**
- **Grid State**: Represented as a 2D array for storing cell data and metadata.
- **Dependency Graph**: Maintains an adjacency list to track and update cell dependencies dynamically.
- **Formula Parser**: Utilizes an Abstract Syntax Tree (AST) to parse and evaluate formulas.

---

## **Installation**

### **1. Prerequisites**
- Node.js installed on your system.

### **2. Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/google-sheets-clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd google-sheets-clone
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` to view the application.

---

## **Usage**

1. **Enter Data**: Click on a cell to enter text, numbers, or dates.
2. **Apply Mathematical Functions**: Enter formulas like `SUM(A1:A3)` in the formula bar and click Apply.
3. **Format Cells**: Use the toolbar for formatting options like bold, italics, or changing font size.
4. **Manage Rows/Columns**: Use the buttons to add or delete rows/columns dynamically.
5. **Test Features**: Experiment with functions like `TRIM`, `UPPER`, and `FIND_AND_REPLACE` to see real-time updates.

---

## **Testing**
- Run unit tests using Jest:
  ```bash
  npm test
  ```
- Perform end-to-end testing with Cypress:
  ```bash
  npx cypress open
  ```

---

## **Future Scope**
- Enhanced support for more complex formulas and nested dependencies.
- Integration with cloud storage solutions for saving and sharing spreadsheets.
- Advanced data visualization with interactive charts and graphs.
- Collaboration features for real-time multi-user editing.

---

## **Contributors**
- Aman Kumar

---

## **Acknowledgments**
This project was inspired by the need to create a web application with practical use cases and to enhance understanding of frontend and backend integration, drawing concepts from cloud-based tools like Google Sheets.
