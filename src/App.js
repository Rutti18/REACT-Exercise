import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"


const App = () => {
  
  const CourseDetail = {

    courseName : 'Half Stack application development',
    courseParts : [
                  {part:'Fundamentals of React',exercise:10},
                  {part:'Using props to pass data',exercise:7},
                  {part:'State of a component',exercise:14},
                  {part:"Additional Course",exercise:1}
                ]
  }

  return (
    <div>
      
      <Header courseData={CourseDetail.courseName} />

      <Content CourseParts = {CourseDetail.courseParts} />

      <Total CourseParts = {CourseDetail.courseParts}  />
     </div>
  )
}
export default App;
