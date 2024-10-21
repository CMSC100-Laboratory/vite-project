const SubjectList = (props) => {
    let subjects = props.data;

    console.log("This is the subject list component")

    console.log("Captured data from APP.JS " + subjects);
    // Result: Captured data from APP.JS [object Object],[object Object],[object Object]

    console.log("Captured data from APP.JS " + subjects[0].code);

    return(
        <>
            <h3 className="title">Courses in UPLB</h3>
            <ol>
                {
                    subjects.map((subject) => {
                        return <li key={subject.id}>{subject.code} - {subject.description}</li>
                    })
                }
            </ol>
        </>
    )    
}

export default SubjectList