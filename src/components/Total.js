const Total = (data) => {
	let courseList = data.CourseParts;
	var count = 0;
	
	courseList.map((list)=>{
		count +=  list.exercise 
	})

	return (
		<div>
			<p>Total Number of exercises: {count}</p>
		</div>
	)

};

export default Total;
