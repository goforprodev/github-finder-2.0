import React from "react"
import Card from "./Card"
import Git from "../assets/git.svg"
import Followers from "./Followers";
import Links from "./Links";




const UserDetails = ({userData}) => {
    const {avatar_url,name,login,bio,public_repos,followers,following,company,blog,location,twitter_username} = userData
    const links = [
        {
            name : location,
            svg : "../assets/icon-location.svg"
        },
        {
            name : twitter_username,
            svg: "../assets/icon-twitter.svg"
        },
        {
            name : blog,
            svg: "../assets/icon-website.svg"
        },
        {
            name : company,
            svg: "../assets/icon-company.svg"
        }
    ]
    return(
        <Card>
            <div className="p-7 flex items-start">
                <img src={avatar_url || Git} alt={"user-image"} className={"w-32 h-32 rounded-full"} />
                <div className="details flex-1 ml-7">
                    <div className={"flex justify-between"}>
                        <div>
                            <h1>{name}</h1>
                            <p className={"text-primary-color py-2 "}>@{login}</p>
                        </div>
                        <p>Joined 25 Jan 2011</p>
                    </div>
                    <p className="my-4">{bio || 'There is no bio to show yet'}</p>
                    <Card>
                        <div className={"bg-dark-blue flex justify-around items-center p-4 my-7"}>
                            <Followers text={"Repos"} number={public_repos} />
                            <Followers text={"Followers"} number={followers} />
                            <Followers text={"Following"} number={following} />
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