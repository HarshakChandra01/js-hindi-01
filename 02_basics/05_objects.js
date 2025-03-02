// Object destructring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: inst} = course

// console.log(courseInstructor);
console.log(inst);

// Basic method of react
// const navbar = ({company}) => {


// }

// navbar(company = "hitesh")

// API
// {
//     // JSON not object
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// sometimes we get api in form of arrays

[
    {},
    {},
    {}
]