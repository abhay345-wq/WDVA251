import React from 'react';

const Student = (props) => { 
  return ( 
    <div className="student-card"> 
      <h2>Student Details</h2> 

      <p> 
        <strong>Name:</strong> <span>{props.name}</span>
      </p> 

      <p> 
        <strong>Course:</strong> <span>{props.course}</span>
      </p> 

      <p> 
        <strong>Marks:</strong> <span>{props.marks}</span>
      </p> 
    </div> 
  ); 
}; 

function Experiment7() { 
  return ( 
    <div className="App"> 
      <style>{`
        .App { 
          text-align: center; 
          font-family: Arial, sans-serif; 
        } 
        .student-container { 
          display: flex; 
          justify-content: center; 
          gap: 20px; 
          padding: 20px; 
          flex-wrap: wrap; 
        } 
        .student-card { 
          border: 2px solid #4caf50; 
          padding: 15px; 
          border-radius: 10px; 
          width: 200px; 
          background-color: #f9f9f9; 
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); 
          text-align: center; 
        } 
        .student-card h2 { 
          color: #333; 
          font-size: 1.2rem;
          margin-top: 0;
          text-align: center;
          border-bottom: 1px solid #ddd;
          padding-bottom: 5px;
        }
        .student-card p {
          display: flex;
          justify-content: center;
          gap: 5px;
          margin: 10px 0;
          flex-wrap: wrap;
        }
      `}</style>

      <h1>Student Information System</h1> 

      <div className="student-container"> 
        <Student 
          name="Devansh" 
          course="B.Tech Data Science" 
          marks="95" 
        /> 

        <Student 
          name="Shivam" 
          course="B.Tech CS" 
          marks="88" 
        /> 

        <Student 
          name="Aryan" 
          course="B.Tech IT" 
          marks="92" 
        /> 
      </div> 
    </div> 
  );   
} 

export default Experiment7;