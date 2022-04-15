const Content = (data) => {
	let courseList = data.CourseParts;
	console.log(courseList);

	const lists = courseList.map((list)=>{
		return(
			<p> {list.part} : {list.exercise} </p>
		)
	})

	return lists;
};

export default Content;
