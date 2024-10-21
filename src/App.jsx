import SubjectList from './components/SubjectList'
// import './App.css'

function App() {
  const CMSCSubjects = [
    { code: "CMSC100", description: "Web Programming", id: 1 },
    { code: "CMSC150", description: "Scientific Computation", id: 2 },
    { code: "CMSC22", description: "Object-Oriented Programming", id: 3 },
  ]

  const CHEMSubjects = [
      { code: "CHEM100", description: "Introduction to Organic Chemistry", id: 1 },
      { code: "CHEM10", description: "Chemical Kinetics", id: 2 },
      { code: "CHEM11", description: "Introduction to Biochemistry", id: 3 },
  ]

  return (
    <>
    {/* Components are written using singleton or empty tags */}
    {/* This means they don't need a closing tag. If the text editor */}
    {/* puts a closing tag, that is an invalid syntax, omit the closing tag */}
    
    { console.log(CHEMSubjects) }
    { console.log(CMSCSubjects) }

    <SubjectList data={CHEMSubjects}/> 
    <SubjectList data={CMSCSubjects}/> 
    </>
  )
}

export default App
