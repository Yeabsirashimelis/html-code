// const promise = new Promise((resolve, reject)=> {
//     // resolve({name:"abebe", age:50})
//     reject("Error occured")
// })


// // .then(), async await

// promise
//  .then(result => {
//     console.log(result)
// })
// .catch(error => {
//     console.log(error)
// })
// .finally(()=> {
//     console.log("Promise finished")
// })

// async - makes a function asynchronous
// , await - pause executiion inside that function

// async function greet() {
//     return "Hello"
// }

// // let data = await greet();
// // greet().then(a => console.log(a))
// // console.log(data)

// // error handling
// async function getData() {
//     try {
//         const response = await fetch("wrong url")
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log(data)
//     }
   
// }

// 200, 201, 404, 401, 400-invaliddata

// async function getData2 () {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data = await response.json()
//         console.log(data)
//         if (!response.ok) {
//             throw new Error("HTTP error: ", response.status)
//         }

//         if(response.status === 404) {
//            throw new Error("api not found")
//         }

//          if(response.status === 401) {
//            throw new Error("unauthorized. please login first")
//         }

//         if(response.status == 200) {
//             console.log("data successfully fetched")
//         }

//         if(response.status == 500) {
//             throw new Error("Server Error")
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// getData2()

// HTTP METHODS - rules for talking to server
//  GET - to read data/ fetch/ get

// async function getPost() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const post = await response.json()
//         console.log(post)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getPost()

const dataFromForm = {
    userId: 2,
    id:123456266,
    title:"my post",
    body: "learning fullstack in 2025 does worth. so learn and develop things."
}

async function createPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
         method: "POST",
        body: JSON.stringify(dataFromForm)
    });

    console.log(response)

    console.log("post created successfully")
    } catch (error) {
        console.log(error)
    }
 
    
}

createPost()