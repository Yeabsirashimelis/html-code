// export default function Home() {
//   return (
//     <header style={{backgroundColor: "gold", color: "black", padding: "1rem"}}>
//       <h1>
//         Welcome to my next.js app
//       </h1>
//     </header>
//   )
// }

// import Container from "@/components/container"
// import Header from "@/components/header"
// import ProfileCard from "@/components/profile-card"

// const Home = () => {
//   return (
//     <Container>
//       <Header/>
//       <ProfileCard name="Abebe" age={25} avatar="img1.jpg"/>
//       <ProfileCard name="Biruk" age={50} avatar="img2.jpg"/>
//     </Container>
//   )
// }
// export default Home

// props- inputs to components to make them dynamic. they are read only

// useEffect - for side effects in fuctionall components
// operations that happen outside  the normal rendering process of the component
// fetching data from API

// react keeps rendering pure, and useEffect is the tool to safely handle these side effects

// "use client"
//     import { useEffect, useState } from "react";

// export default function Home () {

//   // useEffect(()=>{
//   //   //side effect logic
//   // },[dependencies])

//   // 1, useffect without dependency array - runs after every render
//   // useEffect(()=>{
//   //   console.log("Component rendered")
//   // })

//   // 2, useEffect with empty dependency array - runs only once after initial render
//   // fetch initial data
//   //   useEffect(()=>{
//   //   console.log("Component rendered")
//   // },[])

//   // 3, useEffect with dependencies - watch list of variables, runs when any of them change
//   //   sideffect runs when "count" changes
//   // react compares old vs new values and rerun the effect when needed
// //   const [count, setCount] = useState(0);
// //  useEffect(()=> {
// //   console.log("Count changed:", count)
// //  }, [count]);

// //  function handleClick() {
// //   setCount(count + 1)
// //  }

// // fetching data with useEffect

// const [posts, setPosts] = useState([])
// const [loading, setLoading] = useState (false)

// useEffect(()=> {
//   async function fetchData() {
//     try {
//       setLoading(true)
//      const data =  await fetch("https://jsonplaceholder.typicode.com/posts");
//      const a = await data.json();
//      setPosts(a);
//        } catch (error) {
//        console.log(error)
//     }finally {
//       setLoading(false)
//     }
//   }
//   fetchData()
// },[])

// // setTimeout example of side effect
// // useEffect(() => {
//  setTimeout(() => {
//   console.log("This message appears after 3 seconds");
// }, 3000);
// // })

// // localstorage example of side effect

// // chnage the document title when user input changes
// const [inputValue, setInputValue] = useState("")
// useEffect(()=> {
//   document.title = inputValue
// },[inputValue])

// function handleInputChange(e) {
//   setInputValue(e.target.value)
// }

// // common mistakes while using useEffect
// //  1, missing dependencies - forgetting to include all variables that the effect depends on in the dependency array
// // 2, inifinte loops - updating state inside an effect without proper dependencies can cause continuous re-renders
// // 3, updating state incorrectly - not using functional updates when the new state depends on the previous state
//   return (
//     <div>yeah
//       <br/>
//       <label>title : </label><input value={inputValue} onChange={handleInputChange} className="border border-green-500"/>
//    {loading ? (<p className="text-center text-5xl">Loading...</p>) : posts.map((post) => (
//       <div key={post.id} className="border-b border-gray-300 mb-4 pb-4">
//         <h2 className="text-xl font-bold">{post.title}</h2>
//         <p>{post.body}</p>
//       </div>
//     ))}
//     {/* <button onClick={handleClick} className="bg-green-600 p-2">Increment Count: {count}</button> */}
//     </div>
//   );
//  }

//  useeffect in next.js
//   -use "useclient" - runs only on client side
//   - for data fetching in next.js, prefer using server components and fetch data directly there
//   - use useEffect for client-specific side effects like local storage interactions

// useContext
// prop drilling

"use client";

import NavBar from "@/components/navbat";
import Product from "@/components/Product";

export default function Home() {
  return (
    <div>
      <NavBar />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
        dolores consectetur cumque autem laboriosam blanditiis velit,
        praesentium at inventore molestiae odit in reiciendis sequi excepturi
        hic id repudiandae labore quo!
      </p>
      <br />
      <br />
      <Product />
    </div>
  );
}
