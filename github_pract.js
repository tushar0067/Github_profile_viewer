    import React,{useState,useEffect} from "react";
    import ReactDOM from "react-dom/client"


    function Header(){
        return (
            <div className="head">
                <h1>Github Profile Viewer</h1>
            </div>
        );
    }

    function Main(){
        const [Profile,setProfile]= useState([]);
        const [CountNumber,setCountNumber]=useState("")
        const [Name,SetName]=useState("")
        async function getProfile(count){
            const ran=Math.floor(Math.random()*1000+1)
            try{
            const response= await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
            const data = await response.json();
            setProfile(data);
            }
            catch(err){
                console.log(err)
                setProfile([]);
            }
        }
       async function getProfileByName(ProfileName){
            try {
            const response = await fetch(`https://api.github.com/users/${ProfileName}`);
            if (!response.ok) {
                throw new Error("User not found");
            }
            const data = await response.json();
            // API returns a single user object, so wrap it in an array
            setProfile([data]);
            } catch (err) {
            console.log(err);
            setProfile([]); // Clear results if not found
            }
        }


        
        useEffect(()=>{
            getProfile(10);
            
        },[])

        return(
            <div  className="search">
            <input type="text" className="inp" placeholder="Search No's"  onChange={(e)=>setCountNumber(e.target.value)}/>
            <button onClick={()=>getProfile(Number(CountNumber))}>FindAll</button>
            <input type="text" className="inp" placeholder="Search profile" value={Name} onChange={(e)=>SetName(e.target.value)}/>
            <button onClick={()=>getProfileByName(Name)}>SearchProfile</button>
            <div className="profiles">
            {
            Profile.map((value)=>{
                return(
                    
                    <div className="card" key={value.id}>
                    <img id ="image" src={value.avatar_url}/>
                    <h2>{value.login}</h2>
                    <a href={value.html_url} target="_blank">Profile</a>
                    </div>
                    

                );

            })

            }
            </div>
            </div>
        );
        
    } 

    function GithubProfile(){
        return(
            <>
            <Header/>
            <Main/>
            </>
        );

    }



    ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile></GithubProfile>);

