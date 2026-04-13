import axios from "axios";
import { useState } from "react";
import Input from "../components/ui/input";
import Button from "../components/ui/Button";


const Api = () => {
  // 
  //  const [Data, setData] = useState([]);
  // useEffect(() => {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res)=>{
  //       return res.json();
  //   })
  //   .then((data)=>{
  //       setData(data);
  //     })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
  // }, [])

 
  // const [Data,setData] = useState([])
  // useEffect(()=>{
  // const api = async ()=>{
  // try {
  //   const data = await fetch ("https://jsonplaceholder.typicode.com/users");
  //     const res = await data.json();
  //     setData(res);
  //  } catch (error){}
  //    };
  //   api();
  //  },[])

  
  // const [Data,setData] = useState([])
  // useEffect(()=>{
  //   (async()=>{
  //   try{
  //     const data =await axios.get("https://jsonplaceholder.typicode.com/users");
  //   setData(data.data);
  //   } catch (error){}
  //   })();

  // },[])

  
  // const [Data,setData] = useState([])
  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //   .then((res)=>{
  //     setData(res.data);
  //   })
  //   .catch((error) => {
      
  //     console.log(error);
  //   });
  //  },[])


  const [postData, setpostData] = useState({
    title:"",
    body:""
  });
  const handlePost =async ()=>{
    const data =await axios.post("https://jsonplaceholder.typicode.com/posts",{
      title:postData.title,
      body:postData.body

    })
    console.log("api=",data)
  }

  return (

//  <div className="p-10 bg-gray-50 min-h-screen">
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//     {Data.map((item) => (
//       <div 
//         key={item.id} className=" bg-white p-8 rounded-3xl shadow-sm border border-secondary/20">
//             <h1 className="text-xl font-bold text-brand ">
//               {item.name}
//             </h1>
//             <h2 className="text-sm font-medium text-brand/80">
//               @{item.username}
//             </h2>
//       </div>
//     ))}
//   </div>
// </div>
<div>
  <div className='flex flex-col gap-6 justify-center mx-auto items-center h-screen w-lg'>
    <Input onChange={(e) =>
      setpostData((prev) =>({...prev, title: e.target.value}))
    }
      type="text"
      placeholder='Enter your taitle' />
    <Input onChange={(e) =>
      setpostData((prev) =>({...prev, body: e.target.value}))
    }
      type="text"
      placeholder='Enter your body' />
    <Button onClick={handlePost} variant="primary">
        submit
      </Button>
  </div>
</div>
)}
export default Api
