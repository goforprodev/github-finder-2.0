import React,{useContext,useState,useEffect} from "react"
import Card from "./Card"
import Git from "../assets/git.svg"
import Followers from "./Followers";
import Links from "./Links";
import UserContext from "../context/userContext"

const links = [
    {
        name : null,
        svg : "../assets/icon-location.svg"
    },
    {
        name : "@tweet",
        svg: "../assets/icon-twitter.svg"
    },
    {
        name : "link/github.com",
        svg: "../assets/icon-website.svg"
    },
    {
        name : "@username",
        svg: "../assets/icon-company.svg"
    }
]
const UserDetails = () => {
    const [user,setUser] = useState('octocat')
    const [userData,setUserData] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const {fetchSingleUser} = useContext(UserContext)

    console.log(fetchSingleUser)


    return(
        <Card>
            <div className="p-7 flex items-start">
                <img src={Git} alt={"user-image"} />
                <div className="details flex-1 ml-7">
                    <div className={"flex justify-between"}>
                        <div>
                            <h1>The Octocat</h1>
                            <p className={"text-primary-color py-2 "}>@octocat</p>
                        </div>
                        <p>Joined 25 Jan 2011</p>
                    </div>
                    <p className="my-4">There is no bio to show yet</p>
                    <Card>
                        <div className={"bg-dark-blue flex justify-around items-center p-4 my-7"}>
                            <Followers text={"Repos"} number={"8"} />
                            <Followers text={"Repos"} number={"8"} />
                            <Followers text={"Repos"} number={"8"} />
                        </div>
                    </Card>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        {
                            links.map((link,id) => (
                                <Links name ={link.name} svg={link.svg} key={id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default UserDetails